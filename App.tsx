import {Text, SafeAreaView, View} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: 'green',
          margin: 10,
          // marginTop: 50,
          // marginLeft: 100,
          // marginRight: 100,
          // marginBottom: 50,
          marginVertical: 50,
          marginHorizontal: 50,
        }}>
        <Text> Hello world!</Text>
      </View>
      <View style={{backgroundColor: 'green'}}>
        <Text> Hello world!</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
