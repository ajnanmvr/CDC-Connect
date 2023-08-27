import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useTheme} from '../hooks/ThemeProvider'; // Import the theme hook

const Button = ({title, onPress}) => {
  const theme = useTheme(); // Get the current theme

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: theme.buttonColor}]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Button;
