import React, {Component} from 'react';
import {Text, SafeAreaView} from 'react-native';

class App extends Component {
  constructor(props: string) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <Text
          onPress={() => {
            this.setState({name: 'akshita'});
          }}>
          {' '}
          Hello World{' '}
        </Text>
      </SafeAreaView>
    );
  }
}

export default App;
