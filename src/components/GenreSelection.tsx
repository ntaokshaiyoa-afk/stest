import React, { useState } from 'react'
import { Genre } from '../types'

type Props = {
  onStart: (genre: Genre, mode: 'normal' | 'incorrect-once' | 'incorrect-twice') => void
}

const GenreSelection: React.FC<Props> = ({ onStart }) => {
  const [genre, setGenre] = useState<Genre>('management')
  const [mode, setMode] = useState<'normal' | 'incorrect-once' | 'incorrect-twice'>('normal')

  return (
    <div className="card">
      <h2>ジャンルを選択</h2>
      <div className="genre-buttons">
        <button className={genre === 'ml' ? 'active' : ''} onClick={() => setGenre('ml')}>機械学習・深層学習の基礎</button>
        <button className={genre === 'dl' ? 'active' : ''} onClick={() => setGenre('dl')}>ニューラルネットワーク／深層学習アーキテクチャと学習手法</button>
        <button className={genre === 'soc' ? 'active' : ''} onClick={() => setGenre('soc')}>AIの社会実装・法律・倫理</button>
      </div>

      <h3>出題モード</h3>
      <div className="mode-options">
        <label><input type="radio" checked={mode === 'normal'} onChange={() => setMode('normal')} />通常モード</label>
        <label><input type="radio" checked={mode === 'incorrect-once'} onChange={() => setMode('incorrect-once')} />前回不正解のみ</label>
        <label><input type="radio" checked={mode === 'incorrect-twice'} onChange={() => setMode('incorrect-twice')} />2回連続不正解のみ</label>
      </div>

      <div className="actions">
        <button onClick={() => onStart(genre, mode)}>開始</button>
      </div>
    </div>
  )
}

export default GenreSelection
