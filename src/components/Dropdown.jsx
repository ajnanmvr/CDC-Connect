import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useAppearance} from '../contexts/AppearenceContext';
import {darkTheme, lightTheme} from '../styles/themes';

const Dropdown = ({selectedValue, onValueChange, label, options, error}) => {
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';

  const [showTextInput, setShowTextInput] = useState(false);

  const handleValueChange = value => {
    onValueChange(value);
    setShowTextInput(value === 'Other');
  };

  return (
    <View style={styles(isDarkMode).container}>
      <Text style={styles(isDarkMode).label}>{label} {error} </Text>

      <View style={[styles(isDarkMode).pickerContainer,{borderColor: isDarkMode
              ? darkTheme.textColor
              : lightTheme.textColor
            }]}>
        <Picker selectedValue={selectedValue} onValueChange={handleValueChange}>
          <Picker.Item
            style={{
              color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,}}
            label={`Select ${label}`}
            value=""
          />
          {options.map(option => (
            <Picker.Item key={option} label={option} value={option} />
          ))}
        </Picker>
      </View>

      {showTextInput && (
        <TextInput
          style={[styles(isDarkMode).textInput]}
          placeholder={`Enter ${label}`}
        />
      )}
    </View>
  );
};

const styles = isDarkMode =>
  StyleSheet.create({
    container: {
      marginVertical: 10,
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
      color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
    },
    pickerContainer: {
      borderRadius: 10,
      borderWidth: 1,
      overflow: 'hidden',
      borderColor: isDarkMode ? darkTheme.borderColor : lightTheme.borderColor,
      color: isDarkMode ? darkTheme.borderColor : lightTheme.borderColor,
      borderWidth: 1,
    },
    textInput: {
      marginTop: 8,
      borderRadius: 10,
      borderWidth: 1,
      paddingHorizontal: 12,
      paddingVertical: 8,
      fontSize: 16,
      borderColor: isDarkMode ? darkTheme.borderColor : lightTheme.borderColor,
      color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
    },
  });

export default Dropdown;
