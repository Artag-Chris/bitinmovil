import { Pressable, StyleSheet, View } from 'react-native'
import { getAuth, signOut, onAuthStateChanged  } from "firebase/auth";
import { AntDesign,} from '@expo/vector-icons';
import React from 'react'


function BottomNav({ navigation }) {


    const auth = getAuth();

    const esto = () => {
        console.log(auth)
    }
  

    const Out = () => {
        signOut(auth);
        navigation.replace("Login");
    }
      

    return (
     
        <View style={styles.navContainer}>
          <View style={styles.navBar}>
            <Pressable style={styles.iconBehave} android_ripple={{ borderless: true, radius: 50 }} >
              <AntDesign name="heart" size={30} color="white" onPress={esto} />
            </Pressable>
            <Pressable style={styles.iconBehave} android_ripple={{ borderless: true, radius: 50 }} >
              <AntDesign name="profile" size={30} color="white" />
            </Pressable>
            <Pressable style={{padding:14, }} android_ripple={{ borderless: true, radius: 50 }} >
              <AntDesign name="pluscircle" size={30} color="white" onPress={()=> navigation.navigate("addChat")} />
            </Pressable>
            <Pressable style={styles.iconBehave} android_ripple={{ borderless: true, radius: 50 }} >
              <AntDesign name="setting" size={30} color="white" />
            </Pressable>
            <Pressable style={styles.iconBehave} android_ripple={{ borderless: true, radius: 50 }} >
              <AntDesign name="logout" size={30} color="white" onPress={Out} />
            </Pressable>
          </View>
        </View>
    );
  }
export default BottomNav

const styles = StyleSheet.create({
  
    navContainer: {
      position: 'absolute',
      alignItems: 'center',
      bottom: 10,
      left: 0,
      right: 0,
    },
    navBar: {
      flexDirection: 'row',
      backgroundColor: '#F400A2',
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
  