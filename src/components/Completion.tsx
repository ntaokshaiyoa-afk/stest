import React from 'react'

interface Props {
  onRestart: () => void
  total?: number
  correct?: number
}

const Completion: React.FC<Props> = ({
  onRestart,
  total = 0,
  correct = 0
}) => {
  const percentage =
    total > 0 ? Math.round((correct / total) * 100) : 0

  return (
    <div className="card">
      <h2>終了</h2>
      <p>お疲れさまでした。問題は以上です。</p>

      <p>正答数: {correct} / {total}</p>
      <p>正答率: {percentage}%</p>

      <button onClick={onRestart}>最初へ戻る</button>
    </div>
  )
}

export default Completion
