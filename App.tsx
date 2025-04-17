import {Text, SafeAreaView} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <Text
        style={{
          color: 'red',
          fontSize: 42,
          fontFamily: 'Arial',
          fontStyle: 'italic',
          fontWeight: '700',
          // letterSpacing: 10,
          textAlign: 'center',
        }}>
        Hello, world!
      </Text>
    </SafeAreaView>
  );
}

export default App;
