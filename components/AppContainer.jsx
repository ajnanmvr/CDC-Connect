import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SignUp from '../screens/SignUp'; // Import your sign-up  component
import Login from '../screens/Login'; // Import your login  component
import OTPInput from '../screens/OTPInput'; // Import your OTP input  component

const AppContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My App</Text>
      {/* Use your  components here */}
      <SignUp />
      <Login />
      <OTPInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // You can set the background color based on the theme
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default AppContainer;
