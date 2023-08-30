import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { useAppearance } from '../../contexts/AppearenceContext';
import { darkTheme, lightTheme } from '../../styles/themes';
import Tile from '../Tile';

const LatestEntriesComponent = ({ entries }) => {
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';

  return (
    <Tile>
      <Text
        style={[
          styles.latestEntriesHeader,
          { color: isDarkMode ? darkTheme.textColor : lightTheme.textColor },
        ]}
      >
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
            ]}
          >
            {item.title}
          </Text>
          <Text
            style={[
              styles.entryDetails,
              {
                color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
              },
            ]}
          >
            {item.date}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.viewAllButton}
        onPress={() => console.log('View all entries')}
      >
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