import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { Avatar, Button } from 'react-native-elements';
import CustomListItem from '../components/CustomListItem';
import CustomListItem2 from '../components/CustomListItem2';
import CustomListItem3 from '../components/CustomListItem3';
import { AntDesign, SimpleLineIcons,Octicons } from '@expo/vector-icons';
import { db as DB } from "../firebaseConfig";
import { StatusBar } from 'expo-status-bar';




//aqui van las listas de los chats o datos que vamos a pedir al cliente
//la funcion de crear varios chats la desactivare pero quedara como ejemplo

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');

  const db = DB


  //console.log("user", user);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 10,marginRight:90 }}>
          <TouchableOpacity onPress={Out} activeOpacity={0.5} >
            <Avatar rounded size={45} source={{ uri: auth?.currentUser.photoURL || 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 80,
          marginRight: 20
        }}>
          <TouchableOpacity activeOpacity={0.5} >
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} >
            <SimpleLineIcons name="pencil" size={24} color="black" onPress={() => navigation.navigate("addChat")} />
          </TouchableOpacity>
        </View>
      ),
      headerTitle: 'Home',
      headerStyle: { backgroundColor: 'rgb(178,44,95)',fontSize: 20 },
      headerTitleStyle: { color: 'white' },
    });
  }, [navigation])

  //este hook es para traer los datos de la base de datos 
  useEffect(() => {


    ;
  }, [])


  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setName(user.displayName);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  const Out = () => {
    signOut(auth).then(() => {
      console.log("Sign-out successful.")
      navigation.replace('Login')
    }).catch((error) => {
      // An error happened.
    });
  }
  const enterOpcion1 = (name) => {
    navigation.navigate("Opcion1", { id: "1", key: "1" })
  }
  const enterOpcion2 = () => {
    navigation.navigate("Opcion2", { id: "2", key: "2" })
  }
  const enterOpcion3 = () => {
    navigation.navigate("Opcion3")
  }
  //por algun motivo solo se puede ir a opcion 1 a este modo
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />
      <ScrollView >
        <View style={styles.container}>
        <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 20,color:"white"}}>¿Que podemos hacer hoy por ti</Text>
        <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 10,color:"white" }}>{name ? name : "cargando"} ?</Text>
        </View>
        <TouchableOpacity >
          <CustomListItem enterOpcion1={enterOpcion1} name={name} />
        </TouchableOpacity>
        <TouchableOpacity >
          <CustomListItem2 enterOpcion2={enterOpcion2} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginBottom: 300 }} >
          <CustomListItem3 enterOpcion3={enterOpcion3} />
        </TouchableOpacity  >
        <View style={styles.navContainer}>
          <View style={styles.navBar}>
            <Pressable style={styles.iconBehave} android_ripple={{ borderless: true, radius: 50 }} >
              <AntDesign name="heart" size={30} color="gray" />
            </Pressable>
            <Pressable style={styles.iconBehave} android_ripple={{ borderless: true, radius: 50 }} >
              <AntDesign name="profile" size={30} color="gray" />
            </Pressable>
            <Pressable style={{padding:14, }} android_ripple={{ borderless: true, radius: 50 }} >
              <AntDesign name="pluscircle" size={30} color="gray" onPress={()=> navigation.navigate("calendar")} />
            </Pressable>
            <Pressable style={styles.iconBehave} android_ripple={{ borderless: true, radius: 50 }} >
              <AntDesign name="setting" size={30} color="gray" />
            </Pressable>
            <Pressable style={styles.iconBehave} android_ripple={{ borderless: true, radius: 50 }} >
              <AntDesign name="logout" size={30} color="gray" />
            </Pressable>
          </View>
        </View>


      </ScrollView>
    </SafeAreaView >
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(178,44,95)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    
  },
  navContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: 'rgb(178,44,95)',
    width: '100%',
    justifyContent: "space-evenly",
    borderRadius: 40,
    shadowColor: "#7f5df0",
    shadowOffset: {
      width: 0,
      height: 10,
    }, shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  iconBehave: {
    padding: 14,
  }, shadow: {
    shadowColor: "#7f5df0",
    shadowOffset: {
      width: 0,
      height: 10,
    }, shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }

})