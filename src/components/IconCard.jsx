import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const IconCard = ({iconName, text, title}) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
     
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#5C8374', // Light Green background color
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  iconContainer: {
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default IconCard;
