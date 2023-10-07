import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import {useAppearance} from '../../contexts/AppearenceContext';
import {useUser} from '../../contexts/UserContext';
import {darkTheme, lightTheme} from '../../styles/themes';
import Axios from '../../utils/Axios';
import Tile from '../Tile';
import {useNavigation} from '@react-navigation/native';

const UserDetailsComponent = ({area}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const {user} = useUser();
  const appearance = useAppearance();
  const isDarkMode = appearance === 'dark';
  const [mahalluDetails, setMahalluDetails] = useState(null);

  const getMahallu = async () => {
    setLoading(true);
    try {
      let {data} = await Axios.get(`/mahallu/details/${user?.mahallu?._id}`);
      setMahalluDetails(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response.data);
    }
  };

  const Card = ({title, value}) => (
    <View style={styles(isDarkMode).card}>
      <Text style={styles(isDarkMode).cardTitle}>{title}</Text>
      <Text style={styles(isDarkMode).cardValue}>{value}</Text>
    </View>
  );
  useEffect(() => {
    getMahallu();
  }, []);
  console.log(user);
  return (
    <Tile>
      <View style={styles(isDarkMode).detailsHeader}>
        <Text style={styles(isDarkMode).detailsHeaderText}>Your Area</Text>
      </View>
      <View style={styles(isDarkMode).cardContainer}>
        <View style={styles(isDarkMode).card}>
          <Text style={styles(isDarkMode).detailsText}>
            {user?.mahallu?.name}
          </Text>
        </View>
        {!loading ? (
          <>
            {mahalluDetails && (
              <View style={styles(isDarkMode).gridContainer}>
                <Card
                  title={'Total Entries'}
                  value={mahalluDetails.totalEntries}
                />
                <Card title={'Male'} value={mahalluDetails.maleCount} />
                <Card title={'Female'} value={mahalluDetails.femaleCount} />
                <Card
                  title={'Govt Serivce'}
                  value={mahalluDetails.govtServiceCount}
                />
                <Card
                  title={'Daily Wage'}
                  value={mahalluDetails.dailyWageCount}
                />
              </View>
            )}
          </>
        ) : (
          <ActivityIndicator />
        )}
      </View>
      {mahalluDetails && (
        <>
          <Text style={styles(isDarkMode).extraDetails}>
            Check out the latest updates and entries in your area!
          </Text>
          <TouchableOpacity
            style={styles(isDarkMode).viewAllButton}
            onPress={() => {
              // Navigate to OverViewPage and pass the mahalluDetails
              navigation.navigate('Overview', {
                mahalluData: mahalluDetails,
                isDarkMode,
              });
            }}>
            <Text style={styles(isDarkMode).viewAllButtonText}>
              View All Entries
            </Text>
          </TouchableOpacity>
        </>
      )}
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
      borderBottomWidth: 1,
      borderColor: '#E0E0E0',
      borderRadius: 20,
      padding: 20,
      marginBottom: 3,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    gridContainer: {
      justifyContent: 'space-between',
      marginTop: 3,
    },
    gridItem: {
      flex: 1,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
    },
    cardValue: {
      fontSize: 14,
      color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
    },
    detailsText: {
      fontSize: 16,
      marginBottom: 10,
      color: isDarkMode ? darkTheme.titleColor : lightTheme.titleColor,
    },
    extraDetails: {
      fontSize: 14,
      color: '#888',
    },
    viewAllButton: {
      alignSelf: 'flex-end',
      marginTop: 10,
    },
    viewAllButtonText: {
      color: '#3498db',
      fontSize: 14,
    },
  });

export default UserDetailsComponent;
