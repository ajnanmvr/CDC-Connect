import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Title from '../components/Title';

const SendMessageScreen = ({navigation}) => {
  const [recipients, setRecipients] = useState('');
  const [message, setMessage] = useState('');
  useNavigation();

  const handleSendMessage = () => {
    // Implement send message logic here
  };

  return (
    <View style={styles.container}>
      <Title>Send Message</Title>
      <InputField
        placeholder="Recipients"
        value={recipients}
        onChangeText={setRecipients}
        secureTextEntry={false}
      />
      <InputField
        placeholder={null}
        value={message}
        onChangeText={setMessage}
        secureTextEntry={false}
        style={styles.messageInput}
        multiline
      />
      <Button title="Send" onPress={handleSendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageInput: {
    width: '100%',
    height: 150,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
  },
});

export default SendMessageScreen;
