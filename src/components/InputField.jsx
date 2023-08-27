// InputField.js
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {useTheme} from '../hooks/ThemeProvider'; // Import the theme hook

const InputField = ({placeholder, value, onChangeText, secureTextEntry}) => {
  const theme = useTheme(); // Get the current theme

  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={[styles.input, {borderColor: theme.borderColor}]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
  },
});

export default InputField;
