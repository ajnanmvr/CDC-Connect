import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import UserDetailsComponent from '../components/HomeScreen/UserDetails';
import IconCard from '../components/IconCard';
import RoundFloatingButton from '../components/RoundFloatingButton';
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
    <>
      <ScrollView style={styles.container}>
        <UserDetailsComponent isLoading={loading} entries={data} />
      </ScrollView>
      <RoundFloatingButton
        onPress={() => navigation.navigate('Form')}
        icon={'+'}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  scrollView: {
    height: 200, // Adjust the height as per your requirement
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainer: {
    margin: 12,
  },
});

export default HomeScreen;
