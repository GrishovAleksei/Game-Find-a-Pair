import React from 'react'
import GameCard from '../components/GameCard'
import Modal from '../components/Modal'
import { useSelector } from 'react-redux'
import { isFinished } from '../components/gameSlice'


const GameArea = ({ n, data }) => {
  const finished = useSelector(isFinished)
  return <>
    <div className="playArea">
      {
        data.map((number, index)  => ( 
          <GameCard key={index} n={n} index={index} number={number}/>
        ))
      }
      {finished ? <Modal n={n} /> : null}
    </div>
    
  </>
}

export default GameArea