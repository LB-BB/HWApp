import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Switch,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [shouldKeepLoggedIn, setShouldKeepLoggedIn] = useState(true);
  return (
    <SafeAreaView>
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
      placeholder={'Please enter your password'}/>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Switch
        value={shouldKeepLoggedIn}
        onValueChange={(value) => setShouldKeepLoggedIn(value)}
        />
        <Text style={{marginLeft: 10}}>Keep me logged in</Text>
       </View>
      <TouchableOpacity
      style={[{backgroundColor: 'black'}, (emailValue.length === 0 && {opacity: 0.5})]}
      disabled={emailValue.length === 0 || passwordValue.length < 8}
      onPress={() => {
        console.log(emailValue, passwordValue, shouldKeepLoggedIn);
      }}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{
            color: 'white',
            textAlign: 'center',
            padding: 10,
            }}>
            Submit
          </Text>
          <FontAwesomeIcon icon={faCheck} style={{color: 'white'}} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
