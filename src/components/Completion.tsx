import React from 'react'

type Props = {
  onRestart: () => void
}

const Completion: React.FC<Props> = ({ onRestart }) => {
  return (
    <div className="card">
      <h2>終了</h2>
      <p>お疲れさまでした。問題は以上です。</p>
      <button onClick={onRestart}>最初へ戻る</button>
    </div>
  )
}

export default Completion
