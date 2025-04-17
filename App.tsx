import {SafeAreaView, View, Button} from 'react-native';
import {useState} from 'react';
import {ThemeContext} from './components/contexts/ThemeContext';
import HomeScreen from './components/HomeScreen/HomeScreen';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={{isDarkMode}}>
      <SafeAreaView>
        <View
          style={{
            backgroundColor: isDarkMode ? '#222222' : '#ffffff',
            height: 100,
          }}>
          <Button onPress={toggleTheme} title={'Switch Theme'} />
        </View>
        <HomeScreen />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

export default App;
