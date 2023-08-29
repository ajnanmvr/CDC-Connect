import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import InputField from '../components/InputField';
import Title from '../components/Title';

import Button from '../components/Button';
import Dropdown from '../components/Dropdown';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    gender: '',
    age: '',
    mobileNumber: '',
    maritalStatus: '',
    institutionOfStudy: '',
    religiousEducation: '',
    materialEducation: '',
    jobDetails: '',
    health: '',
    bloodGroup: '',
    jobType: '',
  });

  const handleInputChange = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Submitted:', formData);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title>Personal Information</Title>

      <View style={styles.input}>
        <Text style={styles.label}>Name</Text>
        <InputField
          value={formData.name}
          onChangeText={value => handleInputChange('name', value)}
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.label}>Contact Number</Text>
        <InputField
          value={formData.contactNumber}
          onChangeText={value => handleInputChange('contactNumber', value)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.input}>
        <Text style={styles.label}>Age</Text>
        <InputField
          value={formData.age}
          onChangeText={value => handleInputChange('age', value)}
          keyboardType="numeric"
        />
      </View>

      <Dropdown
        selectedValue={formData.maritalStatus}
        onValueChange={value => handleInputChange('maritalStatus', value)}
        label="Marital Status"
        options={['Married', 'Unmarried', 'Widow/er']}
      />
      <Dropdown
        selectedValue={formData.materialEducation}
        onValueChange={value => handleInputChange('materialEducation', value)}
        label="Material Education"
        options={['Primary', 'Secondary', 'Predegree', 'Degree', 'PG', 'Phd']}
      />

      <Dropdown
        selectedValue={formData.institutionOfStudy}
        onValueChange={value => handleInputChange('institutionOfStudy', value)}
        label="Institution Of Study"
        options={[
          'Government',
          'Aided',
          'Self Finance',
          'Institute of National Importance',
          'Centeral University',
          'Other',
        ]}
      />
      <Dropdown
        selectedValue={formData.religiousEducation}
        onValueChange={value => handleInputChange('religiousEducation', value)}
        label="Religious Education"
        options={['Dars', 'Arabic Collage', 'Madrasa']}
      />
      <Dropdown
        selectedValue={formData.gender}
        onValueChange={value => handleInputChange('gender', value)}
        label="Gender"
        options={['Male', 'Female']}
      />
      <Dropdown
        selectedValue={formData.bloodGroup}
        onValueChange={value => handleInputChange('bloodGroup', value)}
        label="Blood Group"
        options={['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-']}
      />

      <Dropdown
        selectedValue={formData.jobType}
        onValueChange={value => handleInputChange('jobType', value)}
        label="Job Type"
        options={['Government Service', 'Private Sector', 'Daily Wage']}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    marginVertical: 10,
  },
});
export default Form;
