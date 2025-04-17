import {SafeAreaView} from 'react-native';
import Item from './components/Items/Item';


function App() {
  return (
    <SafeAreaView>
      <Item Price={100} Name={'Table'} />
      <Item Price={200} Name={'Chair'} />
      <Item Price={300} Name={'Glassdoor'} />
    </SafeAreaView>
  );
}

export default App;
