import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useAppearance } from '../../contexts/AppearenceContext';
import { darkTheme, lightTheme } from '../../styles/themes';
import Tile from '../Tile';

const LatestEntriesComponent = ({data, loading}) => {
  const navigation = useNavigation();
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';
  const navigateToEntryDetails = entryId => {
    navigation.navigate('ُSelectedEntry', {entryId}); // Pass the entry ID as a parameter
  };
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
          <TouchableOpacity onPress={()=>{
            navigateToEntryDetails(item._id)
          }} key={index} style={styles.entryItem}>
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
              {/* {moment(item.createdAt).format('DD-MM-YYYY')} */}
              {item.formNumber}
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
    marginTop: 10,
  },
  viewAllButtonText: {
    color: '#3498db',
    fontSize: 14,
    textAlign:"center"
  },
});

export default LatestEntriesComponent;
