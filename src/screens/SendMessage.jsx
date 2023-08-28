import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
// ... (other imports)

import InputField from "../components/InputField"
import Button from "../components/Button"
import { useNavigation } from "@react-navigation/native"
import { useTheme } from "../hooks/ThemeProvider" // Import the theme hook
import Title from "../components/Title"

const SendMessageScreen = ({ navigation }) => {
  const [recipients, setRecipients] = useState("")
  const [message, setMessage] = useState("")
  useNavigation()

  const handleSendMessage = () => {
    // Implement send message logic here
  }

  const theme = useTheme()

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
          // Apply the style to control the message input
          style={styles.messageInput}
          multiline
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  messageInput: {
    width: "100%",
    height: 150,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10
  }
})

export default SendMessageScreen
