import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {useAppearance} from '../contexts/AppearenceContext';
import {useUser} from '../contexts/UserContext';
import Entries from '../screens/Entries';
import FilteredData from '../screens/FilteredData';
import Form from '../screens/Form'; // Import your sign-up  component
import Home from '../screens/Home';
import Login from '../screens/Login'; // Import your login  component
import OTPInput from '../screens/OTPInput'; // Import your OTP input  component
import OverView from '../screens/OverView';
import SelectedEntry from '../screens/SelectedEntry';
import SendMessage from '../screens/SendMessage'; // Import your OTP input  component
import SignUp from '../screens/SignUp'; // Import your sign-up  component
import UserProfile from '../screens/UserProfile';
import {darkTheme, lightTheme} from '../styles/themes';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';
  const statusBarStyle = isDarkMode ? 'light-content' : 'dark-content';
  const {user} = useUser();
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={isDarkMode ? 'black' : 'white'}
        barStyle={statusBarStyle}
        animated={true}
      />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShadowVisible: false,
          headerTintColor: isDarkMode
            ? darkTheme.textColor
            : lightTheme.textColor,
          headerStyle: {
            backgroundColor: isDarkMode
              ? darkTheme.backgroundColor
              : lightTheme.backgroundColor,
          },
          contentStyle: {
            backgroundColor: isDarkMode
              ? darkTheme.backgroundColor
              : lightTheme.backgroundColor,
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
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="SendMessage" component={SendMessage} options={{
          title: 'Custom Title',
          headerTitle: '',
        }}/>
        <Stack.Screen name="Overview" component={OverView} options={{
          title: 'Custom Title',
          headerTitle: '',
        }}/>
        <Stack.Screen name="Form" component={Form} options={{
          title: 'Custom Title',
          headerTitle: '',
        }}/>
        <Stack.Screen name="ُEntries" component={Entries} options={{
          title: 'Custom Title',
          headerTitle: '',
        }}/>
        <Stack.Screen name="FilteredData" component={FilteredData} options={{
          title: 'Custom Title',
          headerTitle: '',
        }}/>
        <Stack.Screen name="ُSelectedEntry" component={SelectedEntry} options={{
          title: 'Custom Title',
          headerTitle: '',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
