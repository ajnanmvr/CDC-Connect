import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/ThemeProvider'; // Import the theme hook

const InputField = ({
  placeholder,
  value,
  onChangeText,
  maxLength,
  secureTextEntry,
  keyboardType,
  style,
}) => {
  const theme = useTheme(); // Get the current theme

  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      maxLength={maxLength}
      keyboardType={keyboardType}
      style={[
        styles.input,
        { borderColor: theme.borderColor },
        style,
      ]}
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
