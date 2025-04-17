import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
const MyText = () => {
  const handleTextClick = () => {
    alert('Text has been clicked');
  };
  return (
    <Text
      style={[styles.text, styles.text1, {color: 'magenta'}]}
      onPress={() => handleTextClick()}>
      Hello! React native world!
    </Text>
  );
};

export default MyText;
