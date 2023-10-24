import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useAppearance} from '../contexts/AppearenceContext';
import {darkTheme, lightTheme} from '../styles/themes';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({title, onPress}) => {
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';

  return (
    <TouchableOpacity onPress={onPress} 
    >
      <LinearGradient
        colors={['#05BCA3', '#067869']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[styles.button]}
        >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
