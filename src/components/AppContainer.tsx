import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from '../screens/Home'; // Import your OTP input  component
import SignUp from '../screens/SignUp'; // Import your sign-up  component
import Login from '../screens/Login'; // Import your login  component
import OTPInput from '../screens/OTPInput'; // Import your OTP input  component
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
  Login: {name: string};
  OTPInput: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTPInput" component={OTPInput} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default AppContainer;
