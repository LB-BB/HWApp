import React, { useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button
} from 'react-native';
import HomeScreen from './components/HomeScreen/HomeScreen';
import { ThemeContext } from './components/contexts/ThemeContext';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <ThemeContext.Provider value={isDarkMode}>
      <SafeAreaView>
        <View style={{backgroundColor: isDarkMode ? '#222222' : '#ffffff'}}>
          <Text style={{color: isDarkMode ? '#ffffff' : '#000000'}}>Hello World!</Text>
          <Button onPress={toggleTheme} title={'Switch Mode'}></Button>
        </View>
        <HomeScreen />
      </SafeAreaView>
    </ThemeContext.Provider>
  )
};

export default App;