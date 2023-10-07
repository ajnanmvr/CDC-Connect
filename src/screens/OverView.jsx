import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {darkTheme, lightTheme} from '../styles/themes';
import {useNavigation} from '@react-navigation/native';

const OverView = ({route}) => {
  const {mahalluData, isDarkMode} = route.params; // Access the passed data
  console.log(mahalluData.academicStages);
  const navigation = useNavigation();

  const Card = ({title, value, query}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ُFilteredData', {query, title})}
      style={styles(isDarkMode).card}>
      <Text style={styles(isDarkMode).cardTitle}>{title}</Text>
      <Text style={styles(isDarkMode).cardValue}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={styles(isDarkMode).title}>OverView</Text>
      {mahalluData && (
        <View style={styles(isDarkMode).gridContainer}>
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
            title={'Govt Serivce'}
            value={mahalluData.govtServiceCount}
            query={'jobType.govtService=true'}
          />
          <Card
            title={'Daily Wage'}
            value={mahalluData.dailyWageCount}
            query={'jobType.dailyWage=true'}
          />
          {Object.keys(mahalluData.academicStages).map((stage, index) => {
            const value = mahalluData.academicStages[stage];
            if (stage !== 'null') {
              return (
                <Card
                  key={index}
                  title={stage}
                  value={value}
                  query={`academicStage=${encodeURIComponent(stage)}`}
                />
              );
            }
            return null; // Skip rendering when the key is "null"
          })}
        </View>
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
  });

export default OverView;
