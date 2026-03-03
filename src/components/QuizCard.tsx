import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
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
  const nextRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
  if (answered && nextRef.current) {
    window.scrollTo({
      top: nextRef.current.offsetTop - 20,
      behavior: 'smooth'
    })
  }
}, [answered])

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



  return (
   <div
      className={`card quiz-card ${
        answered
          ? selected === question.answerIndex
            ? 'correct-bg correct-animate'
            : 'incorrect-bg'
          : ''
      }`}
    >
      
      {/* 🔥 ここにref追加 */}
      <div className="question-header" ref={questionRef}>
        <h2>{renderHighlightedText(question.question)}</h2>
      </div>

      <div className="choices">
        {question.choices.map((c, i) => (
          <button
            key={i}
            className={`choice ${
            answered
              ? i === question.answerIndex
                ? 'correct'
                : selected === i
                ? 'incorrect'
               : 'disabled'
               : ''
          }`}
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
        </div>
      )}
      {answered && (
        <div className={`fixed-next-area ${answered ? 'show' : ''}`} ref={nextRef}>
          <button className="next-button" onClick={handleNext}>
            次へ
          </button>
        </div>
      )}
    </div>
  )
}

export default QuizCard
