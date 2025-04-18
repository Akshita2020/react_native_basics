import React from 'react';
import {SafeAreaView, TextInput,Switch,View,Text} from 'react-native';


export const TextInputs = () => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [shouldKeepLoggedIn, setShouldKeepLoggedIn] = React.useState(true);

  return (
    <SafeAreaView>
      <TextInput
        style={{borderWidth: 1, padding: 10, margin: 10, borderRadius: 20}}
        value={name}
        onChangeText={name => {
          console.log('name:>>', name);
          setName(name);
        }}
        placeholder={'Please enter your name'}
        autoFocus={true}
        returnKeyType={'next'}
      />
      <TextInput
        style={{borderWidth: 1, padding: 10, margin: 10, borderRadius: 20}}
        value={email}
        onChangeText={email => {
          console.log('email:>>', email);
          setEmail(email);
        }}
        placeholder={'Please enter your email'}
        // autoFocus={true}
        keyboardType={'email-address'}
        returnKeyType={'next'}
      />
      <TextInput
        style={{borderWidth: 1, padding: 10, margin: 10, borderRadius: 20}}
        value={password}
        onChangeText={password => {
          console.log('password:>>', password);
          setPassword(password);
        }}
        placeholder={'Please enter password'}
        // autoFocus={true}
        secureTextEntry={true}
        keyboardType={'phone-pad'}
        returnKeyType={'go'}
      />
      <View style={{flex:1, flexDirection:'row',  margin:10, alignItems:'center'}}>
        <Switch
          value={shouldKeepLoggedIn}
          onValueChange={value => setShouldKeepLoggedIn(value)}
        />
        <Text >Keep me logged in!</Text>
      </View>
    </SafeAreaView>
  );
};

export default TextInputs;
