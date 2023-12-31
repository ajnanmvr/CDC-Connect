import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import InputField from '../components/InputField';
import Title from '../components/Title';
import {useAppearance} from '../contexts/AppearenceContext';
import {useUser} from '../contexts/UserContext';
import {darkTheme, lightTheme} from '../styles/themes';
import Axios from '../utils/Axios';

const Form = ({route}) => {
  const formNumber = route?.params?.formNumber;
  const appearance = useAppearance();
  const navigation = useNavigation();
  const isDarkMode = appearance === 'dark';
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const {user} = useUser();
  const initialValue = {
    name: null,
    gender: null,
    age: null,
    mobileNumber: null,
    maritalStatus: null,
    institutionOfStudy: null,
    religiousEducation: null,
    materialEducation: null,
    jobDetails: null,
    health: null,
    bloodGroup: null,
    jobType: null,
    dob: null,
    houseNumber: null,
    mahallu: null,
    district: null,
    educationalSubject: null,
    govtType: null,
    profession: null,
    abroad: null,
    pension: null,
    health: null,
    degreeTopic: null,
  };

  const [formData, setFormData] = useState(initialValue);

  const handleInputChange = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    const requiredFields = ['name', 'gender', 'age', 'mobileNumber', 'dob'];

    const newErrors = {};
    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = 'required';
      }
    });
    console.log(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);
      let response = await Axios.post('/entry', {
        ...formData,
        mahallu: user.mahallu,
        district: user.district,
        formNumber: formNumber ? formNumber : null,
      });
      setFormData(initialValue);
      setLoading(false);
      Alert.alert('Success', 'Form submitted successfully', [
        {
          text: 'OK',
          onPress: () => {
            // Navigate to the home screen and trigger a reload
            navigation.navigate('Home', {reload: true});
          },
        },
      ]);
    } catch (error) {
      console.log(error);
      setLoading(false);
      console.log(error.response.data.errors);
      Alert.alert('Error', 'Something went wrong while submitting the form');
    }
  };
  return (
    <ScrollView contentContainerStyle={styles(isDarkMode).container}>
      <View style={styles.container}>
        <Title>Survey Form</Title>
        {formNumber && (
          <Text style={styles(isDarkMode).formNumberContainer}>
            Form Number{' : '}
            <Text style={styles(isDarkMode).formNumber}>{formNumber}</Text>
          </Text>
        )}

        <View style={styles(isDarkMode).input}>
          <Text style={styles(isDarkMode).label}>
            Name <Text style={styles(isDarkMode).star}>*</Text>
            {errors.name && (
              <Text style={styles(isDarkMode).error}>
                {' '}
                {'  '} ({errors.name})
              </Text>
            )}
          </Text>
          <InputField
            value={formData.name}
            onChangeText={value => handleInputChange('name', value)}
            style={styles(isDarkMode).inputField}
            placeholder="Full Name"
          />
        </View>
        <View style={styles(isDarkMode).input}>
          <Text style={styles(isDarkMode).label}>
            Contact Number <Text style={styles(isDarkMode).star}>*</Text>
            {errors.mobileNumber && (
              <Text style={styles(isDarkMode).error}>
                {' '}
                {'  '} ({errors.mobileNumber})
              </Text>
            )}
          </Text>
          <InputField
            value={formData.mobileNumber}
            onChangeText={value => handleInputChange('mobileNumber', value)}
            keyboardType="numeric"
            style={styles(isDarkMode).inputField}
            placeholder="Mobile Number"
          />
        </View>

        <View style={styles(isDarkMode).input}>
          <Text style={styles(isDarkMode).label}>
            Age <Text style={styles(isDarkMode).star}>*</Text>
            {errors.age && (
              <Text style={styles(isDarkMode).error}>
                {' '}
                {'  '} ({errors.age})
              </Text>
            )}
          </Text>
          <InputField
            value={formData.age}
            onChangeText={value => handleInputChange('age', value)}
            keyboardType="numeric"
            style={styles(isDarkMode).inputField}
            placeholder={'Age'}
          />
        </View>
        <View style={styles(isDarkMode).input}>
          <Text style={styles(isDarkMode).label}>
            Date Of Birth <Text style={styles(isDarkMode).star}>*</Text>
            {errors.dob && (
              <Text style={styles(isDarkMode).error}>
                {' '}
                {'  '} ({errors.dob})
              </Text>
            )}
          </Text>
          <InputField
            value={formData.dob}
            onChangeText={value => handleInputChange('dob', value)}
            style={styles(isDarkMode).inputField}
            placeholder={'DD-MM-YYYY'}
          />
        </View>
        {/* <View style={styles(isDarkMode).input}>
        <Text style={styles(isDarkMode).label}>
          House Number <Text style={styles(isDarkMode).star}>*</Text>
          {errors.houseNumber && (
            <Text style={styles(isDarkMode).error}>
              {' '}
              {'  '} ({errors.houseNumber})
            </Text>
          )}
        </Text>
        <InputField
          value={formData.houseNumber}
          onChangeText={value => handleInputChange('houseNumber', value)}
          style={styles(isDarkMode).inputField}
        />
      </View> */}

        <Dropdown
          selectedValue={formData.maritalStatus}
          onValueChange={value => handleInputChange('maritalStatus', value)}
          label="Marital Status"
          options={['Married', 'Unmarried', 'Widow/er']}
        />
        <Dropdown
          selectedValue={formData.gender}
          onValueChange={value => handleInputChange('gender', value)}
          label="Gender"
          options={['male', 'female']}
          error={
            <>
              <Text style={styles(isDarkMode).star}>*</Text>
              {errors.gender && (
                <Text style={styles(isDarkMode).error}>
                  {' '}
                  {'  '} ({errors.gender})
                </Text>
              )}
            </>
          }
        />
        <Dropdown
          selectedValue={formData.materialEducation}
          onValueChange={value => handleInputChange('materialEducation', value)}
          label="Material Education"
          options={[
            'Primary',
            'Secondary',
            '10th',
            'Plus Two',
            'Predegree',
            'Degree',
            'PG',
            'Phd',
          ]}
        />
        {formData?.materialEducation === 'Plus Two' ? (
          <Dropdown
            selectedValue={formData.educationalSubject}
            onValueChange={value =>
              handleInputChange('educationalSubject', value)
            }
            label="Subject"
            options={['Science', 'Humanities', 'Commerce']}
          />
        ) : null}
        {formData?.materialEducation === 'Degree' ? (
          <Dropdown
            selectedValue={formData.degreeTopic}
            onValueChange={value =>
              handleInputChange('degreeTopic', value)
            }
            label="Degree Topic"
            options={['Engineering',
            'MBBS',
            'Scientist',
            'B. Sc',
            'B. com',
            'BBA',
            'BA']}
          />
        ) : null}

        <Dropdown
          selectedValue={formData.institutionOfStudy}
          onValueChange={value =>
            handleInputChange('institutionOfStudy', value)
          }
          label="Institution Of Study"
          options={[
            'Govt.',
            'Aided',
            'Self Finance',
            'Institute of National Importance',
            'Centeral University',
            'Abroad',
            'Other',
          ]}
        />
        <Dropdown
          selectedValue={formData.religiousEducation}
          onValueChange={value =>
            handleInputChange('religiousEducation', value)
          }
          label="Religious Education"
          options={['Dars', 'Arabic Collage', 'Madrasa']}
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
          options={['Govt. Service', 'Private Sector', 'Daily Wage', 'Gulf']}
        />
        {formData.jobType === 'Govt. Service' && (
          <Dropdown
            selectedValue={formData.govtType}
            onValueChange={value => handleInputChange('govtType', value)}
            label="Govt Service Type"
            options={['Gazatted', 'Grade A', 'Grade A']}
          />
        )}
        <Dropdown
          selectedValue={formData.profession}
          onValueChange={value => handleInputChange('profession', value)}
          label="Profession"
          options={[
            'Doctor',
            'Nurse',
            'Scientist',
            'Teacher',
            'Self Employee',
            'Police',
            'Indian Force',
            'Driver',
            'Gulf',
            'Agriculture',
            'Kooli',
            'Central Govt',
          ]}
        />
        <Dropdown
          selectedValue={formData.pension}
          onValueChange={value => handleInputChange('pension', value)}
          label="Pension"
          options={[
            'Agricultural Labour Pension',
            'Indira Gandhi National Old Age Pension',
            'Indira Gandhi National Disability Pension Scheme',
            'Pension for the Unmarried Women above 50 years',
          ]}
        />
       
        <Dropdown
          selectedValue={formData.scholarships}
          onValueChange={value => handleInputChange('scholarships', value)}
          label="Scholarships"
          options={[
            'E-GRANTS',
            'HIGHER EDUCATION SCHOLARSHIP',
            'CENTRAL SECTOR SCHOLARSHIP',
            'SUVARNA JUBILEE MERIT SCHOLARSHIP',
            'C.H. MUHAMMED KOYA MUSLIM GIRLS SCHOLARSHIP',
            'POST METRIC SCHOLARSHIP',
            'SNEHAPOORVAM SCHOLARSHIP',
            'LSS Scholarship',
            'USS Scholarship',
            'Other',
          ]}
        />
        <Dropdown
          selectedValue={formData.abroad}
          onValueChange={value => handleInputChange('abroad', value)}
          label="Abroad"
          options={[
            'Saudi',
            'Europe',
            'NRK',
            'American Continent',
            'UAE',
            'African Continent',
          ]}
        />
        <Dropdown
          selectedValue={formData.health}
          onValueChange={value => handleInputChange('health', value)}
          label="Health"
          options={[
            'Diabetes',
            'Hypertension',
            'Kidney Disease',
            'Cancer',
            'Healthy',
          ]}
        />
        {loading ? (
          <Button title="loading..." onPress={() => {}} />
        ) : (
          <Button title="Submit" onPress={handleSubmit} />
        )}
      </View>
    </ScrollView>
  );
};
const styles = isDarkMode =>
  StyleSheet.create({
    container: {padding: 20},
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
      color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
    },
    input: {
      marginVertical: 10,
    },
    inputField: {
      borderWidth: 1,
      borderColor: isDarkMode ? darkTheme.borderColor : lightTheme.borderColor,
      padding: 10,
      borderRadius: 10,
      color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
    },
    star: {
      color: 'red',
    },
    error: {
      color: 'red',
      textTransform: 'capitalize',
      marginLeft: 4,
      fontSize: 13,
    },
    formNumberContainer: {
      textAlign: 'center',
      padding: 7,
      marginTop: -15,
    },
    formNumber: {
      color: isDarkMode ? darkTheme.primaryColor : lightTheme.primaryColor,
      fontWeight: '500',
    },
  });
export default Form;
