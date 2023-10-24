import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from '../components/Title';
import {useAppearance} from '../contexts/AppearenceContext';
import {useUser} from '../contexts/UserContext';
import {darkTheme, lightTheme} from '../styles/themes';
import Axios from '../utils/Axios';

const FilteredData = ({route}) => {
  const {query, title} = route.params;
  const {user} = useUser();
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';
  const navigation = useNavigation();

  const getData = async () => {
    try {
      let apiQuery;
      if (query) {
        apiQuery = `/entry?mahallu=${user.mahallu?._id}&${query}`;
      } else {
        apiQuery = `/entry?mahallu=${user.mahallu?._id}`;
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
      <Title>
        All {title} ({filteredData.length})
      </Title>
      <View style={styles(isDarkMode).table}>
        <View style={styles(isDarkMode).headerRow}>
          <Text
            style={[
              styles(isDarkMode).headerCell,
              styles(isDarkMode).cell,
              styles(isDarkMode).nameCell,

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
            <TouchableOpacity
              key={index}
              style={styles(isDarkMode).dataRow}
              onPress={() => {
                navigation.navigate('ُSelectedEntry', {entryId: entry._id});
              }}>
              <Text
                style={[
                  styles(isDarkMode).dataCell,
                  styles(isDarkMode).cell,
                  styles(isDarkMode).nameCell,
                ]}>
                {entry.name}
              </Text>
              <Text
                style={[styles(isDarkMode).dataCell, styles(isDarkMode).cell]}>
                {entry.gender}
              </Text>
              <Text
                style={[styles(isDarkMode).dataCell, styles(isDarkMode).cell]}>
                {entry?.jobType?.govtService ? 'Govt Service' : 'Private'}
              </Text>
            </TouchableOpacity>
          ))
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </View>
  );
};
const styles = isDarkMode =>
  StyleSheet.create({
    container: {
      overflow: 'hidden',
      margin: 20,
    },
    table: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      overflow: 'hidden',
    },

    headerRow: {
      flexDirection: 'row',
      backgroundColor: lightTheme.primaryColor,

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
      textTransform: 'lowercase',
      textAlign: 'center',
      textTransform: 'capitalize',
      color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
    },
    nameCell: {width: 100},
  });
export default FilteredData;
