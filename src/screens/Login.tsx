import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppContainer';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Link from '../components/Link';
import Screen from '../components/Screen';
import Title from '../components/Title';
import { useTheme } from '../hooks/ThemeProvider'; // Import the theme hook

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({navigation}: LoginProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleLogin = () => {
    // Implement login logic here
  };
  const theme = useTheme();

  return (
    <Screen>
      <View style={styles.container}>
        <Image style={styles.avatar} source={require('../media/avatar.png')} />
        <Title>Log In</Title>
        <InputField placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} />
        <InputField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Button title="Log In" onPress={handleLogin} />
        <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
          <Text style={styles.signUpLink}>
            Don't you have an account? <Link>Sign Up</Link>
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 110,
    width: 110,
  },
  signUpLink: {
    marginTop: 20,
  },
});

export default LoginScreen;
