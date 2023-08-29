import React from 'react';
import { View, StyleSheet } from 'react-native';
import WelcomeUserComponent from '../components/HomeScreen/WelcomeUser';
import UserDetailsComponent from '../components/HomeScreen/UserDetails';
import LatestEntriesComponent from '../components/HomeScreen/LatestEntries';
import Button from '../components/Button';

const HomeScreen = ({navigate}) => {
  const entries = [
    { title: 'Janish Nehyan' },
    { title: 'Muhammed Ajnan P' },
    { title: 'Muhammed Ali' },
  ];

  return (
    <View style={styles.container}>
      <WelcomeUserComponent username="Muhammed Ali" />
      <UserDetailsComponent area="MALAPPURAM EAST" />
      <LatestEntriesComponent entries={entries} />
      <Button title="New Entry" onPress={() => console.log('Create new entry')} />
      <Button title="New Entry" onPress={() => console.log('Create new entry')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
