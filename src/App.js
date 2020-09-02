import React from 'react';
import './App.css';
import StartArea from './views/StartArea'
import GameArea from './views/GameArea'
import { useSelector } from 'react-redux';
import { selectLevel } from './components/gameSlice'
function App() {

  const n = useSelector(selectLevel);
  const cards = useSelector(state => state.game.cards)
  return (
    <div className="app">
      {n
        ?<GameArea n={n} data={cards}/>
        :<StartArea/>
      }
    </div>
  );
}

export default App;
