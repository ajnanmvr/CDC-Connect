import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Axios from '../utils/Axios';
import {useUser} from '../contexts/UserContext';

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
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
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
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#ff6347',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default UserProfile;
