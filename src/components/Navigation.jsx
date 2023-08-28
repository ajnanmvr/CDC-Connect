import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home'; // Import your OTP input  component
import Login from '../screens/Login'; // Import your login  component
import SendMessage from '../screens/SendMessage'; // Import your OTP input  component
import OTPInput from '../screens/OTPInput'; // Import your OTP input  component
import SignUp from '../screens/SignUp'; // Import your sign-up  component
import Form from '../screens/Form'; // Import your sign-up  component
import {useTheme} from '../hooks/ThemeProvider'; // Import the theme hook

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShadowVisible: false,
          headerTintColor: theme.primaryColor,
          headerStyle: {backgroundColor: theme.backgroundColor},
          contentStyle: {backgroundColor: theme.backgroundColor, padding: 20},
        }}>
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
        <Stack.Screen name="SendMessage" component={SendMessage} />
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
