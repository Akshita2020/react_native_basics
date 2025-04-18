import React from 'react';
import {Text, Pressable} from 'react-native';

const Buttons = () => {
  return (
    <Pressable
      style={{backgroundColor: 'blue', borderRadius: 10, margin: 10}}
      onPress={() => {
        console.log('Button Pressed');
      }}>
      <Text
        style={{
          textAlign: 'center',
          padding: 10,
          color: 'white',
          fontSize: 18,
        }}>
        Submit
      </Text>
    </Pressable>
  );
};
export default Buttons;
