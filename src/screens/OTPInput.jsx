import React, { useState } from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

import InputField from "../components/InputField"
import Button from "../components/Button"
import { useNavigation } from "@react-navigation/native"
import Title from "../components/Title"
import Link from "../components/Link"

const OTPInputScreen = ({ navigation }) => {
  const [otp, setOTP] = useState("")
  useNavigation()

  const handleVerifyOTP = () => {
    // Implement OTP verification logic here
  }


  return (
      <View style={styles.container}>
        <Title>Enter OTP</Title>
        <Text style={styles.description}>
          An OTP has been sent to your registered phone number. Please enter the
          4-digit OTP below.
        </Text>
        <InputField
          placeholder="Enter Here"
          multiline={false}
          value={otp}
          onChangeText={setOTP}
          secureTextEntry={false}
          // Set the maximum length of the input to 4 characters
          maxLength={4}
          // Show a number keypad for input
          keyboardType="number-pad"
          style={{ fontSize: 25, textAlign: "center", width: "50px" }}
        />
        <Button title="Verify Now" onPress={handleVerifyOTP} />
        <TouchableOpacity>
          <Text style={styles.resendLink}>
            Didn't receive the OTP? <Link>Resend OTP</Link>
          </Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  description: {
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 20
  },
  resendLink: {
    marginTop: 20
  }
})

export default OTPInputScreen
