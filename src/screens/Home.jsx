import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import LatestEntriesComponent from '../components/HomeScreen/LatestEntries';
import UserDetailsComponent from '../components/HomeScreen/UserDetails';
import WelcomeUserComponent from '../components/HomeScreen/WelcomeUser';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from '../utils/Axios';
import IconCard from '../components/IconCard';

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
  const GridView = () => {
    const data = [
      {id: '1', iconName: 'circle-thin', text: 'Card 1'},
      {id: '2', iconName: 'star', text: 'Card 2'},
      {id: '3', iconName: 'smile-o', text: 'Card 3'},
      {id: '5', iconName: 'bell', text: 'Card 4'},
      {id: '6', iconName: 'bell', text: 'Card 4'},
      {id: '7', iconName: 'bell', text: 'Card 4'},
      // Add more objects as needed
    ];

    return (
      <View style={styles.container1}>
      <View style={styles.row}>
        {data.map((item, index) => (
          <View key={item.id} style={styles.cardContainer}>
            <IconCard iconName={item.iconName} text={item.text} title={"Male"} />
          </View>
        ))}
      </View>
    </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <WelcomeUserComponent />
      <UserDetailsComponent/>
      <LatestEntriesComponent loading={loading} data={data} />
      {/* <GridView /> */}
      <Button title="New Entry" onPress={() => navigation.navigate('Form')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  cardContainer: {
    width: '45%', // Adjust as needed to fit two cards in a row
    marginVertical: 10,
  },
});

export default HomeScreen;
