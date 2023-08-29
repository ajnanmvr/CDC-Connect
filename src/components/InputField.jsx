import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

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
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      maxLength={maxLength}
      keyboardType={keyboardType}
      multiline={multiline}
      style={[styles.input, style]}
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
