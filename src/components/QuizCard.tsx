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

  const questionRef = useRef<HTMLDivElement | null>(null)
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

    // 🔥 次の問題描画後にスクロールさせるため少し遅延
    setTimeout(() => {
      if (questionRef.current) {
        questionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 0)
  }

  return (
   <div
      className={`card quiz-card ${
        answered
          ? selected === question.answerIndex
            ? 'correct-bg'
            : 'incorrect-bg'
          : ''
      }`}
    >
      
      {/* 🔥 ここにref追加 */}
      <div className="question-header" ref={questionRef}>
        <h2>{question.question}</h2>
      </div>

      <div className="choices">
        {question.choices.map((c, i) => (
          <button
            key={i}
            className="choice"
            onClick={() => handleSelect(i)}
          >
            {c}
          </button>
        ))}
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
