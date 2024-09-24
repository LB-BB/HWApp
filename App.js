import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View
} from 'react-native';
import useToggle from './customHooks/useToggle';

const App = () => {
  const [isOn, toggleIsOn] = useToggle(false)
  return (
    <SafeAreaView>
      <View>
        <Text>{isOn ? 'ON' : 'OFF'}</Text>
        <Button title='Toggle' onPress={toggleIsOn} />
      </View>
    </SafeAreaView>
  )
};

export default App;