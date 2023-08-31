import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useAppearance} from '../../contexts/AppearenceContext';
import {darkTheme, lightTheme} from '../../styles/themes';
import Tile from '../Tile';
import Axios from '../../utils/Axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

const LatestEntriesComponent = () => {
  const navigation = useNavigation();
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);

  const getData = async () => {
    try {
      setLoading(true);
      let token = await AsyncStorage.getItem('authToken');
      let response = await Axios.get('/entry/home/data', {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      setData(response.data.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Tile>
      <Text
        style={[
          styles.latestEntriesHeader,
          {color: isDarkMode ? darkTheme.textColor : lightTheme.textColor},
        ]}>
        Latest Entries
      </Text>

      {!loading ? (
        data?.slice(0, 3).map((item, index) => (
          <TouchableOpacity key={index} style={styles.entryItem}>
            <Text
              style={[
                styles.entryTitle,
                {
                  color: isDarkMode
                    ? darkTheme.textColor
                    : lightTheme.textColor,
                },
              ]}>
              {item.name}
            </Text>
            <Text
              style={[
                styles.entryDetails,
                {
                  color: isDarkMode
                    ? darkTheme.textColor
                    : lightTheme.textColor,
                },
              ]}>
              {moment(item.createdAt).format('DD-MM-YYYY')}
            </Text>
          </TouchableOpacity>
        ))
      ) : (
        <ActivityIndicator />
      )}
      <TouchableOpacity
        style={styles.viewAllButton}
        onPress={() => navigation.navigate('ُEntries', {entries: data})}>
        <Text style={styles.viewAllButtonText}>View All Entries</Text>
      </TouchableOpacity>
    </Tile>
  );
};

const styles = StyleSheet.create({
  latestEntriesHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  entryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  entryTitle: {
    fontSize: 16,
  },
  entryDetails: {
    color: '#888',
  },
  viewAllButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  viewAllButtonText: {
    color: '#3498db',
    fontSize: 14,
  },
});

export default LatestEntriesComponent;
