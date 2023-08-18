import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SignUpScreen from './components/screens/SignUp';
import OTPInput from './components/screens/OTPInput';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SignUpScreen />
      <OTPInput/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
