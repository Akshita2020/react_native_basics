import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
const MyText = () => {
  return (
    <Text style={[styles.text, styles.text1, {color: 'magenta'}]}>
      Hello! React native world!
    </Text>
  );
};

export default MyText;
