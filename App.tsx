import {SafeAreaView, Text} from 'react-native';
import {useState} from 'react';
function App() {
  const [text, setText] = useState('Hello, world!');
  return (
    <SafeAreaView>
      <Text
        onPress={() => setText('Hello world! I learned how to change state')}>
        {text}
      </Text>
    </SafeAreaView>
  );
}

export default App;
