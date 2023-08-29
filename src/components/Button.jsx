import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useAppearance} from '../contexts/AppearenceContext';
import {darkTheme, lightTheme} from '../styles/themes';

const Button = ({title, onPress}) => {
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: isDarkMode
            ? darkTheme.primaryColor
            : lightTheme.primaryColor,
        },
      ]}
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
    marginTop: 20,
    width:"100%"
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
