import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppContainer';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Link from '../components/Link';
import Screen from '../components/Screen';
import Title from '../components/Title';
import { useTheme } from '../hooks/ThemeProvider'; // Import the theme hook

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUpScreen = ({ navigation }: SignUpProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleSignUp = () => {
    // Implement sign-up logic here
  };
  
  const theme = useTheme();

  return (
    <Screen>
      <View style={styles.container}>
        <Image style={styles.avatar} source={require('../media/avatar.png')} />
        <Title>Sign Up</Title>
        <InputField
          placeholder="Name"
          value={name}
          onChangeText={setName}
          secureTextEntry={false}
        />
        <InputField
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          secureTextEntry={false}
        />
        <InputField
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          secureTextEntry={false}
        />
        <InputField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <InputField
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
        <Button title="Sign Up" onPress={handleSignUp} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signInLink}>
            Already have an account? <Link>Log In</Link>
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
    alignItems: 'center',
  },
  avatar: {
    height: 110,
    width: 110,
  },
  signInLink: {
    marginTop: 20,
  },
});

export default SignUpScreen;
