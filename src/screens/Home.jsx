import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import UserDetailsComponent from '../components/HomeScreen/UserDetails';
import WelcomeUserComponent from '../components/HomeScreen/WelcomeUser';
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
      {id: '1', iconName: require(`../media/icons/list.png`), text: 'Card 1'},
      {
        id: '2',
        iconName: require(`../media/icons/male-user.png`),
        text: 'Card 1',
      },
      {
        id: '3',
        iconName: require(`../media/icons/woman-avatar.png`),
        text: 'Card 1',
      },

      // Add more objects as needed
    ];

    return (
      <ScrollView horizontal={true} style={styles.scrollView}>
        {data.map((item, index) => (
          <View key={item.id} style={styles.cardContainer}>
            <IconCard title={item.text} icon={item.iconName} />
          </View>
        ))}
      </ScrollView>
    );
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <WelcomeUserComponent />
        <UserDetailsComponent isLoading={loading} entries={data} />
      </ScrollView>
      <RoundFloatingButton
        onPress={() => navigation.navigate('Form')}
        icon={require('../media/icons/edit.png')}
      />
    </>
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
