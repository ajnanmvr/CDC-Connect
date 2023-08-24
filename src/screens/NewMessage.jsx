import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TextInput} from 'react-native';
import InputField from '../components/InputField';
import Button from '../components/Button';

const NewMessage = () => {
  const [receivers, setReceivers] = useState([]);
  const [messageHeading, setMessageHeading] = useState('');
  const [messageBody, setMessageBody] = useState('');

  const handleSendMessage = () => {
    // Implement send message logic here
  };

  const renderReceiverItem = ({item}) => (
    <Text style={styles.receiverItem}>{item}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messaging</Text>
      <FlatList
        data={receivers}
        renderItem={renderReceiverItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.receiverList}
      />
      <InputField
        placeholder="Add Receivers"
        onChangeText={text => setReceivers([...receivers, text])}
      />
      <InputField
        placeholder="Message Heading"
        value={messageHeading}
        onChangeText={setMessageHeading}
      />
      <TextInput
        style={styles.messageBodyInput}
        multiline
        placeholder="Message Body"
        value={messageBody}
        onChangeText={setMessageBody}
      />
      <Button title="Send Message" onPress={handleSendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start', // Align content at the top
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  receiverList: {
    marginBottom: 10,
  },
  receiverItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  messageBodyInput: {
    height: 150, // Adjust the height as needed
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    textAlignVertical: 'top', // Align placeholder text to top-left corner
  },
});

export default NewMessage;
