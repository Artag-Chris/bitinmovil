import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, Input, Text } from 'react-native-elements';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from '../firebaseConfig'
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const auth = getAuth();
  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Login',
      headerStyle: { backgroundColor: '#F400A2', },
      headerTitle: 'Registrate',
    });
  }, [navigation]);

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }).then(() => {
          // Profile updated!
          console.log("Profile updated!");
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
      })
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style='light' />
      <Text h3 style={{ marginBottom: 50, color: "gray" }}>
        Crea una cuenta
      </Text>
      <View style={styles.inputcontainer}>
        <Input placeholder="Nombre" type="text" value={name} onChangeText={text => setName(text)} />
        <Input placeholder="Email" type="email" value={email} onChangeText={text => setEmail(text)} />
        <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={text => setPassword(text)} />
        <Input placeholder="Imagen (Opcional)" type="text" value={imageUrl} onChangeText={text => setImageUrl(text)} onSubmitEditing={register} />
      </View>
      <Icon.Button color="#F400A2" style={styles.button} onPress={register}>
        <Text style={{ color: "white", fontSize: 25 }} >
          Registrarse
        </Text>
      </Icon.Button>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  button: {
    width: 200,
    height: 50,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#F400A2',
    //backgroundColor: '#772CE8',
    color: 'white',
  },
  inputcontainer: {
    width: 300,
  }
})