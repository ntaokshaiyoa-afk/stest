import React, { useState, useRef, useEffect } from 'react'
import { Question } from '../types'

type Props = {
  question: Question
  onAnswer: (correct: boolean) => void
  onNext: () => void
  lastResult: boolean | null
}

const renderHighlightedText = (text: string) => {
  const patterns = [
    { keyword: "適切ではない", className: "text-red" },
    { keyword: "不適切な", className: "text-red" },
    { keyword: "含まれない", className: "text-red" },
    { keyword: "適切な", className: "text-blue" },
    { keyword: "正しい", className: "text-blue" },
    { keyword: "含まれる", className: "text-blue" }
  ]

  let result: React.ReactNode[] = [text]

  patterns.forEach(({ keyword, className }) => {
    result = result.flatMap((part) => {
      if (typeof part !== "string") return [part]

      const split = part.split(keyword)
      if (split.length === 1) return [part]

      return split.flatMap((s, i) =>
        i < split.length - 1
          ? [s, <span key={keyword + i} className={className}>{keyword}</span>]
          : [s]
      )
    })
  })

  return result
}

const QuizCard: React.FC<Props> = ({ question, onAnswer, onNext, lastResult }) => {
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const explanationRef = useRef<HTMLDivElement | null>(null)

  const handleSelect = (i: number) => {
    if (answered) return
    setSelected(i)
    const correct = i === question.answerIndex
    setAnswered(true)
    onAnswer(correct)
  }

  const getChoiceClass = (i: number) => {
    if (!answered) return ''
    if (i === question.answerIndex) return 'choice correct'
    if (selected === i && selected !== question.answerIndex) return 'choice incorrect'
    return 'choice disabled'
  }

  useEffect(() => {
    if (answered && explanationRef.current) {
      explanationRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }, [answered])

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
      <div className="question-header">
        <h2>{renderHighlightedText(question.question)}</h2>
      </div>

      <div className="choices">
        {question.choices.map((c, i) => (
          <button
            key={i}
            className={`choice ${getChoiceClass(i)}`}
            onClick={() => handleSelect(i)}
          >
            {c}
          </button>
        ))}
      </div>

      {answered && (
        <div className="explanation">
          <p className="result">{selected === question.answerIndex ? '正解！' : '不正解'}</p>
          <div className="explanation" ref={explanationRef}>{question.explanation}</div>
          <div className="next-area">
            <button id="nextbutton" onClick={() => { setSelected(null); setAnswered(false); onNext() }}>次へ</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default QuizCard
