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
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
