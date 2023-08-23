import React, {useState} from 'react';
import {View, Text, Button, ScrollView, Picker, TextInput} from 'react-native';

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

const FamilyMemberForm = () => {
  const [familyMember, setFamilyMember] = useState({
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
    setFamilyMember(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Submitted:', familyMember);
  };
  return (
    <ScrollView>
      <View>
        <Text>Name</Text>
        <TextInput
          value={familyMember.name}
          onChangeText={value => handleInputChange('name', value)}
        />
      </View>

      <View>
        <Text>Mahallu</Text>
        <TextInput
          value={familyMember.mahallu}
          onChangeText={value => handleInputChange('mahallu', value)}
        />
      </View>

      <View>
        <Text>District</Text>
        <TextInput
          value={familyMember.district}
          onChangeText={value => handleInputChange('district', value)}
        />
      </View>

      <View>
        <Text>Academic Stage</Text>
        <Picker
          selectedValue={familyMember.academicStage}
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
          value={familyMember.headOfTheFamily}
          onChangeText={value => handleInputChange('headOfTheFamily', value)}
        />
      </View>

      <View>
        <Text>House Number</Text>
        <TextInput
          value={familyMember.houseNumber}
          onChangeText={value => handleInputChange('houseNumber', value)}
        />
      </View>

      <View>
        <Text>Contact Number</Text>
        <TextInput
          value={familyMember.contactNumber}
          onChangeText={value => handleInputChange('contactNumber', value)}
        />
      </View>

      <View>
        <Text>Area Code</Text>
        <TextInput
          value={familyMember.areaCode}
          onChangeText={value => handleInputChange('areaCode', value)}
        />
      </View>

      <View>
        <Text>Number of Family Members</Text>
        <TextInput
          value={familyMember.numberOfFamilyMembers.toString()}
          onChangeText={value =>
            handleInputChange('numberOfFamilyMembers', parseInt(value, 10))
          }
          keyboardType="numeric"
        />
      </View>

      <View>
        <Text>Gender</Text>
        <Picker
          selectedValue={familyMember.gender}
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
          value={familyMember.dob}
          onChangeText={value => handleInputChange('dob', value)}
          keyboardType="numeric"
        />
      </View>

      <View>
        <Text>Relation with Head</Text>
        <TextInput
          value={familyMember.relationWithHead}
          onChangeText={value => handleInputChange('relationWithHead', value)}
        />
      </View>

      <View>
        <Text>Mobile Number</Text>
        <TextInput
          value={familyMember.mobileNumber}
          onChangeText={value => handleInputChange('mobileNumber', value)}
        />
      </View>

      <View>
        <Text>Marital Status</Text>
        <TextInput
          value={familyMember.maritalStatus}
          onChangeText={value => handleInputChange('maritalStatus', value)}
        />
      </View>

      <View>
        <Text>Educational Qualification</Text>
        <TextInput
          value={familyMember.educationalQualification}
          onChangeText={value =>
            handleInputChange('educationalQualification', value)
          }
        />
      </View>

      <View>
        <Text>Institution of Study</Text>
        <TextInput
          value={familyMember.institutionOfStudy}
          onChangeText={value => handleInputChange('institutionOfStudy', value)}
        />
      </View>

      <View>
        <Text>Religious Education</Text>
        <TextInput
          value={familyMember.religiousEducation}
          onChangeText={value => handleInputChange('religiousEducation', value)}
        />
      </View>

      {/* Dropdown for Blood Group */}
      <View>
        <Text>Blood Group</Text>
        <Picker
          selectedValue={familyMember.bloodGroup}
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
          selectedValue={familyMember.jobType}
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
          value={familyMember.suggestions}
          onChangeText={value => handleInputChange('suggestions', value)}
        />
      </View>

      <View>
        <Text>Remarks</Text>
        <TextInput
          value={familyMember.remarks}
          onChangeText={value => handleInputChange('remarks', value)}
        />
      </View>

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

export default FamilyMemberForm;
