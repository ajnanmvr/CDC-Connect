import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../AppContainer';
import Button from '../components/Button';
import Screen from '../components/Screen';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  return (
    <Screen>
      <Button
        title={'Go to Login'}
        onPress={() => navigation.navigate('Login', {name: 'Ajnan'})}
      />
      <Button
        title={'Go to NewMessage'}
        onPress={() => navigation.navigate('NewMessage')}
      />
    </Screen>
  );
}
