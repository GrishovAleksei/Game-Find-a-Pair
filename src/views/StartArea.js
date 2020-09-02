import React, { useState } from 'react'
import './StartArea.css'
import { initGame } from '../components/gameSlice'
import { useDispatch } from 'react-redux';

const StartArea = () => {
  const dispatch = useDispatch()
  const [contentClass, setClass] = useState('')
  const show = () => {
    contentClass
                ? setClass('')
                : setClass('show')
  }

  return (
    <div>
      <h3>Choose a difficulty level</h3>
      <div className="dropdown">
        <button onClick={() => show() } className="dropbtn">
          Choose a level
        </button>
        <div className={"dropdown-content " + contentClass} id="levelList">
          <span onClick={() => dispatch(initGame(2))}>
            Easy
          </span>
          <span onClick={() => dispatch(initGame(4))}>
            Medium
          </span>
          <span onClick={() => dispatch(initGame(6))}>
            Hard
          </span>
          <span onClick={() => dispatch(initGame(8))}>
            Like a God
          </span>
        </div>
      </div>
    </div>
  )
}

export default StartArea