import React from 'react';
import { View, StyleSheet } from 'react-native';
import WelcomeUserComponent from './WelcomeUser';
import UserDetailsComponent from './UserDetails';
import LatestEntriesComponent from './LatestEntries';
import NewEntryButton from './NewEntryButton';
import SendMessageButton from './SendMessageBtn';

const HomeScreen = () => {
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
      <NewEntryButton onPress={() => console.log('Create new entry')} />
      <SendMessageButton onPress={() => console.log('Send message')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
