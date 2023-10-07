import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Tile from '../components/Tile';
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
    try {
      let {data} = await Axios.get(`/entry/${entryId}`);
      setData(data.data);
      setRelatedData(data.relatedData);
    } catch (error) {
      console.log(error.response);
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
      <Tile>
        {data ? (
          <>
            <Text
              style={[styles(isDarkMode).userName, {color: theme.textColor}]}>
              {data.name}
            </Text>
            <Text style={[styles(isDarkMode).label, {color: theme.textColor}]}>
              Form Number
            </Text>
            <Text
              style={[styles(isDarkMode).details, {color: theme.textColor}]}>
              ({data.formNumber})
            </Text>
            <Text style={[styles(isDarkMode).label, {color: theme.textColor}]}>
              Mobile Number
            </Text>
            <Text
              style={[styles(isDarkMode).details, {color: theme.textColor}]}>
              {data.mobileNumber}
            </Text>
            <Text style={[styles(isDarkMode).label, {color: theme.textColor}]}>
              Gender
            </Text>
            <Text
              style={[styles(isDarkMode).details, {color: theme.textColor}]}>
              {data.gender}
            </Text>
            <Text style={[styles(isDarkMode).label, {color: theme.textColor}]}>
              Date Of Birth
            </Text>
            <Text
              style={[styles(isDarkMode).details, {color: theme.textColor}]}>
              {data.dob}
            </Text>
            <Text style={[styles(isDarkMode).label, {color: theme.textColor}]}>
              Education
            </Text>
            <Text
              style={[styles(isDarkMode).details, {color: theme.textColor}]}>
              {data.materialEducation}
            </Text>
            <Text style={[styles(isDarkMode).label, {color: theme.textColor}]}>
              Blood Group
            </Text>
            <Text
              style={[styles(isDarkMode).details, {color: theme.textColor}]}>
              {data.bloodGroup}
            </Text>
            <Text style={[styles(isDarkMode).label, {color: theme.textColor}]}>
              Job Details
            </Text>
            <Text
              style={[styles(isDarkMode).details, {color: theme.textColor}]}>
              {data.jobDetails ? data.jobDetails : 'N/A'}
            </Text>
            {/* <Text style={[styles(isDarkMode).label, {color: theme.textColor}]}>
              House Number
            </Text>
            <Text style={[styles(isDarkMode).details, {color: theme.textColor}]}>
              {data.houseNumber}
            </Text> */}
            <Text style={[styles(isDarkMode).label, {color: theme.textColor}]}>
              House Ownership
            </Text>
            <Text
              style={[styles(isDarkMode).details, {color: theme.textColor}]}>
              {data.houseOwnership && data.houseOwnership.own
                ? 'Own'
                : 'Not Own'}
            </Text>
            <Text style={[styles(isDarkMode).label, {color: theme.textColor}]}>
              Job Type
            </Text>
            <Text
              style={[styles(isDarkMode).details, {color: theme.textColor}]}>
              {getJobTypeLabel(data.jobType)}
            </Text>
            <Text style={[styles(isDarkMode).label, {color: theme.textColor}]}>
              Government Allowance
            </Text>
            <Text
              style={[styles(isDarkMode).details, {color: theme.textColor}]}>
              {data.govtAllowance && data.govtAllowance.pention
                ? 'Pension'
                : 'No Pension'}
            </Text>
            {relatedData.length > 1 && <Title>House Members</Title>}
            {relatedData
              .filter(item => item._id !== entryId) // Exclude the entry with matching entryId
              .map((item, key) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ُSelectedEntry', {entryId: item._id}); // Pass the entry ID as a parameter
                  }}
                  style={styles(isDarkMode).relatedCard}
                  key={key}>
                  <Text style={styles(isDarkMode).relatedText}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
          </>
        ) : (
          <Text style={styles(isDarkMode).notFound}>Data Not Found</Text>
        )}

        <TouchableOpacity
          style={[
            styles(isDarkMode).goBackButton,
            {backgroundColor: theme.primaryColor},
          ]}
          onPress={() =>
            navigation.navigate('Form', {formNumber: data.formNumber})
          }>
          <Text style={[styles(isDarkMode).goBackButtonText, {color: 'white'}]}>
            Add Members
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles(isDarkMode).goBackButton,
            {backgroundColor: theme.primaryColor},
          ]}
          onPress={() => navigation.goBack()}>
          <Text style={[styles(isDarkMode).goBackButtonText, {color: 'black'}]}>
            Go Back
          </Text>
        </TouchableOpacity>
        <Text
          onPress={() => {
            deleteEntry(data._id);
          }}
          style={{
            color: '#C70039',
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Delete
        </Text>
      </Tile>
    </ScrollView>
  );
};

const styles = isDarkMode =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    userName: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textTransform: 'uppercase',
    },
    label: {
      fontSize: 15,
    },
    details: {
      fontSize: 18,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    relatedCard: {
      padding: 15,
      backgroundColor: isDarkMode
        ? darkTheme.backgroundColor
        : lightTheme.backgroundColor,
      marginVertical: 3,
      borderRadius: 20,
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