import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { Question } from '../types'

type Props = {
  question: Question
  onAnswer: (correct: boolean) => void
  onNext: () => void
  lastResult: boolean | null
}

const shuffleChoices = (choices: string[], answerIndex: number) => {
  const arr = choices.map((c, i) => ({
    text: c,
    correct: i === answerIndex
  }))

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }

  return {
    choices: arr.map((a) => a.text),
    answerIndex: arr.findIndex((a) => a.correct)
  }
}

const QuizCard: React.FC<Props> = ({ question, onAnswer, onNext }) => {
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)

  const questionRef = useRef<HTMLDivElement | null>(null)
  const explanationRef = useRef<HTMLDivElement | null>(null)
  const nextRef = useRef<HTMLDivElement | null>(null)

  
  const [shuffledChoices, setShuffledChoices] = useState<string[]>([])
  const [shuffledAnswerIndex, setShuffledAnswerIndex] = useState<number>(0)

  useEffect(() => {
    const shuffled = shuffleChoices(question.choices, question.answerIndex)
    setShuffledChoices(shuffled.choices)
    setShuffledAnswerIndex(shuffled.answerIndex)
  
    setSelected(null)
    setAnswered(false)
  }, [question])
  
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
    
    const correct = i === shuffledAnswerIndex
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
    { keyword: "適切な", className: "text-blue" },
    { keyword: "誤り", className: "text-red" },
    { keyword: "正しい", className: "text-blue" },
    { keyword: "含まれない", className: "text-red" },
    { keyword: "含まれる", className: "text-blue" },
    { keyword: "分類されない", className: "text-red" },
    { keyword: "分類される", className: "text-blue" }
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
        {shuffledChoices.map((c, i) => (
          <button
            key={i}
            className={`choice ${
            answered
              ? i === shuffledAnswerIndex
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
