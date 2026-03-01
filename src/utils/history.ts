import { AnswerHistory } from '../types'

const STORAGE_KEY = 'business_quiz_history'

export const loadHistory = (): AnswerHistory => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

export const saveHistory = (history: AnswerHistory) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
  } catch {
    // ignore
  }
}
