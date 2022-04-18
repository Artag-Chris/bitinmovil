import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { Avatar} from 'react-native-elements';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { db  } from "../firebaseConfig";
import { StatusBar } from 'expo-status-bar';
import { Agenda } from 'react-native-calendars';
import { collection, query, where, getDocs } from "firebase/firestore";
import {Card, Avatar as Ava} from 'react-native-paper';
import BottomNav from '../components/BottomNav';



const HomeScreen = ({ navigation }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ordenes, setOrdenes] = useState({});

  

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
            <AntDesign name="camerao" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} >
            <SimpleLineIcons name="pencil" size={24} color="white" onPress={() => navigation.navigate("addChat")} />
          </TouchableOpacity>
        </View>
      ),
      headerTitle: 'Home',
      headerStyle: { backgroundColor: '#F400A2',fontSize: 20 },
      headerTitleStyle: { color: 'white' },
    });
  }, [navigation])

  


  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setName(user.displayName);
      setEmail(user.email);
      
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
 
useEffect(() => {
  async function getDate() {
    const q = query(collection(db, "registros"), where("email", "==", email));
  
    const querySnapshot = await getDocs(q);
    let ayudante= []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data())
      let { dosisMedicamento,fechaQueVence,name,Nombremedicamento,nombreusuariorder}=doc.data()
      
      ayudante.push({ [fechaQueVence]:[{"name":dosisMedicamento,"aquello":name,Nombremedicamento,nombreusuariorder,fechaQueVence}]})
        
    });
    let ayudante2 = ayudante.reduce((acc, curr) => {
     const{fechaQueVence,...rest}=curr
     for (let key in curr) {
        if (acc[key]) {
         console.log("here")
        } else {
          acc[key] = curr[key];
        }
      }
      return acc;
    }, {});
    setOrdenes(ayudante2);
  };
 return getDate();
}, [navigation.navigate]);


const renderItem = (item) => {
  return (
    <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
      <Card>
        <Card.Content>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>{item.name} </Text>
            <Text>{item.fechaQueVence}</Text>
            <Ava.Text label="J" />
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

  
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: "white",position:"relative" }}>
      <StatusBar style="light" />
      <ScrollView >
        <View style={styles.container}>
        <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 20,color:"white"}}>¿Que podemos hacer hoy por ti</Text>
        <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 10,color:"white" }}>{name ? name : "cargando"} ?</Text>
        </View>
        <View style={{flex:1, }}>
        {ordenes?<Agenda loadItemsForMonth={(month) => {
          console.log(month);}}
          items={ordenes}
          renderItem={renderItem}
          onDayPress={(day) => {
            console.log('selected day', day);
          }}
          pastScrollRange={12}
          futureScrollRange={12}
        
       /> : <Text>cargando...</Text>}
        </View>
      </ScrollView>
      <BottomNav navigation={navigation} />
      
    </SafeAreaView >
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F400A2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    
  },
  navContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 10,
    left: 0,
    right: 0,
    
    
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
