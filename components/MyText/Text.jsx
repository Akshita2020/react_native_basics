import React from 'react';
import {SafeAreaView, Image} from 'react-native';

const App = () => {
  const [image, setImage] = React.useState('http://example.com');
  return (
    <SafeAreaView>
      <Image
        source={image}
        style={{width: 200, height: 100, backgroundColor: 'red'}}
        resizeMode={'center'}
        onError={() => {
          console.log('Error has been detected while loading an image');
          setImage(require('../../assets/cake.png'));
        }}
      />
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80',
        }}
        style={{width: 200, height: 100, backgroundColor: 'blue'}}
        resizeMode={'center'}
      />
    </SafeAreaView>
  );
};

export default App;
