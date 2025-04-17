import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {ThemeContext} from '../contexts/ThemeContext';
const HomeScreen = () => {
  const isDarkMode = useContext(ThemeContext);
  return (
    <View
      style={{
        backgroundColor: isDarkMode ? '#222222' : '#ffffff',
      }}>
      <Text
        style={{
          color: isDarkMode ? '#222222' : '#ffffff',
        }}>
        Welcome to the home screen
      </Text>
    </View>
  );
};
export default HomeScreen;
