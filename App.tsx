import {Button, Text, SafeAreaView} from 'react-native';
import useToggle from './components/CustomHooks/useToggle';

function App() {
  const [isOn, toggleIsOn] = useToggle(false);
  return (
    <SafeAreaView>
      <Text> Toggle is {isOn ? 'on' : 'off'}</Text>
      <Button title={'toggle'} onPress={toggleIsOn} />
    </SafeAreaView>
  );
}

export default App;
