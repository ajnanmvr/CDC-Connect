import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppearance} from '../../contexts/AppearenceContext';
import {darkTheme, lightTheme} from '../../styles/themes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeUser = ({username}) => {
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        // Now you can access user data properties like userData.name, userData.email, etc.
        console.log('User Data:', userData);
        setUserData(userData);
      } else {
        console.log('User data not found in AsyncStorage.');
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <View
      style={[
        styles.welcomeContainer,
        {
          backgroundColor: isDarkMode
            ? darkTheme.primaryColor
            : lightTheme.primaryColor,
        },
      ]}>
      <Text
        style={[
          styles.welcomeText,
          {
            color: isDarkMode ? darkTheme.textColor : lightTheme.grayText,
          },
        ]}>
        Hello,
      </Text>
      <Text
        style={[
          styles.welcomeText,
          {
            color: isDarkMode ? darkTheme.textColor : lightTheme.grayText,
          },
        ]}>
        {userData?.name}
      </Text>
      <Text style={styles.subtitle}>Welcome to our Data Entry App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
  },
});

export default WelcomeUser;