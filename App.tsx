import {SafeAreaView, Text, ScrollView, Button} from 'react-native';
import {useRef} from 'react';
function App() {
  let array = Array(1000).fill(0);
  const scrollViewRef = useRef<ScrollView | null>(null);
  const handleClick = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
    }
  };
  return (
    <SafeAreaView>
      <ScrollView ref={scrollViewRef}>
        {array.map((value, index: number) => (
          <Text key={index}>Hello World! {index}</Text>
        ))}
      </ScrollView>
      <Button color={'red'} onPress={handleClick} title={'Scroll to the top'} />
    </SafeAreaView>
  );
}

export default App;
