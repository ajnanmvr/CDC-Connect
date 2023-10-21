import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const IconCard = ({icon, title, value, query}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('FilteredData', {query, title})}
      style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={icon} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>({value})</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 160,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F6F9',
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  count: {
    fontSize: 14,
    color: '#000',
  },
});

export default IconCard;
