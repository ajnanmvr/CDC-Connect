import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Button from '../components/Button';
import LatestEntriesComponent from '../components/HomeScreen/LatestEntries';
import UserDetailsComponent from '../components/HomeScreen/UserDetails';
import WelcomeUserComponent from '../components/HomeScreen/WelcomeUser';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = ({navigate}) => {
  const navigation = useNavigation();
  const entries = [
    {title: 'Janish Nehyan', date: '22-01-2023'},
    {title: 'Muhammed Ajnan P', date: '20-04-2023'},
    {title: 'Muhammed Ali', date: '29-01-2023'},
  ];

  return (
    <ScrollView style={styles.container}>
      <WelcomeUserComponent  />
      <UserDetailsComponent area="MALAPPURAM EAST" />
      <LatestEntriesComponent entries={entries} />
      <Button title="New Entry" onPress={() => navigation.navigate('Form')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
