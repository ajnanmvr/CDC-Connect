import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../components/AppContainer';
import Button from '../components/Button';
import {useTheme} from '../hooks/ThemeProvider'; // Import the theme hook
import Screen from '../components/Screen';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  const theme = useTheme(); // Get the current theme

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

const styles = StyleSheet.create({});
