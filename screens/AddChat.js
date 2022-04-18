import { SafeAreaView, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React,{useLayoutEffect,useState} from 'react'
import CustomListItem from '../components/CustomListItem';
import CustomListItem2 from '../components/CustomListItem2';
import CustomListItem3 from '../components/CustomListItem3';

import { StatusBar } from 'expo-status-bar';
import BottomNav from '../components/BottomNav';





const AddChat = ({navigation}) => {
   
    const [name, setName] = useState('');
    useLayoutEffect(() => {
        navigation.setOptions({
            title:"Registros",
            headerBackTitle:"Atras",
            headerStyle: { backgroundColor: '#F400A2',fontSize: 20 },
            headerTitleStyle: { color: 'white' },
        })
    },[])
    const enterOpcion1 = (name) => {
      navigation.navigate("Opcion1", { id: "1", key: "1" })
    }
    const enterOpcion2 = () => {
      navigation.navigate("Opcion2", { id: "2", key: "2" })
    }
    const enterOpcion3 = () => {
      navigation.navigate("Opcion3")
    }
 

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
    <StatusBar style="light" />
    <ScrollView >
      <View style={styles.container}>
      <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 20,color:"white"}}>Selecciona una chat para crear un nuevo registro</Text>
     
      </View>
      <TouchableOpacity >
        <CustomListItem enterOpcion1={enterOpcion1} name={name} />
      </TouchableOpacity>
      <TouchableOpacity >
        <CustomListItem2 enterOpcion2={enterOpcion2} />
      </TouchableOpacity>
      <TouchableOpacity  >
        <CustomListItem3 enterOpcion3={enterOpcion3} />
      </TouchableOpacity  >
     
     


    </ScrollView>
    <BottomNav  />
  </SafeAreaView >
     
  )
}

export default AddChat

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