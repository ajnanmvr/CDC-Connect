import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeUser = ({ username }) => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeText}>Hello, {username}</Text>
      <Text style={styles.subtitle}>Welcome to our Data Entry App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcomeText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
  },
});

export default WelcomeUser;
