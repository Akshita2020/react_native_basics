import React, {Component} from 'react';
import {Text, SafeAreaView} from 'react-native';

class App extends Component {
  constructor(props: string) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView>
        <Text> Hello World </Text>
      </SafeAreaView>
    );
  }
}

export default App;
