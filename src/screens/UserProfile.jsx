import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Axios from '../utils/Axios';
import Title from '../components/Title';
import {useUser} from '../contexts/UserContext';
import Button from '../components/Button';

const UserProfile = () => {
  const {params} = useRoute();
  const navigation = useNavigation();
  const {setUser} = useUser();

  const handleLogout = async () => {
    try {
      let response = await Axios.post('/user/logout');
      alert('Logged out successfully');
      setUser(null);
      navigation.navigate('Login');
    } catch (error) {
      alert('something went wrong');
      console.log(error.response);
    }
  };

  return (
    <View style={styles.page}>
      <Title>User Details</Title>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.info}>{params.user.name}</Text>
        </View>
        <View style={styles.profileContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.info}>{params.user.email}</Text>
        </View>
        <View style={styles.profileContainer}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.info}>{params.user.phoneNumber}</Text>
        </View>
        <View style={styles.profileContainer}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.info}>{params.user.address}</Text>
        </View>
        <Button title="Logout" onPress={handleLogout}/>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
  container: {
    borderWidth: 1,
    borderColor: '#067869',
    padding: 20,
    borderRadius: 15,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
  },
  info: {
    flex: 2,
    fontSize: 16,
  },

});

export default UserProfile;
