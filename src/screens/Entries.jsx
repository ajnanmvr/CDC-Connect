import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../components/Title';
import {useAppearance} from '../contexts/AppearenceContext';
import {darkTheme, lightTheme} from '../styles/themes';

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
      <Title>Latest Entries </Title>
      <Text
        style={{
          textAlign: 'center',
          marginTop: -20,
          marginBottom: 15,
          color: isDarkMode
          ? darkTheme.primaryColor
          : lightTheme.primaryColor,
          fontWeight: 'bold',
        }}>
        {entries.length} Data Found
      </Text>

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
                color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
              },
            ]}>
            {item.name}
          </Text>
          <Text style={styles.entryDetails}>{item.formNumber}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingVertical: 20, paddingHorizontal: 30},
  entryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
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

export default Entries;
