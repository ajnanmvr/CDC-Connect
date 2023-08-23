import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../components/AppContainer';
import Button from '../components/Button';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title={'Go to Login'}
        onPress={() => navigation.navigate('Login', {name: 'Ajnan'})}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
