import React from 'react'
import './Modal.css'
import { useDispatch } from 'react-redux';
import { initGame, endGame } from '../components/gameSlice'

function Modal({ n }) {
  const dispatch = useDispatch()

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <h3>Начать заново?</h3>
        <div>
          <button id='yes' onClick={() => dispatch(initGame(n))}>Да</button>
          <button id='no' onClick={() => dispatch(endGame())}>Нет</button>
        </div>
      </div>
    </div>
    
  )
}

export default Modal
