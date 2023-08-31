import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Tile from '../components/Tile';
import { useAppearance } from '../contexts/AppearenceContext';
import { darkTheme, lightTheme } from '../styles/themes';

const Entries = ({route}) => {
  const {entries} = route.params;
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';

  return (
    <Tile>
      <Text
        style={[
          styles.latestEntriesHeader,
          {color: isDarkMode ? darkTheme.textColor : lightTheme.textColor},
        ]}>
        Latest Entries
      </Text>

      {entries.map((item, index) => (
        <TouchableOpacity key={index} style={styles.entryItem}>
          <Text
            style={[
              styles.entryTitle,
              {
                color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
              },
            ]}>
            {item.name}
          </Text>
          <Text
            style={[
              styles.entryDetails,
              {
                color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
              },
            ]}>
            {moment(item.createdAt).format('DD-MM-YYYY')}
          </Text>
        </TouchableOpacity>
      ))}
     
    </Tile>
  );
};

const styles = StyleSheet.create({
  latestEntriesHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
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

export default Entries;
