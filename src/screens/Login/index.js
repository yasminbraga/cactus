import React from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'

export default function Login({navigation}) {

  function handleLoginClick() {
    navigation.navigate("Home")
  }

  return  (
    <View style={styles.container}>
      <Text style={styles.title}>CACTUS</Text>
      <TextInput style={styles.input} placeholder="Email"/>
      <TextInput style={styles.input} placeholder="Senha"/>
      <TouchableOpacity style={styles.button} onPress={handleLoginClick}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 28,
  },
  title: {
    fontSize: 56,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#00ff85"
  },
  input: {
    backgroundColor: "#f0f0fd",
    width: "100%",
    padding: 16,
    fontSize: 18,
    marginBottom: 12,
    borderRadius: 6
  },
  button: {
    backgroundColor: "#00ff85",
    width: "100%",
    padding: 16,
    fontSize: 18,
    marginBottom: 12,
    borderRadius: 6
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center"
  }
})