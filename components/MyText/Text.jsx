import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const MyText = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};
MyText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MyText;
