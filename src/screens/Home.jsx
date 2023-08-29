import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import WelcomeUserComponent from '../components/HomeScreen/WelcomeUser';
import UserDetailsComponent from '../components/HomeScreen/UserDetails';
import LatestEntriesComponent from '../components/HomeScreen/LatestEntries';
import Button from '../components/Button';

const HomeScreen = ({navigate}) => {
  const entries = [
    {title: 'Janish Nehyan', date: '22-01-2023'},
    {title: 'Muhammed Ajnan P', date: '20-04-2023'},
    {title: 'Muhammed Ali', date: '29-01-2023'},
  ];

  return (
    <ScrollView style={styles.container}>
      <WelcomeUserComponent username="Muhammed Ali" />
      <UserDetailsComponent area="MALAPPURAM EAST" />
      <LatestEntriesComponent entries={entries} />
      <Button
        title="New Entry"
        onPress={() => console.log('Create new entry')}
      />
      <Button
        title="New Entry"
        onPress={() => console.log('Create new entry')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
