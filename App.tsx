import React from 'react';
import {SafeAreaView} from 'react-native';
import TextInput from './components/textInput/TextInput';
import Button from './components/Button/Button';

const App = () => {
  return (
    <SafeAreaView>
      <TextInput />
      <Button />
    </SafeAreaView>
  );
};

export default App;
