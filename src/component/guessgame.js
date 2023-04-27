import React, { useState } from 'react';
import "./guessgame.css";

export default function GuessGame() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState();
  const [count, setCount] = useState(0);

  function handleMatch() {
    setCount(count + 1);
    if (+guess === number) {
      alert("Congratulations! You guessed the right number in " + count + " attempts!");
    } else if (+guess < number) {
      alert('you guessed a smaller number...');
    } else {
      alert('You guessed a higher number...');
    }
  }

  return (
    <div>
        <input
          type="number"
          value={guess}
          placeholder='Guess Lucky Number...'
          onChange={(event) => setGuess(event.target.value)}
        />
        <button onClick={handleMatch}>Match Number</button>
    </div>
  );
}
