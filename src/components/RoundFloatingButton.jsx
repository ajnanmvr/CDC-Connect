import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useAppearance} from '../contexts/AppearenceContext';

const RoundFloatingButton = ({onPress, icon}) => {
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.icon}>{icon}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    backgroundColor: 'white',
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    borderWidth: 5,
    borderColor: '#067869',
  },
  icon: {
    fontSize: 45,
    marginTop: -12,
    color: '#067869',
  },
});

export default RoundFloatingButton;
