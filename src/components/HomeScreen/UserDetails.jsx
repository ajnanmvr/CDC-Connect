import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useAppearance} from '../../contexts/AppearenceContext';
import {useUser} from '../../contexts/UserContext';
import {darkTheme, lightTheme} from '../../styles/themes';
import Axios from '../../utils/Axios';
import IconCard from '../IconCard';
import LatestEntriesComponent from './LatestEntries';

const UserDetailsComponent = ({isLoading, entries}) => {
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
  const data1 = [
    {
      icon: require('../../media/icons/list.png'),
      title: 'Entries',
      value: mahalluDetails?.totalEntries,
    },
    {
      icon: require('../../media/icons/male-user.png'),
      query: 'gender=male',
      title: 'Male',
      value: mahalluDetails?.maleCount,
    },
    {
      icon: require('../../media/icons/woman-avatar.png'),
      title: 'Female',
      value: mahalluDetails?.femaleCount,
      query: 'gender=female',
    },
  ];
  const data2 = [
    // {
    //   title: 'Married',
    //   value: mahalluDetails?.marriedCount,
    //   query: 'maritalStatus=Married',
    // },
    // {
    //   title: 'Unmarried',
    //   value: mahalluDetails?.unmarriedCount,
    //   query: 'maritalStatus=Unmarried',
    // },
    // {
    //   title: 'Widow',
    //   value: mahalluDetails?.widowCount,
    //   query: 'maritalStatus=Widow/er',
    // },
    {
      title: 'Science',
      icon: require('../../media/icons/flask.png'),
      value: mahalluDetails?.scienceCount,
      query: 'educationalSubject=Science',
    },
    {
      title: 'Humanities',
      value: mahalluDetails?.humanitiesCount,
      query: 'educationalSubject=Humanities',
      icon: require('../../media/icons/humanity.png'),
    },
    {
      title: 'Commerce',
      value: mahalluDetails?.commerceCount,
      query: 'educationalSubject=Commerce',
      icon: require('../../media/icons/computer.png'),
    },
  ];
  const data3 = [
    {
      title: 'Government Service',
      value: mahalluDetails?.govtServiceCount,
      query: 'jobType=Government Service',
      icon: require('../../media/icons/development.png'),
    },
    // {
    //   title: 'Private Sector',
    //   value: mahalluDetails?.privateSectorCount,
    //   query: 'jobType=Private Sector',
    // },
    // {
    //   title: 'Daily Wage',
    //   value: mahalluDetails?.dailyWageCount,
    //   query: 'jobType=Daily Wage',
    // },
    {
      title: 'Doctor',
      value: mahalluDetails?.doctorCount,
      query: 'profession=Doctor',
      icon: require('../../media/icons/doctor.png'),
    },
    {
      title: 'Teacher',
      value: mahalluDetails?.teacherCount,
      query: 'profession=Teacher',
      icon: require('../../media/icons/teacher.png'),
    },
  ];

  useEffect(() => {
    getMahallu();
  }, []);
  return (
    <View>
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
                <Text style={styles(isDarkMode).cardHead}>Details </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                  {data1.map((item, index) => (
                    <View key={index} style={styles.cardContainer}>
                      <IconCard
                        title={item.title}
                        icon={item.icon}
                        value={item.value}
                        query={item.query}
                      />
                    </View>
                  ))}
                </ScrollView>
                <LatestEntriesComponent data={entries} loading={isLoading} />
                <Text style={styles(isDarkMode).cardHead}>
                  Educational Status
                </Text>

                <ScrollView horizontal={true}showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                  {data2.map((item, index) => (
                    <View key={index} style={styles.cardContainer}>
                      <IconCard
                        title={item.title}
                        icon={item.icon}
                        value={item.value}
                        query={item.query}
                      />
                    </View>
                  ))}
                </ScrollView>
                <Text style={styles(isDarkMode).cardHead}>Job Details</Text>

                <ScrollView horizontal={true}showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                  {data3.map((item, index) => (
                    <View key={index} style={styles.cardContainer}>
                      <IconCard
                        title={item.title}
                        icon={item.icon}
                        value={item.value}
                        query={item.query}
                      />
                    </View>
                  ))}
                </ScrollView>
              </View>
            )}
          </>
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </View>
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
      marginVertical:10,
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
    cardHead: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 10,
      color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
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
    scrollView: {
      height: 200, // Adjust the height as per your requirement
    },
    cardContainer: {
      margin: 12,
    },
  });

export default UserDetailsComponent;
