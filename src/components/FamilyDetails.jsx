import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {useAppearance} from '../contexts/AppearenceContext';
import {darkTheme, lightTheme} from '../styles/themes';
import Tile from './Tile';

const LatestEntriesComponent = ({data, entryId}) => {
  const navigation = useNavigation();
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';
  const navigateToEntryDetails = entryId => {
    navigation.navigate('ُSelectedEntry', {entryId}); // Pass the entry ID as a parameter
  };
  return (
    <Tile>
      <TouchableOpacity
        style={styles.viewAllButton}
        onPress={() => navigation.navigate('ُEntries', {entries: data})}>
        <Text
          style={[
            styles.latestEntriesHeader,
            {color: isDarkMode ? darkTheme.textColor : lightTheme.textColor},
          ]}>
          Family Members
        </Text>
      </TouchableOpacity>

      {data
        ?.filter(item => item._id !== entryId)
        .map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              navigateToEntryDetails(item._id);
            }}
            key={index}
            style={styles.entryItem}>
            <View style={styles.entryItem}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  backgroundColor: '#067869',
                  fontWeight: '500',
                  borderRadius: 50,paddingVertical:2,paddingHorizontal:7, marginRight:8,
                  fontWeight:"bold"
                }}>
                {index + 1}
              </Text>
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
            </View>
            <Text
              style={[
                styles.entryDetails,
                {
                  color: 'white',
                },
              ]}>
              {item.formNumber}
            </Text>
          </TouchableOpacity>
        ))}
    </Tile>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 10,
  },
  latestEntriesHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageStyle: {width: 11, height: 20, marginRight: 10},
  entryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderColor: '#E0E0E0',
  },
  entryDetails: {
    fontSize: 12,
    backgroundColor: '#067869',
    fontWeight: '500',
    color: 'white',
    padding: 5,
    borderRadius: 6,
  },
});

export default LatestEntriesComponent;
