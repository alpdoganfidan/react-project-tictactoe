import React from 'react';
import { VStack, HStack, Flex } from 'react-native-flex-layout';
import Box from './Box';

function Board({ board, handlePress, highlighted }) {
  const getBox = (index) => (
    <Box
      key={index}
      value={board[index]}
      onPress={() => handlePress(index)}
      highlighted={highlighted.includes(index)}
      disabled={board[index]}
    />
  );

  return (
    <VStack fill center spacing={2}>
      <HStack spacing={2} shouldWrapChildren>
        {[0, 1, 2].map((index) => getBox(index))}
      </HStack>
      <HStack spacing={2} shouldWrapChildren>
        {[3, 4, 5].map((index) => getBox(index))}
      </HStack>
      <HStack spacing={2} shouldWrapChildren>
        {[6, 7, 8].map((index) => getBox(index))}
      </HStack>
    </VStack>
  );
}

export default Board;
