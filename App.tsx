import {Text, SafeAreaView, View} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View style={{position: 'relative', backgroundColor: 'red'}}>
        <View
          style={{
            backgroundColor: 'yellow',
            margin: 10,
            marginTop: 50,
            marginLeft: 100,
            marginRight: 100,
            marginBottom: 50,
            marginVertical: 50,
            marginHorizontal: 50,
            padding: 10,
            paddingTop: 100,
            paddingBottom: 100,
            paddingLeft: 100,
            paddingRight: 50,
            paddingHorizontal: 50,
            paddingVertical: 50,
            position: 'relative',
            zIndex: 1,
          }}>
          <Text> Hello world!</Text>
        </View>
        <View
          style={{
            backgroundColor: 'green',
            position: 'absolute',
            top: 50,
            left: 10,
            bottom: 10,
            right: 20,
            zIndex: 2,
          }}>
          <Text> Hello world2!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
