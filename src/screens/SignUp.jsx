import React, { useState } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import Button from "../components/Button"
import InputField from "../components/InputField"
import Link from "../components/Link"
import Title from "../components/Title"

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSignUp = () => {
    // Implement sign-up logic here
  }


  return (
 
      <View style={styles.container}>
        <Image style={styles.avatar} source={require("../media/avatar.png")} />
        <Title>Sign Up</Title>
        <InputField
          placeholder="Name"
          value={name}
          onChangeText={setName}
          secureTextEntry={false}
          maxLength={undefined}
          keyboardType="default"
          multiline={false}
          style
        />
        <InputField
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          secureTextEntry={false}
          maxLength={undefined}
          keyboardType="default"
          multiline={false}
          style
        />
        <InputField
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          secureTextEntry={false}
          maxLength={10}
          keyboardType="number-pad"
          multiline={false}
          style
        />
        <InputField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          maxLength={undefined}
          keyboardType="default"
          multiline={false}
          style
        />
        <InputField
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          maxLength={undefined}
          multiline={false}
          keyboardType="default"
          style
        />
        <Button title="Sign Up" onPress={handleSignUp} />
        <TouchableOpacity onPress={() => navigation.replace("Login")}>
          <Text style={styles.signInLink}>
            Already have an account? <Link>Log In</Link>
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
  avatar: {
    height: 110,
    width: 110
  },
  signInLink: {
    marginTop: 20
  }
})

export default SignUpScreen
