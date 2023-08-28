import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useTheme} from '../hooks/ThemeProvider'; // Import the theme hook


const Dropdown = ({ selectedValue, onValueChange, label, options }) => {
  const theme = useTheme();
 
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    
      <View style={[styles.pickerContainer,{borderColor: theme.borderColor,}]} >
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}>
          <Picker.Item label={`Select ${label}`} value="" />
          {options.map(option => (
            <Picker.Item key={option} label={option} value={option} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  pickerContainer: {
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
  },
});

export default Dropdown;
