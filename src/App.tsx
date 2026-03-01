import React, { useEffect, useMemo, useState } from 'react'
import { Question, Genre } from './types'
import { loadHistory, saveHistory, AnswerHistory } from './utils/history'
import questionsAll from './data/questions'
import GenreSelection from './components/GenreSelection'
import QuizCard from './components/QuizCard'
import Completion from './components/Completion'
import './styles.css'

type Screen = 'genre-selection' | 'quiz' | 'completion'

const shuffle = <T,>(arr: T[]) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('genre-selection')
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [mode, setMode] = useState<'normal' | 'incorrect-once' | 'incorrect-twice'>('normal')
  const [questions, setQuestions] = useState<Question[]>([])
  const [index, setIndex] = useState<number>(0)
  const [history, setHistory] = useState<AnswerHistory>(() => loadHistory())
  const [lastResult, setLastResult] = useState<boolean | null>(null)
  const [correctCount, setCorrectCount] = useState<number>(0)

  useEffect(() => {
    saveHistory(history)
  }, [history])

const startQuiz = (genre: Genre, m: typeof mode) => {
  setSelectedGenre(genre)
  setMode(m)
  setIndex(0)
  setLastResult(null)
  setCorrectCount(0)

  const pool = questionsAll.filter((q) => q.genre === genre)

  const matchesMode = (q: Question) => {
    const rec = history[q.id]?.results ?? []
    if (m === 'incorrect-once') {
      return rec.length > 0 && rec[0] === false
    }
    if (m === 'incorrect-twice') {
      return rec.length >= 2 && rec[0] === false && rec[1] === false
    }
    return true
  }

  const filtered =
    m === 'normal' ? pool : pool.filter(matchesMode)

  setQuestions(shuffle(filtered))   // ←ここで固定
  setScreen('quiz')
}


const recordAnswer = (questionId: string, correct: boolean) => {
  setLastResult(correct)

  if (correct) {
    setCorrectCount((c) => c + 1)
  }

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
      setScreen('completion')
    }
  }

  const handleRestart = () => {
    setScreen('genre-selection')
    setSelectedGenre(null)
    setMode('normal')
    setIndex(0)
    setLastResult(null)
  }

  return (
    <div className="app-root">
      <main className="app-main">
        {screen === 'genre-selection' && (
          <GenreSelection onStart={startQuiz} />
        )}

{screen === 'quiz' && (
  <>
    {questions.length === 0 ? (
      <div className="card">
        <p>該当する問題がありません。</p>
        <button onClick={handleRestart}>最初へ戻る</button>
      </div>
    ) : (
      <>
        <div className="progress-wrapper">
          <div className="progress-info">
            <span>
              {index + 1} / {questions.length}
            </span>
            <span>
              正答率:{" "}
              {index === 0
                ? "0%"
                : Math.round((correctCount / index) * 100) + "%"}
            </span>
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
          lastResult={lastResult}
        />
      </>
    )}
  </>
)}

        {screen === 'completion' && (
  <Completion
    onRestart={handleRestart}
    total={questions.length}
    correct={correctCount}
  />
)}
      </main>
    </div>
  )
}

export default App
