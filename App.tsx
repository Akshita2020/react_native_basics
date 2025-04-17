import {SafeAreaView, View, Text} from 'react-native';
import MyText from './components/MyText/Text';

function App() {
  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'yellow', height: 30, alignItems:'center'}}>
        <Text>this is going go to be my header container</Text>
      </View>
      <View>
        <MyText />
        <MyText />
        <MyText />
      </View>
      <View>
        <Text>this is going go to be my footer container</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
