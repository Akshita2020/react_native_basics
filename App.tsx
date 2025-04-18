import React from 'react';
import {SafeAreaView} from 'react-native';
import MyText from './components/MyText/Text';

const App = () => {
  return (
    <SafeAreaView>
      <MyText />
      <MyText name={'Akshita'} />
    </SafeAreaView>
  );
};
export default App;
