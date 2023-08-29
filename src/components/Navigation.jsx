import React from 'react';
import Home from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login'; // Import your login  component
import SendMessage from '../screens/SendMessage'; // Import your OTP input  component
import OTPInput from '../screens/OTPInput'; // Import your OTP input  component
import SignUp from '../screens/SignUp'; // Import your sign-up  component
import Form from '../screens/Form'; // Import your sign-up  component
import {useAppearance} from '../contexts/AppearenceContext';
import {darkTheme, lightTheme} from '../styles/themes';
import {useUser} from '../contexts/UserContext';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';
  const {user} = useUser();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShadowVisible: false,
          headerTintColor: isDarkMode
            ? darkTheme.primaryColor
            : lightTheme.primaryColor,
          headerStyle: {
            backgroundColor: isDarkMode
              ? darkTheme.primaryColor
              : lightTheme.primaryColor,
          },
          contentStyle: {
            backgroundColor: isDarkMode
              ? darkTheme.backgroundColor
              : lightTheme.backgroundColor,
            padding: 20,
          },
        }}>
          
        {user ? (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        )}
        <Stack.Screen
          name="SignUp"
          component={SignUp}
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