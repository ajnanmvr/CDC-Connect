import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import InputField from '../components/InputField';

import {Picker} from '@react-native-picker/picker';

const AcademicStages = [
  'LKG',
  'UKG',
  'Class 1',
  'Class 2',
  'Class 3',
  'Class 4',
  'Class 5',
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10',
  'Class 11',
  'Class 12',
  'Undergraduate',
  "Master's",
  'Doctorate',
];

const GenderOptions = ['male', 'female'];

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    mahallu: '',
    district: '',
    academicStage: '',
    headOfTheFamily: '',
    houseNumber: '',
    contactNumber: '',
    areaCode: '',
    numberOfFamilyMembers: 0,
    gender: 'male',
    dob: new Date().toISOString().split('T')[0],
    relationWithHead: '',
    mobileNumber: '',
    materialEducation: '',
    maritalStatus: '',
    educationalQualification: '',
    institutionOfStudy: '',
    religiousEducation: '',
    jobDetails: '',
    health: '',
    bloodGroup: '',
    jobType: {
      govtService: false,
      privateSector: false,
      dailyWage: false,
    },
    suggestions: '',
    remarks: '',
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
      <Text style={styles.heading}>Personal Information</Text>

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
        />
      </View>

      <View style={styles.input}>
        <Text style={styles.label}>Date of Birth</Text>
        <InputField
          value={formData.dob}
          onChangeText={value => handleInputChange('dob', value)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.label}>Mobile Number</Text>
        <InputField
          value={formData.mobileNumber}
          onChangeText={value => handleInputChange('mobileNumber', value)}
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.label}>Marital Status</Text>
        <InputField
          value={formData.maritalStatus}
          onChangeText={value => handleInputChange('maritalStatus', value)}
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.label}>Educational Qualification</Text>
        <InputField
          value={formData.educationalQualification}
          onChangeText={value =>
            handleInputChange('educationalQualification', value)
          }
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.label}>Institution of Study</Text>
        <InputField
          value={formData.institutionOfStudy}
          onChangeText={value => handleInputChange('institutionOfStudy', value)}
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.label}>Religious Education</Text>
        <InputField
          value={formData.religiousEducation}
          onChangeText={value => handleInputChange('religiousEducation', value)}
        />
      </View>
      {/* Dropdown for Blood Group */}
      <View style={styles.input}>
        <Text style={styles.label}>Gender</Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#bdc3c7',
            overflow: 'hidden',
          }}>
          <Picker
            selectedValue={formData.gender}
            onValueChange={value => handleInputChange('gender', value)}>
            <Picker.Item label="Select Gender" value="" />
            {GenderOptions.map(gender => (
              <Picker.Item key={gender} label={gender} value={gender} />
            ))}
          </Picker>
        </View>
      </View>
      <View style={styles.input}>
        <Text style={styles.label}>Blood Group</Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#bdc3c7',
            overflow: 'hidden',
          }}>
          <Picker
            selectedValue={formData.bloodGroup}
            onValueChange={value => handleInputChange('bloodGroup', value)}>
            <Picker.Item label="Select Blood Group" value="" />
            <Picker.Item label="A" value="A" />
            <Picker.Item label="B" value="B" />
            <Picker.Item label="AB" value="AB" />
            <Picker.Item label="O" value="O" />
          </Picker>
        </View>
      </View>
      <View style={styles.input}>
        <Text style={styles.label}>Academic Stage</Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#bdc3c7',
            overflow: 'hidden',
          }}>
          <Picker
            selectedValue={formData.academicStage}
            onValueChange={value => handleInputChange('academicStage', value)}>
            <Picker.Item label="Select Academic Stage" value="" />
            {AcademicStages.map(stage => (
              <Picker.Item key={stage} label={stage} value={stage} />
            ))}
          </Picker>
        </View>
      </View>
      {/* Dropdown for Job Type */}
      <View style={styles.input}>
        <Text style={styles.label}>Job Type</Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#bdc3c7',
            overflow: 'hidden',
          }}>
          <Picker
            selectedValue={formData.jobType}
            onValueChange={value => handleInputChange('jobType', value)}>
            <Picker.Item label="Select Job Type" value="" />
            <Picker.Item label="Government Service" value="govtService" />
            <Picker.Item label="Private Sector" value="privateSector" />
            <Picker.Item label="Daily Wage" value="dailyWage" />
          </Picker>
        </View>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
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

  submitButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default Form;
