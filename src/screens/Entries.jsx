import moment from 'moment';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAppearance} from '../contexts/AppearenceContext';
import {darkTheme, lightTheme} from '../styles/themes';
import {useNavigation} from '@react-navigation/native';
import Title from '../components/Title';

const Entries = ({route}) => {
  const {entries} = route.params;
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';
  const navigation = useNavigation();

  const navigateToEntryDetails = entryId => {
    navigation.navigate('ُSelectedEntry', {entryId}); // Pass the entry ID as a parameter
  };
  return (
    <View style={styles.container}>
      <Title>Latest Entries ({entries.length})</Title>

      {entries.map((item, index) => (
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
                color: isDarkMode
                  ? darkTheme.backgroundColor
                  : lightTheme.backgroundColor,
              },
            ]}>
            {item.formNumber}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{padding:20},
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
    paddingVertical: 8,
    borderBottomWidth: 1,
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

});

export default Entries;
