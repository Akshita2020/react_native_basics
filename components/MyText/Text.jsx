import {Text} from 'react-native';
import React, {useState, useEffect, Component} from 'react';
import styles from './styles';
class MyText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: props.name + ' Tiwari',
    };
  }
  componentDidMount() {
    //It is called right after the component is rendered
    //Perform some setup for example fetching data from API
    console.log('Our component has been mounted');
  }
  componentDidUpdate(prevProps, prevState) {
    //Called when state or props of the application is updated
    console.log(
      'The state of the application has been changed',
      prevState,
      this.state,
    );
  }
  componentWillUnmount() {
    console.log('Component is now being destroyed');
  }
  render() {
    return (
      <Text
        style={[styles.text, styles.text1, {color: 'green'}]}
        onPress={() =>
          this.setState({...this.state, ...{fullName: 'Akshita, T.'}})
        }>
        Hello, {this.props.name}! I know that your full name is{' '}
        {this.state.fullName}
      </Text>
    );
  }
}

export default MyText;
