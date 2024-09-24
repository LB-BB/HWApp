import React, {useEffect, useState} from 'react';
import { Text } from 'react-native';

const MyText = (props) => {
  const [keyWord, setKeyWord] = useState(props.keyWord);

  useEffect(() => {
    console.log('The component has been mounted');
    return () => {
      console.log('Component is now being destroyed');
    };
  }, []);

  useEffect(() => {
    console.log('The value of keyWord has been changed');
  }, [keyWord]);

  return(
    <Text onPress={() => {
      setKeyWord('Bandanas');
    }}>{keyWord} are great.</Text>
  );
};

export default MyText;
