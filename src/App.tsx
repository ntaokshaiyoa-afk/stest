import React, { useEffect, useState } from "react"
import { Question, Genre } from "./types"
import { loadHistory, saveHistory, AnswerHistory } from "./utils/history"
import questionsAll from "./data/questions"
import GenreSelection from "./components/GenreSelection"
import QuizCard from "./components/QuizCard"
import Completion from "./components/Completion"
import "./styles.css"

type Screen = "genre-selection" | "quiz" | "completion"

const shuffle = <T,>(arr: T[]) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>("genre-selection")
  const [questions, setQuestions] = useState<Question[]>([])
  const [index, setIndex] = useState(0)

  const [history, setHistory] = useState<AnswerHistory>(() => loadHistory())
  const [answerHistory, setAnswerHistory] = useState<boolean[]>([])

  const [correctCount, setCorrectCount] = useState(0)
  const [lastResult, setLastResult] = useState<boolean | null>(null)

  useEffect(() => {
    saveHistory(history)
  }, [history])

  const startQuiz = (genre: Genre) => {
    const pool = questionsAll.filter((q) => q.genre === genre)
    setQuestions(shuffle(pool))

    setIndex(0)
    setCorrectCount(0)
    setAnswerHistory([])
    setLastResult(null)

    setScreen("quiz")
  }

  const recordAnswer = (questionId: string, correct: boolean) => {
    setLastResult(correct)

    if (correct) {
      setCorrectCount((c) => c + 1)
    }

    setAnswerHistory((prev) => [...prev, correct])

    setHistory((prev) => {
      const prevResults = prev[questionId]?.results ?? []
      const newResults = [correct, ...prevResults].slice(0, 2)
      return { ...prev, [questionId]: { results: newResults } }
    })
  }

  const handleNext = () => {
    if (index + 1 < questions.length) {
      setIndex((i) => i + 1)
      setLastResult(null)
    } else {
      setScreen("completion")
    }
  }

  const accuracy =
    answerHistory.length === 0
      ? 0
      : Math.round((correctCount / answerHistory.length) * 100)

  const color =
  accuracy > 80
    ? "#4caf50"
    : accuracy > 60
    ? "#ff9800"
    : "#f44336"
    
  return (
    <div className="app-root">
      <main className="app-main">

        {screen === "genre-selection" && (
          <GenreSelection onStart={startQuiz} />
        )}

        {screen === "quiz" && questions.length > 0 && (
          <>
            <div className="progress-wrapper">
              <div className="progress-info">
                <span>
                  {index + 1} / {questions.length}
                </span>

                <div
                  className="accuracy-circle"
                  style={{ "--percent": accuracy, "--color": color } as React.CSSProperties}
                >
                  {accuracy}%
                </div>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${((index + 1) / questions.length) * 100}%`
                  }}
                />
              </div>
            </div>

            <QuizCard
              question={questions[index]}
              onAnswer={(correct) =>
                recordAnswer(questions[index].id, correct)
              }
              onNext={handleNext}
            />
          </>
        )}

        {screen === "completion" && (
          <Completion
            total={questions.length}
            correct={correctCount}
            onRestart={() => setScreen("genre-selection")}
          />
        )}

      </main>

      {/* 最下部回答履歴バー */}
      {screen === "quiz" && (
        <div className="answer-history-bar">
          {questions.map((_, i) => {
            const r = answerHistory[i]

            return (
              <div
                key={i}
                className={`answer-dot ${
                  r === true
                    ? "correct"
                    : r === false
                    ? "incorrect"
                    : "unanswered"
                }`}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default App
