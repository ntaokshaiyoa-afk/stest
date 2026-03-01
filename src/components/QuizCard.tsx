import React, { useState, useRef, useEffect } from 'react'
import { Question } from '../types'

type Props = {
  question: Question
  onAnswer: (correct: boolean) => void
  onNext: () => void
  lastResult: boolean | null
}

const QuizCard: React.FC<Props> = ({ question, onAnswer, onNext }) => {
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const explanationRef = useRef<HTMLDivElement | null>(null)

  const handleSelect = (i: number) => {
    if (answered) return

    const correct = i === question.answerIndex
    setSelected(i)
    setAnswered(true)
    onAnswer(correct)
  }

  const handleNext = () => {
    setSelected(null)
    setAnswered(false)
    onNext()
  }

  // 背景クラスを明確化
  const cardClass =
    !answered
      ? ''
      : selected === question.answerIndex
      ? 'card correct-bg'
      : 'card incorrect-bg'

  useEffect(() => {
    if (answered && explanationRef.current) {
      explanationRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }, [answered])

  return (
    <div className={cardClass}>
      <div className="question-header">
        <h2>{question.question}</h2>
      </div>

      <div className="choices">
        {question.choices.map((c, i) => {
          let choiceClass = 'choice'

          if (answered) {
            if (i === question.answerIndex) {
              choiceClass += ' correct'
            } else if (i === selected) {
              choiceClass += ' incorrect'
            } else {
              choiceClass += ' disabled'
            }
          }

          return (
            <button
              key={i}
              className={choiceClass}
              onClick={() => handleSelect(i)}
            >
              {c}
            </button>
          )
        })}
      </div>

      {answered && (
        <div className="explanation-area">
          <p className="result">
            {selected === question.answerIndex ? '正解！' : '不正解'}
          </p>

          <div ref={explanationRef}>
            {question.explanation}
          </div>

          <div className="next-area">
            <button onClick={handleNext}>
              次へ
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default QuizCard