import React from 'react';
import {View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
      }}>
      <View style={{backgroundColor: 'yellow', width: 50, height: 200}} />
      <View style={{backgroundColor: 'green', width: 50, height: 200}} />
      <View style={{backgroundColor: 'black', width: 50, height: 200}} />
    </View>
  );
};

export default App;
