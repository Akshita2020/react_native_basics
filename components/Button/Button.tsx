import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

const Buttons = () => {
  return (
    <TouchableOpacity
      style={{backgroundColor: 'blue', borderRadius: 10, margin: 10}}
      onPress={() => {
        console.log('Button Pressed');
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            padding: 10,
            color: 'white',
            fontSize: 18,
          }}>
          Submit
        </Text>
        <FontAwesomeIcon icon={faCheck} color="white" size={10} />
      </View>
    </TouchableOpacity>
  );
};
export default Buttons;
