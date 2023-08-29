import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Dropdown = ({selectedValue, onValueChange, label, options}) => {
  const [showTextInput, setShowTextInput] = useState(false);

  const handleValueChange = value => {
    onValueChange(value);
    setShowTextInput(value === 'Other');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.pickerContainer}>
        <Picker selectedValue={selectedValue} onValueChange={handleValueChange}>
          <Picker.Item label={`Select ${label}`} value="" />
          {options.map(option => (
            <Picker.Item key={option} label={option} value={option} />
          ))}
        </Picker>
      </View>

      {showTextInput && (
        <TextInput
          style={[styles.textInput, {borderColor: theme.borderColor}]}
          placeholder={`Enter ${label}`}
        />
      )}
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
  textInput: {
    marginTop: 8,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
});

export default Dropdown;
