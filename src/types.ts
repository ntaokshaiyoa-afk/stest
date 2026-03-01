// 問題データの型定義
export type Genre = 'management' | 'hr' | 'finance';

export interface Question {
  id: string;
  genre: Genre;
  question: string;
  choices: [string, string, string, string];
  answerIndex: number;
  explanation: string;
}

export interface HistoryRecord {
  questionId: string;
  results: boolean[];
}

export interface AnswerHistory {
  [questionId: string]: {
    results: boolean[];
  };
}

export interface AppState {
  currentScreen: 'genre-selection' | 'quiz' | 'completion';
  selectedGenre: Genre | null;
  selectedMode: 'normal' | 'incorrect-once' | 'incorrect-twice';
  currentQuestionIndex: number;
  questions: Question[];
  answered: boolean;
  selectedAnswerIndex: number | null;
  isCorrect: boolean | null;
  answerHistory: AnswerHistory;
}