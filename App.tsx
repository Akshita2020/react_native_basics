import {Text, SafeAreaView, View} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View
        style={{
          borderWidth: 1,
          borderTopWidth: 15,
          borderBottomWidth: 15,
          borderLeftWidth: 10,
          borderRightWidth: 10,
          borderColor: 'blue',
          borderRadius: 10,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <Text> Hello world!</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
