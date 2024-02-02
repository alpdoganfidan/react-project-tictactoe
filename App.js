// App.js
import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { VStack } from 'react-native-flex-layout';
import checkWinner from './components/checkWinner';
import Board from './components/Board';
import { Vibration } from 'react-native';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(null));
  const [highlighted, setHighlighted] = useState([]);
  const [winner, setWinner] = useState(null);

  const handlePress = (index) => {
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const winnerLine = checkWinner(newBoard);
    if (winnerLine) {
      setHighlighted(winnerLine);
      setWinner(currentPlayer);
      alert(`${currentPlayer} won!`);
    } else {
      setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
    }
  };

  const handleReset = () => {
    setCurrentPlayer('X');
    setBoard(Array(9).fill(null));
    setHighlighted([]);
    setWinner(null);

    // Kısa bir titreşim (örneğin, 100 milisaniye)
    Vibration.vibrate(100);
  };

  return (
    
    <VStack fill center spacing={2} alignItems="center" style={{margin:50}}>

    <Text style={{ fontSize: 36 }}>{currentPlayer} to Play </Text>
      <Board board={board} handlePress={handlePress} highlighted={highlighted} />
      <Button title="Reset" onPress={handleReset} />

    </VStack>
  );
}

export default App;
