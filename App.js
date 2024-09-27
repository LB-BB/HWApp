import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
} from 'react-native';

const App = () => {
  const [textValue, setTextValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  return (
    <SafeAreaView>
      <TextInput
      style={{borderWidth: 1, padding: 10, borderRadius: 4}}
      value={textValue}
      onChangeText={(value) => {
        setTextValue(value);
      }}
      autoFocus={true}
      placeholder="Please enter your name"/>
      <TextInput
      style={{borderWidth: 1, padding: 10, borderRadius: 4}}
      value={emailValue}
      onChangeText={(value) => {
        setEmailValue(value);
      }}
      autoFocus={true}
      keyboardType="email-address"
      placeholder="Please enter your email"
      returnKeyType="go"/>
      <TextInput
      style={{borderWidth: 1, padding: 10, borderRadius: 4}}
      value={passwordValue}
      onChangeText={(value) => {
        setPasswordValue(value);
      }}
      autoFocus={true}
      secureTextEntry={true}
      keyboardType={'phone-pad'}
      placeholder={'Please enter your password'}/>
    </SafeAreaView>
  );
};

export default App;
