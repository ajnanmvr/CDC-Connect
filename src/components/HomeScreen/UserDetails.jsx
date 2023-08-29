import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useAppearance} from '../../contexts/AppearenceContext';
import {useUser} from '../../contexts/UserContext';
import {darkTheme, lightTheme} from '../../styles/themes';
import Axios from '../../utils/Axios';
import Tile from '../Tile';

const UserDetailsComponent = ({area}) => {
  const {user} = useUser();
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';
  const [mahalluDetails, setMahalluDetails] = useState(null);

  const getMahallu = async () => {
    try {
      let {data} = await Axios.get(`/mahallu/details/${user.mahallu}`);
      console.log('hellow r');
      console.log(data);
      setMahalluDetails(data);
      console.log(mahalluDetails);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  console.log(mahalluDetails);

  const renderCard = (title, value) => (
    <View style={styles(isDarkMode).card}>
      <Text style={styles(isDarkMode).cardTitle}>{title}</Text>
      <Text style={styles(isDarkMode).cardValue}>{value}</Text>
    </View>
  );

  const renderGridItem = ({item}) => (
    <View style={styles(isDarkMode).gridItem}>
      {renderCard(item.title, item.value)}
    </View>
  );

  const detailsData = [
    {title: 'Total Entries', value: mahalluDetails?.totalEntries},
    {title: 'Male', value: mahalluDetails?.maleCount},
    {title: 'Female', value: mahalluDetails?.femaleCount},
    {title: 'Female', value: mahalluDetails?.femaleCount},
    {title: 'Female', value: mahalluDetails?.femaleCount},
    {title: 'Female', value: mahalluDetails?.femaleCount},
    // Add more details here            
  ];
  useEffect(() => {
    getMahallu();
  }, []);

  return (
    <Tile>
      <View style={styles(isDarkMode).detailsHeader}>
        <Text style={styles(isDarkMode).detailsHeaderText}>Your Area</Text>
      </View>
      <View style={styles(isDarkMode).cardContainer}>
        <View style={styles(isDarkMode).card}>
          <Text style={styles(isDarkMode).detailsText}>{area}</Text>
        </View>
        {mahalluDetails && (
          <FlatList
            data={detailsData}
            renderItem={renderGridItem}
            numColumns={2}
            contentContainerStyle={styles(isDarkMode).gridContainer}
          />
        )}
      </View>
      <Text style={styles(isDarkMode).extraDetails}>
        Check out the latest updates and entries in your area!
      </Text>
    </Tile>
  );
};

const styles = isDarkMode =>
  StyleSheet.create({
    detailsHeader: {
      borderBottomWidth: 1,
      borderColor: '#ccc',
      paddingBottom: 10,
      marginBottom: 10,
    },
    detailsHeaderText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
    },
    cardContainer: {
      borderRadius: 10,
      padding: 15,
    },
    card: {
      backgroundColor: isDarkMode
        ? darkTheme.secondaryColor
        : lightTheme.primaryColor,
      borderRadius: 20,
      padding: 20,
      marginBottom: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    gridContainer: {
      justifyContent: 'space-between',
      marginTop: 10,
    },
    gridItem: {
      flex: 1,
      marginHorizontal: 5,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#fff',
    },
    cardValue: {
      fontSize: 14,
      color: '#fff',
    },
    detailsText: {
      fontSize: 16,
      marginBottom: 10,
    },
    extraDetails: {
      fontSize: 14,
      color: '#888',
    },
  });

export default UserDetailsComponent;
