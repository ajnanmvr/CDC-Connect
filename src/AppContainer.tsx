import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './screens/Home'; // Import your OTP input  component
import Login from './screens/Login'; // Import your login  component
import NewMessage from './screens/NewMessage'; // Import your OTP input  component
import OTPInput from './screens/OTPInput'; // Import your OTP input  component
import SignUp from './screens/SignUp'; // Import your sign-up  component

export type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
  Login: undefined;
  OTPInput: undefined;
  NewMessage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OTPInput"
          component={OTPInput}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="NewMessage" component={NewMessage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
