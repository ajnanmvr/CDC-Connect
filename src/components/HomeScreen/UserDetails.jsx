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
import WelcomeUserComponent from './WelcomeUser';
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
      title: 'Govt. Service',
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
      <WelcomeUserComponent mahallu={user?.mahallu?.name} />

      <View style={styles(isDarkMode).cardContainer}>
        {!loading ? (
          <>
            {mahalluDetails && (
              <View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={styles.scrollView}>
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
                <Text
                  style={[
                    styles(isDarkMode).cardHead,
                    {
                      color: isDarkMode
                        ? darkTheme.textColor
                        : lightTheme.textColor,
                    },
                  ]}>
                  Educational Status
                </Text>

                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={styles.scrollView}>
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
                <Text
                  style={[
                    styles(isDarkMode).cardHead,
                    {
                      color: isDarkMode
                        ? darkTheme.textColor
                        : lightTheme.textColor,
                    },
                  ]}>
                  Job Details
                </Text>

                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={styles.scrollView}>
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
    cardHead: {
      fontSize: 16,
      fontWeight: '700',
      marginLeft: 14,
      marginTop: 10,
      marginBottom: 2,
    },
  });

export default UserDetailsComponent;
