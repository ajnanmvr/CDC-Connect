import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
// ... (other imports)

import InputField from '../components/InputField';
import Button from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../AppContainer';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useTheme} from '../hooks/ThemeProvider'; // Import the theme hook
import Screen from '../components/Screen';
import Title from '../components/Title';

type SendMessageProps = NativeStackScreenProps<
  RootStackParamList,
  'SendMessage'
>;

const SendMessageScreen = ({navigation}: SendMessageProps) => {
  const [recipients, setRecipients] = useState('');
  const [message, setMessage] = useState('');
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSendMessage = () => {
    // Implement send message logic here
  };

  const theme = useTheme();

  return (
    <Screen>
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
          style={styles.messageInput} // Apply the style to control the message input
          multiline
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </Screen>
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
