import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FamilyDetails from '../components/FamilyDetails';
import Title from '../components/Title';
import {useAppearance} from '../contexts/AppearenceContext';
import {darkTheme, lightTheme} from '../styles/themes';
import Axios from '../utils/Axios';
const SelectedEntry = ({route}) => {
  const {entryId} = route.params;
  const navigation = useNavigation();
  const appearance = useAppearance();
  const [relatedData, setRelatedData] = useState([]);
  const isDarkMode = appearance === 'dark';
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;
  // Add this function inside your component
  const getJobTypeLabel = jobType => {
    if (jobType) {
      if (jobType.dailyWage) {
        return 'Daily Wage';
      } else if (jobType.govtService) {
        return 'Government Service';
      } else if (jobType.privateSector) {
        return 'Private Sector';
      }
    }
    return 'N/A'; // Return 'N/A' if jobType is not defined or none of the options are selected
  };

  const getEntry = async () => {
    setLoading(true);
    try {
      let {data} = await Axios.get(`/entry/${entryId}`);
      setData(data.data);
      setRelatedData(data.relatedData);

      setLoading(false);
    } catch (error) {
      console.log(error.response.data);
      setLoading(false);
    }
  };
  const deleteEntry = async id => {
    // Show a confirmation dialog
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this entry?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              let response = await Axios.delete(`/entry/${id}`);
              Alert.alert('Success', 'Document Deleted Successfully');
              navigation.navigate('Home');
            } catch (error) {
              console.log(error.response);
            }
          },
        },
      ],
      {cancelable: true},
    );
  };

  useEffect(() => {
    getEntry();
  }, [entryId]);

  return (
    <ScrollView>
      <View style={{padding: 20}}>
        {loading ? (
          <ActivityIndicator />
        ) : data ? (
          <>
            <Title>{data.name}</Title>
            <Text style={[styles(isDarkMode).label]}>Form Number</Text>
            <Text
              style={[
                styles(isDarkMode).details,
                {
                  color: theme.textColor,
                  borderColor: isDarkMode ? 'whitesmoke' : '#0a0a0a',
                  backgroundColor: isDarkMode ? '#0a0a0a' : 'whitesmoke',
                },
              ]}>
              {data.formNumber}
            </Text>
            <Text style={[styles(isDarkMode).label]}>Mobile Number</Text>
            <Text
              style={[
                styles(isDarkMode).details,
                {
                  color: theme.textColor,
                  borderColor: isDarkMode ? 'whitesmoke' : '#0a0a0a',
                  backgroundColor: isDarkMode ? '#0a0a0a' : 'whitesmoke',
                },
              ]}>
              {data.mobileNumber}
            </Text>
            <Text style={[styles(isDarkMode).label]}>Gender</Text>
            <Text
              style={[
                styles(isDarkMode).details,
                {
                  color: theme.textColor,
                  borderColor: isDarkMode ? 'whitesmoke' : '#0a0a0a',
                  backgroundColor: isDarkMode ? '#0a0a0a' : 'whitesmoke',
                },
              ]}>
              {data.gender}
            </Text>
            <Text style={[styles(isDarkMode).label]}>Date Of Birth</Text>
            <Text
              style={[
                styles(isDarkMode).details,
                {
                  color: theme.textColor,
                  borderColor: isDarkMode ? 'whitesmoke' : '#0a0a0a',
                  backgroundColor: isDarkMode ? '#0a0a0a' : 'whitesmoke',
                },
              ]}>
              {data.dob}
            </Text>
            <Text style={[styles(isDarkMode).label]}>Education</Text>
            <Text
              style={[
                styles(isDarkMode).details,
                {
                  color: theme.textColor,
                  borderColor: isDarkMode ? 'whitesmoke' : '#0a0a0a',
                  backgroundColor: isDarkMode ? '#0a0a0a' : 'whitesmoke',
                },
              ]}>
              {data.materialEducation}
            </Text>
            <Text style={[styles(isDarkMode).label]}>Subject</Text>
            <Text
              style={[
                styles(isDarkMode).details,
                {
                  color: theme.textColor,
                  borderColor: isDarkMode ? 'whitesmoke' : '#0a0a0a',
                  backgroundColor: isDarkMode ? '#0a0a0a' : 'whitesmoke',
                },
              ]}>
              {data.educationalSubject ? data.educationalSubject : 'N/A'}
            </Text>
            <Text style={[styles(isDarkMode).label]}>Blood Group</Text>
            <Text
              style={[
                styles(isDarkMode).details,
                {
                  color: theme.textColor,
                  borderColor: isDarkMode ? 'whitesmoke' : '#0a0a0a',
                  backgroundColor: isDarkMode ? '#0a0a0a' : 'whitesmoke',
                },
              ]}>
              {data.bloodGroup}
            </Text>
            <Text style={[styles(isDarkMode).label]}>Job Details</Text>
            <Text
              style={[
                styles(isDarkMode).details,
                {
                  color: theme.textColor,
                  borderColor: isDarkMode ? 'whitesmoke' : '#0a0a0a',
                  backgroundColor: isDarkMode ? '#0a0a0a' : 'whitesmoke',
                },
              ]}>
              {data.jobDetails ? data.jobDetails : 'N/A'}
            </Text>
            <Text style={[styles(isDarkMode).label]}>Profession</Text>
            <Text
              style={[
                styles(isDarkMode).details,
                {
                  color: theme.textColor,
                  borderColor: isDarkMode ? 'whitesmoke' : '#0a0a0a',
                  backgroundColor: isDarkMode ? '#0a0a0a' : 'whitesmoke',
                },
              ]}>
              {data.profession ? data.profession : 'N/A'}
            </Text>
            <Text style={[styles(isDarkMode).label]}>Religious Education</Text>
            <Text
              style={[
                styles(isDarkMode).details,
                {
                  color: theme.textColor,
                  borderColor: isDarkMode ? 'whitesmoke' : '#0a0a0a',
                  backgroundColor: isDarkMode ? '#0a0a0a' : 'whitesmoke',
                },
              ]}>
              {data.religiousEducation ? data.religiousEducation : 'N/A'}
            </Text>
            <Text style={[styles(isDarkMode).label]}>Govt Job Type</Text>
            <Text
              style={[
                styles(isDarkMode).details,
                {
                  color: theme.textColor,
                  borderColor: isDarkMode ? 'whitesmoke' : '#0a0a0a',
                  backgroundColor: isDarkMode ? '#0a0a0a' : 'whitesmoke',
                },
              ]}>
              {data.govtType ? data.govtType : 'N/A'}
            </Text>
            <Text style={[styles(isDarkMode).label]}>Abroad</Text>
            <Text
              style={[
                styles(isDarkMode).details,
                {
                  color: theme.textColor,
                  borderColor: isDarkMode ? 'whitesmoke' : '#0a0a0a',
                  backgroundColor: isDarkMode ? '#0a0a0a' : 'whitesmoke',
                },
              ]}>
              {data.abroad ? data.abroad : 'N/A'}
            </Text>
            {/* <Text style={[styles(isDarkMode).label]}>
              House Number
            </Text>
            <Text style={[styles(isDarkMode).details, {color: theme.textColor,borderColor: isDarkMode
                ? "whitesmoke"
                : "#0a0a0a",backgroundColor: isDarkMode
                ? "#0a0a0a"
                : "whitesmoke",}]}>
              {data.houseNumber}
            </Text> */}
            {/* <Text style={[styles(isDarkMode).label]}>
              House Ownership
            </Text>
            <Text
              style={[styles(isDarkMode).details, {color: theme.textColor,borderColor: isDarkMode
                ? "whitesmoke"
                : "#0a0a0a",backgroundColor: isDarkMode
                ? "#0a0a0a"
                : "whitesmoke",}]}>
              {data.houseOwnership && data.houseOwnership.own
                ? 'Own'
                : 'Not Own'}
            </Text> */}
            <Text style={[styles(isDarkMode).label]}>Job Type</Text>
            <Text
              style={[
                styles(isDarkMode).details,
                {
                  color: theme.textColor,
                  borderColor: isDarkMode ? 'whitesmoke' : '#0a0a0a',
                  backgroundColor: isDarkMode ? '#0a0a0a' : 'whitesmoke',
                },
              ]}>
              {getJobTypeLabel(data.jobType)}
            </Text>
            <Text style={[styles(isDarkMode).label]}>Government Allowance</Text>
            <Text
              style={[
                styles(isDarkMode).details,
                {
                  color: theme.textColor,
                  borderColor: isDarkMode ? 'whitesmoke' : '#0a0a0a',
                  backgroundColor: isDarkMode ? '#0a0a0a' : 'whitesmoke',
                },
              ]}>
              {data.govtAllowance ? data.govtAllowance : 'No Pension'}
            </Text>
            {relatedData.length > 1 && (
              <FamilyDetails data={relatedData} entryId={entryId} />
            )}
          </>
        ) : (
          <Text style={styles(isDarkMode).notFound}>Data Not Found</Text>
        )}
        <Text
          onPress={() =>
            navigation.navigate('Form', {formNumber: data.formNumber})
          }
          style={[
            styles(isDarkMode).details,
            {
              borderColor: isDarkMode ? darkTheme.primaryColor : lightTheme.primaryColor,
              borderWidth: 0.5,
              color: isDarkMode ? darkTheme.primaryColor : lightTheme.primaryColor,
              marginTop: 7,
              padding: 9,
              textAlign: 'center',
            },
          ]}>
          + Add Members
        </Text>
        <View style={styles(isDarkMode).backbar}>
          <Text
            onPress={() => {
              navigation.goBack();
            }}
            style={[
              styles(isDarkMode).details,
              {
                borderColor: isDarkMode ? darkTheme.primaryColor : lightTheme.primaryColor,
                borderWidth: 0.5,
                color: isDarkMode ? darkTheme.primaryColor : lightTheme.primaryColor,
                width: '49.1%',
                padding: 9,
                textAlign: 'center',
              },
            ]}>
            Back
          </Text>
          <Text
            onPress={() => {
              deleteEntry(data._id);
            }}
            style={[
              styles(isDarkMode).details,
              {
                borderColor: '#C70039',
                borderWidth: 0.5,
                color: '#C70039',
                width: '49.1%',
                padding: 9,
                textAlign: 'center',
              },
            ]}>
            Delete
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = isDarkMode =>
  StyleSheet.create({
    backbar: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    label: {
      fontSize: 15,
      marginLeft: 10,
      marginVertical: 3,
    },
    details: {
      fontSize: 18,
      marginBottom: 10,
      fontWeight: '500',
      paddingHorizontal: 12,
      borderWidth: 0.2,
      borderRadius: 6,
      padding: 7,
    },
    relatedCard: {
      fontSize: 12,
      borderColor: '#067869',
      borderWidth: 1,
      fontWeight: '500',
      padding: 5,
      borderRadius: 6,
    },
    relatedText: {
      color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
    },
    goBackButton: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    goBackButtonText: {
      fontSize: 16,
    },
    notFound: {
      fontSize: 16,
      color: 'red',
      textAlign: 'center',
    },
  });

export default SelectedEntry;
