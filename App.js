import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import MyText from './components/MyText/MyText';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <MyText keyWord={'Otters'} />
      </View>
    </SafeAreaView>
  );
};


export default App;
