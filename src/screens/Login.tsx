import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InputField from '../components/InputField';
import Button from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../components/AppContainer';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({route,navigation}: LoginProps) => {
  const {name} = route.params;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleLogin = () => {
    // Implement login logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In : {name}</Text>
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
      <Button title="Log In" onPress={handleLogin} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default LoginScreen;
