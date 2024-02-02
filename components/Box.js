import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Flex } from 'react-native-flex-layout';

function Box({ value, onPress, disabled, highlighted }) {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <Flex w={80} h={80} center style={{ backgroundColor: highlighted ? 'lightgreen' : 'lightgray' }}>
        <Text style={{ fontSize: 56 }}>{value}</Text>
      </Flex>
    </TouchableOpacity>
  );
}

export default Box;
