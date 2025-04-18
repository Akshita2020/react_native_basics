import React from 'react';
import {Image, SafeAreaView, ScrollView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{backgroundColor: 'yellow', height: 600}}
        onScroll={() => {
          console.log('we are scrolling');
        }}>
        <Image
          source={require('./assets/cake.png')}
          style={{width: 500, height: 500, margin: 10}}
        />
        <Image
          source={require('./assets/cake.png')}
          style={{width: 500, height: 500, margin: 10}}
        />
        <Image
          source={require('./assets/cake.png')}
          style={{width: 500, height: 500, margin: 10}}
        />
        <Image
          source={require('./assets/cake.png')}
          style={{width: 500, height: 500, margin: 10}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
