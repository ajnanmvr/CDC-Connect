import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useAppearance } from '../contexts/AppearenceContext';
import { darkTheme, lightTheme } from '../styles/themes';

const RoundFloatingButton = ({ onPress,icon }) => {
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: isDarkMode ? darkTheme.primaryColor : lightTheme.primaryColor,
        },
      ]}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={styles.imageStyle}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
});

export default RoundFloatingButton;
