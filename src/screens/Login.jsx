import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
} from 'react-native';

import {useNavigation, CommonActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Link from '../components/Link';
import Title from '../components/Title';
import Axios from '../utils/Axios';
import {useUser} from '../contexts/UserContext';
import {useAppearance} from '../contexts/AppearenceContext';

const LoginScreen = () => {
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { setUser} = useUser();

  const navigation = useNavigation();
  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await Axios.post('/user/login', {
        phoneNumber,
        password,
      });
      setLoading(false);
      setUser(response.data.user);
      await AsyncStorage.setItem('authToken', response?.data?.token);
      await AsyncStorage.setItem(
        'userData',
        JSON.stringify(response?.data?.user),
      );

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
    } catch (error) {
      setLoading(false);
      Alert.alert(
        'Login Failed',
        error?.response?.data?.error
          ? error?.response?.data?.error
          : 'something went wrong',
      );
    }
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
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
      {!loading ? (
        <Button title="Log In" onPress={handleLogin} />
      ) : (
        <ActivityIndicator />
      )}

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
    alignItems: 'center',
    padding:20
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    elevation: 3,
  },
  avatar: {
    height: 110,
    width: 110,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
  },
  loginButton: {
    marginTop: 16,
  },
  signUpLink: {
    marginTop: 20,
  },
});

export default LoginScreen;
