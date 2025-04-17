import {SafeAreaView, Text} from 'react-native';
import {useEffect, useState} from 'react';
function App() {
  const [text, setText] = useState('Hello World');
  useEffect(() => {
    console.log('the text has changed');
  }, [text]);
  useEffect(() => {
    console.log('the component has mounted');
  }, []);
  return (
    <SafeAreaView>
      <Text onPress={() => setText('Hello world, i just used useEffect')}>
        {text}
      </Text>
    </SafeAreaView>
  );
}

export default App;
