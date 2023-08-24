import React, {useState} from 'react';
import {View, Text, Button, ScrollView, TextInput} from 'react-native';
import { Picker } from '@react-native-picker/picker';

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
    <ScrollView>
      <View>
        <Text>Name</Text>
        <TextInput
          value={formData.name}
          onChangeText={value => handleInputChange('name', value)}
        />
      </View>

      <View>
        <Text>Mahallu</Text>
        <TextInput
          value={formData.mahallu}
          onChangeText={value => handleInputChange('mahallu', value)}
        />
      </View>

      <View>
        <Text>District</Text>
        <TextInput
          value={formData.district}
          onChangeText={value => handleInputChange('district', value)}
        />
      </View>

      <View>
        <Text>Academic Stage</Text>
        <Picker
          selectedValue={formData.academicStage}
          onValueChange={value => handleInputChange('academicStage', value)}>
          <Picker.Item label="Select Academic Stage" value="" />
          {AcademicStages.map(stage => (
            <Picker.Item key={stage} label={stage} value={stage} />
          ))}
        </Picker>
      </View>

      <View>
        <Text>Head of the Family</Text>
        <TextInput
          value={formData.headOfTheFamily}
          onChangeText={value => handleInputChange('headOfTheFamily', value)}
        />
      </View>

      <View>
        <Text>House Number</Text>
        <TextInput
          value={formData.houseNumber}
          onChangeText={value => handleInputChange('houseNumber', value)}
        />
      </View>

      <View>
        <Text>Contact Number</Text>
        <TextInput
          value={formData.contactNumber}
          onChangeText={value => handleInputChange('contactNumber', value)}
        />
      </View>

      <View>
        <Text>Area Code</Text>
        <TextInput
          value={formData.areaCode}
          onChangeText={value => handleInputChange('areaCode', value)}
        />
      </View>

      <View>
        <Text>Number of Family Members</Text>
        <TextInput
          value={formData.numberOfFamilyMembers.toString()}
          onChangeText={value =>
            handleInputChange('numberOfFamilyMembers', parseInt(value, 10))
          }
          keyboardType="numeric"
        />
      </View>

      <View>
        <Text>Gender</Text>
        <Picker
          selectedValue={formData.gender}
          onValueChange={value => handleInputChange('gender', value)}>
          <Picker.Item label="Select Gender" value="" />
          {GenderOptions.map(gender => (
            <Picker.Item key={gender} label={gender} value={gender} />
          ))}
        </Picker>
      </View>

      <View>
        <Text>Date of Birth</Text>
        <TextInput
          value={formData.dob}
          onChangeText={value => handleInputChange('dob', value)}
          keyboardType="numeric"
        />
      </View>

      <View>
        <Text>Relation with Head</Text>
        <TextInput
          value={formData.relationWithHead}
          onChangeText={value => handleInputChange('relationWithHead', value)}
        />
      </View>

      <View>
        <Text>Mobile Number</Text>
        <TextInput
          value={formData.mobileNumber}
          onChangeText={value => handleInputChange('mobileNumber', value)}
        />
      </View>

      <View>
        <Text>Marital Status</Text>
        <TextInput
          value={formData.maritalStatus}
          onChangeText={value => handleInputChange('maritalStatus', value)}
        />
      </View>

      <View>
        <Text>Educational Qualification</Text>
        <TextInput
          value={formData.educationalQualification}
          onChangeText={value =>
            handleInputChange('educationalQualification', value)
          }
        />
      </View>

      <View>
        <Text>Institution of Study</Text>
        <TextInput
          value={formData.institutionOfStudy}
          onChangeText={value => handleInputChange('institutionOfStudy', value)}
        />
      </View>

      <View>
        <Text>Religious Education</Text>
        <TextInput
          value={formData.religiousEducation}
          onChangeText={value => handleInputChange('religiousEducation', value)}
        />
      </View>

      {/* Dropdown for Blood Group */}
      <View>
        <Text>Blood Group</Text>
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

      {/* Dropdown for Job Type */}
      <View>
        <Text>Job Type</Text>
        <Picker
          selectedValue={formData.jobType}
          onValueChange={value => handleInputChange('jobType', value)}>
          <Picker.Item label="Select Job Type" value="" />
          <Picker.Item label="Government Service" value="govtService" />
          <Picker.Item label="Private Sector" value="privateSector" />
          <Picker.Item label="Daily Wage" value="dailyWage" />
        </Picker>
      </View>

      <View>
        <Text>Suggestions</Text>
        <TextInput
          value={formData.suggestions}
          onChangeText={value => handleInputChange('suggestions', value)}
        />
      </View>

      <View>
        <Text>Remarks</Text>
        <TextInput
          value={formData.remarks}
          onChangeText={value => handleInputChange('remarks', value)}
        />
      </View>

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

export default Form;
