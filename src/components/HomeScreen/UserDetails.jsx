import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDetailsComponent = ({ area }) => {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.detailsHeader}>
        <Text style={styles.detailsHeaderText}>Your Area</Text>
      </View>
      <View style={styles.detailsContent}>
        <Text style={styles.detailsText}>{area}</Text>
        <Text style={styles.extraDetails}>Check out the latest updates and entries in your area!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: '#F1F1F1',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  detailsHeader: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 10,
    marginBottom: 10,
  },
  detailsHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsContent: {},
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
