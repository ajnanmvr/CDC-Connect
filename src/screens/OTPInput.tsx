import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import InputField from '../components/InputField';
import Button from '../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppContainer';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '../hooks/ThemeProvider'; // Import the theme hook
import Screen from '../components/Screen';
import Title from '../components/Title';
import Link from '../components/Link';

type OTPInputProps = NativeStackScreenProps<RootStackParamList, 'OTPInput'>;

const OTPInputScreen = ({ navigation }: OTPInputProps) => {
  const [otp, setOTP] = useState('');
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const handleVerifyOTP = () => {
    // Implement OTP verification logic here
  };
  
  const theme = useTheme();

  return (
    <Screen>
      <View style={styles.container}>
        <Title>Enter OTP</Title>
        <Text style={styles.description}>
          An OTP has been sent to your registered phone number. Please enter the 4-digit OTP below.
        </Text>
        <InputField
          placeholder="Enter Here"
          multiline={false}
          value={otp}
          onChangeText={setOTP}
          secureTextEntry={false}
          maxLength={4} // Set the maximum length of the input to 4 characters
          keyboardType="number-pad" // Show a number keypad for input
          style={{fontSize:25,textAlign:"center",width:'50px'}}
        />
        <Button title="Verify Now" onPress={handleVerifyOTP} />
        <TouchableOpacity>
          <Text style={styles.resendLink}>
            Didn't receive the OTP? <Link>Resend OTP</Link>
          </Text>
        </TouchableOpacity>
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
  description: {
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  resendLink: {
    marginTop: 20,
  },
});

export default OTPInputScreen;
