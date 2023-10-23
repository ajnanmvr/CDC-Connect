import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const IconCard = ({icon, title, value, query}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('FilteredData', {query, title})}>
      <LinearGradient
        colors={['#05BCA3', '#067869']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[styles.card, {flex: 1}]}>
        <View>
          <Text style={styles.title}>View Data of</Text>
          <Text style={[styles.title, {fontWeight: '800',fontSize:20,marginTop:-5}]}>{title}</Text>
          <Text style={styles.count}>{value} Datas Found</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={icon} style={styles.image} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 280,
    height: 150,
    borderRadius: 15,
    overflow: 'hidden',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    margin: 4,
  },
  imageContainer: {
    backgroundColor: '#fff', // set background color for the image container
    borderRadius: 50, // round the border
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40,
    // make the image perfectly round
  },
  title: {
    color: 'white',
  },
  count: {
    fontSize: 11,
    color: 'white',
    marginTop:20,
  },
});

export default IconCard;
