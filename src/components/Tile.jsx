import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppearance} from '../contexts/AppearenceContext';

const Tile = ({children}) => {
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#333' : '#F1F6F9'},
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
  },
});

export default Tile;
