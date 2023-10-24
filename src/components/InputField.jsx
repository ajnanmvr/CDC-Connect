import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {useAppearance} from '../contexts/AppearenceContext';
import {darkTheme, lightTheme} from '../styles/themes';
const InputField = ({
  placeholder,
  value,
  onChangeText,
  maxLength,
  secureTextEntry,
  keyboardType,
  multiline,
  style,
}) => {
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      maxLength={maxLength}
      keyboardType={keyboardType}
      multiline={multiline}
      style={[
        styles.input,
        style,
        {borderColor: isDarkMode ? darkTheme.textColor : lightTheme.textColor},
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
