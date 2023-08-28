import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Link from '../components/Link';
import Title from '../components/Title';

const LoginScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  useNavigation();
  const handleLogin = () => {
    // Implement login logic here
  };

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={require('../media/avatar.png')} />
      <Title>Log In</Title>

      <InputField
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        maxLength={10}
        keyboardType="number-pad"
      />
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
