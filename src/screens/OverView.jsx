import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {darkTheme, lightTheme} from '../styles/themes';

const OverView = ({route}) => {
  const {mahalluData, isDarkMode} = route.params; // Access the passed data

  const Card = ({title, value}) => (
    <View style={styles(isDarkMode).card}>
      <Text style={styles(isDarkMode).cardTitle}>{title}</Text>
      <Text style={styles(isDarkMode).cardValue}>{value}</Text>
    </View>
  );

  return (
    <View>
      <Text style={styles(isDarkMode).title}>OverView</Text>
      {mahalluData && (
        <View style={styles(isDarkMode).gridContainer}>
          <Card title={'Total Entries'} value={mahalluData.totalEntries} />
          <Card title={'Male'} value={mahalluData.maleCount} />
          <Card title={'Female'} value={mahalluData.femaleCount} />
          <Card title={'Govt Serivce'} value={mahalluData.govtServiceCount} />
          <Card title={'Daily Wage'} value={mahalluData.dailyWageCount} />
          {Object.keys(mahalluData.academicStages).map((stage, index) => (
            <Card
              key={index}
              title={stage}
              value={mahalluData.academicStages[stage]}
            />
          ))}
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
