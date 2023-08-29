import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const LatestEntriesComponent = ({ entries }) => {
  return (
    <View style={styles.latestEntriesContainer}>
      <Text style={styles.latestEntriesHeader}>Latest Entries</Text>
      <FlatList
        data={entries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.entryItem}>
            <Text style={styles.entryTitle}>{item.title}</Text>
            <Text style={styles.entryDetails}>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.viewAllButton} onPress={() => console.log('View all entries')}>
        <Text style={styles.viewAllButtonText}>View All Entries</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  latestEntriesContainer: {
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  latestEntriesHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  entryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  entryTitle: {
    fontSize: 16,
  },
  entryDetails: {
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

export default LatestEntriesComponent;
