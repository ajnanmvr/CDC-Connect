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
        {backgroundColor: isDarkMode ? '#333' : '#F8FAFA'},
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
    marginBottom:15
  },
});

export default Tile;
