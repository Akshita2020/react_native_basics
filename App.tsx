import React, {Component} from 'react';
import {Text, SafeAreaView} from 'react-native';

interface AppState {
  name?: string;
}

class App extends Component<{}, AppState> {
  constructor(props: string) {
    super(props);
    this.state = {
      name: undefined,
    };
  }
  componentDidMount(): void {
    console.log('components is mounted');
  }
  componentShouldMount(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any,
  ): boolean {
    console.log('Checking if component should update');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
    console.log('Getting snapshot before update');
    return null;
  }
  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot: any,
  ) {
    console.log('Component did update');
  }
  componentWillUnmount(): void {
    console.log('Component will unmount');
  }
  render() {
    return (
      <SafeAreaView>
        <Text
          onPress={() => {
            this.setState({name: 'akshita'});
          }}>
          Hello, {this.state?.name}!
        </Text>
      </SafeAreaView>
    );
  }
}

export default App;
