import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppearance} from '../../contexts/AppearenceContext';
import {darkTheme, lightTheme} from '../../styles/themes';
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
      <TouchableOpacity
        style={styles.viewAllButton}
        onPress={() => navigation.navigate('ُEntries', {entries: data})}>
        <View style={styles.container}>
          <Text
            style={[
              styles.latestEntriesHeader,
              {color: isDarkMode ? darkTheme.textColor : lightTheme.textColor},
            ]}>
            Latest Entries
          </Text>

          <Image
            source={require('../../media/icons/right.png')}
            style={styles.imageStyle}
          />
        </View>
      </TouchableOpacity>

      {!loading ? (
        data?.slice(0, 5).map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              navigateToEntryDetails(item._id);
            }}
            key={index}
            style={styles.entryItem}>
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
                  color: 'white',
                },
              ]}>
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
        <Text
          style={[
            styles.viewAllButtonText,
            {
              color: isDarkMode
                ? darkTheme.primaryColor
                : lightTheme.primaryColor,
              borderColor: isDarkMode
                ? darkTheme.primaryColor
                : lightTheme.primaryColor,
            },
          ]}>
          View All Entries
        </Text>
      </TouchableOpacity>
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
    borderBottomWidth: 0.25,
    borderColor: '#E0E0E0',
  },
  entryTitle: {
    fontSize: 14,
  },
  entryDetails: {
    fontSize: 12,
    backgroundColor: '#067869',
    fontWeight: '500',
    color: 'white',
    padding: 5,
    borderRadius: 6,
  },
  viewAllButton: {
    marginTop: 10,
  },
  viewAllButtonText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    marginTop: 3,
  },
});

export default LatestEntriesComponent;
