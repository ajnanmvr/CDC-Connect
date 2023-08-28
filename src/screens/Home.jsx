import React from 'react';
import Button from '../components/Button';
import {View} from 'react-native';
export default function Home({navigation}) {
  return (
    <View>
      <Button
        title={'Go to Login'}
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title={'Send Message'}
        onPress={() => navigation.navigate('SendMessage')}
      />
      <Button
        title={'Go to OTPInput'}
        onPress={() => navigation.navigate('OTPInput')}
      />
      <Button
        title={'Go to Form'}
        onPress={() => navigation.navigate('Form')}
      />
    </View>
  );
}
