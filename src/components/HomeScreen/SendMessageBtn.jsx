import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const SendMessageButton = ({ onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Send Message" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 20,
  },
});

export default SendMessageButton;
