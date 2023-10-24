import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {useAppearance} from '../../contexts/AppearenceContext';
import {darkTheme, lightTheme} from '../../styles/themes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const WelcomeUser = ({mahallu}) => {
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();

  const getUserData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        setUserData(userData);
      } else {
        console.log('User data not found in AsyncStorage.');
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('UserProfile', {user: userData})}
      style={[
        styles.welcomeContainer,
        {
          backgroundColor: isDarkMode
            ? darkTheme.backgroundColor
            : lightTheme.backgroundColor,
        },
      ]}>
      <View>
        <Text style={styles.mahallu}>{mahallu}</Text>
        <Text
          style={[
            styles.welcomeText,
            {
              color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
            },
          ]}>
          Good Day, {userData?.name}!
        </Text>
      </View>
      <Image
        source={require('../../media/icons/logout.png')}
        style={styles.imageStyle}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  mahallu: {
    fontSize: 14,
    textTransform: 'lowercase',
    textTransform: 'capitalize',
  },
  imageStyle: {width: 23, height: 25, marginVertical: 10, marginTop: 'auto'},
});

export default WelcomeUser;
