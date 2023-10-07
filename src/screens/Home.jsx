import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Button from '../components/Button';
import LatestEntriesComponent from '../components/HomeScreen/LatestEntries';
import UserDetailsComponent from '../components/HomeScreen/UserDetails';
import WelcomeUserComponent from '../components/HomeScreen/WelcomeUser';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from '../utils/Axios';

const HomeScreen = ({route}) => {
  const {reload} = route.params || {};
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      let token = await AsyncStorage.getItem('authToken');
      let response = await Axios.get('/entry/home/data', {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      setData(response.data.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      if (reload) {
        // Perform your reload logic here
        getData();
        navigation.setParams({reload: false});
      }
    }, [reload]),
  );
  useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <WelcomeUserComponent />
      <UserDetailsComponent area="MALAPPURAM EAST" />
      <LatestEntriesComponent loading={loading} data={data} />
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
