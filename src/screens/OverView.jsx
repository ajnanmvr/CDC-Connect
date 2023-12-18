import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {darkTheme, lightTheme} from '../styles/themes';

const OverView = ({route}) => {
  const {mahalluData, isDarkMode} = route.params; // Access the passed data

  const navigation = useNavigation();

  const Card = ({title, value, query}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('FilteredData', {query, title})}
      style={styles(isDarkMode).card}>
      <Text style={styles(isDarkMode).cardTitle}>{title}</Text>
      <Text style={styles(isDarkMode).cardValue}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={styles(isDarkMode).title}>OverView</Text>
      {mahalluData && (
        <ScrollView style={styles(isDarkMode).gridContainer}>
          <Card title={'Total Entries'} value={mahalluData.totalEntries} />
          <Card
            title={'Male'}
            value={mahalluData.maleCount}
            query={'gender=male'}
          />
          <Card
            title={'Female'}
            value={mahalluData.femaleCount}
            query={'gender=female'}
          />
          <Card
            title={'Married'}
            value={mahalluData.marriedCount}
            query={'maritalStatus=Married'}
          />
          <Card
            title={'Unmarried'}
            value={mahalluData.unmarriedCount}
            query={'maritalStatus=Unmarried'}
          />
          <Card
            title={'Widow'}
            value={mahalluData.widowCount}
            query={'maritalStatus=Widow/er'}
          />
          <Card
            title={'Science'}
            value={mahalluData.scienceCount}
            query={'educationalSubject=Science'}
          />
          <Card
            title={'Humanities'}
            value={mahalluData.humanitiesCount}
            query={'educationalSubject=Humanities'}
          />
          <Card
            title={'Commerce'}
            value={mahalluData.commerceCount}
            query={'educationalSubject=Commerce'}
          />
          <Card
            title={'Govt. Service'}
            value={mahalluData.govtServiceCount}
            query={'jobType=Govt. Service'}
          />
          <Card
            title={'Private Sector'}
            value={mahalluData.privateSectorCount}
            query={'jobType=Private Sector'}
          />
          <Card
            title={'Daily Wage'}
            value={mahalluData.dailyWageCount}
            query={'jobType=Daily Wage'}
          />
          <Card
            title={'Doctor'}
            value={mahalluData.doctorCount}
            query={'profession=Doctor'}
          />
          <Card
            title={'Teacher'}
            value={mahalluData.teacherCount}
            query={'profession=Teacher'}
          />
        </ScrollView>
      )}
    </View>
  );
};

const styles = isDarkMode =>
  StyleSheet.create({
    title: {
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: 30,
    },
    card: {
      borderBottomWidth: 1,
      borderColor: '#E0E0E0',
      borderRadius: 20,
      padding: 20,
      marginBottom: 3,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
    },
    cardValue: {
      fontSize: 14,
      color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
    },
    gridContainer: {
      // Add your styles here
    },
  });

export default OverView;
