import React, { useState } from 'react';
import { TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const InputField = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <React.Fragment>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!showPassword}
        style={styles.input}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={toggleShowPassword} style={styles.showPasswordButton}>
          <Text>{showPassword ? 'Hide Password' : 'Show Password'}</Text>
        </TouchableOpacity>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  showPasswordButton: {
    marginTop: 5,
  },
});

export default InputField;
