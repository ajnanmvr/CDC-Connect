import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import Axios from '../utils/Axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useUser} from '../contexts/UserContext';
import {useAppearance} from '../contexts/AppearenceContext';
import {darkTheme, lightTheme} from '../styles/themes';

const FilteredData = ({route}) => {
  const {query, title} = route.params;
  const {user} = useUser();
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';

  const getData = async () => {
    try {
      let apiQuery;
      if (query) {
        apiQuery = `/entry?mahallu=${user.mahallu}&${query}`;
      } else {
        apiQuery = `/entry?mahallu=${user.mahallu}`;
      }
      setLoading(true);
      let token = await AsyncStorage.getItem('authToken');
      let response = await Axios.get(apiQuery, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFilteredData(response.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles(isDarkMode).container}>
      <Text style={styles(isDarkMode).title}>
        {title} ({filteredData.length})
      </Text>
      <View style={styles(isDarkMode).headerRow}>
        <Text
          style={[
            styles(isDarkMode).headerCell,
            styles(isDarkMode).cell,
            {color: 'white'},
          ]}>
          Name
        </Text>
        <Text
          style={[
            styles(isDarkMode).headerCell,
            styles(isDarkMode).cell,
            {color: 'white'},
          ]}>
          Gender
        </Text>
        <Text
          style={[
            styles(isDarkMode).headerCell,
            styles(isDarkMode).cell,
            {color: 'white'},
          ]}>
          Job Type
        </Text>
      </View>
      {!loading ? (
        filteredData.map((entry, index) => (
          <View key={index} style={styles(isDarkMode).dataRow}>
            <Text
              style={[styles(isDarkMode).dataCell, styles(isDarkMode).cell]}>
              {entry.name}
            </Text>
            <Text
              style={[styles(isDarkMode).dataCell, styles(isDarkMode).cell]}>
              {entry.gender}
            </Text>
            <Text
              style={[styles(isDarkMode).dataCell, styles(isDarkMode).cell]}>
              {entry.jobType.govtService ? 'Govt Service' : 'Private'}
            </Text>
          </View>
        ))
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};
const styles = isDarkMode =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      overflow: 'hidden',
      marginVertical: 10,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 10,
      color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
    },
    headerRow: {
      flexDirection: 'row',
      backgroundColor: isDarkMode
        ? darkTheme.primaryColor
        : lightTheme.primaryColor,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    dataRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    headerCell: {
      fontWeight: 'bold',
    },
    dataCell: {
      paddingVertical: 10,
    },
    cell: {
      flex: 1,
      padding: 10,
      textAlign: 'center',
      color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
    },
  });
export default FilteredData;
