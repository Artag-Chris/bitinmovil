import { StyleSheet, Text, View } from 'react-native'
import React,{useLayoutEffect,useState} from 'react'
import { Input,Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { doc, setDoc } from "firebase/firestore";
import { db as DB} from "../firebaseConfig";



//creo esta parte para que me queda mas facil ver como se crean los registros en forma de chats se podran crear nuevos registros
//mas facilmente y personalizar los chats 

const AddChat = ({navigation}) => {
    const db= DB
    const [input, setInput] = useState('')
    useLayoutEffect(() => {
        navigation.setOptions({
            title:"creacion rapida",
            headerBackTitle:"Atras"
        })
    },[])
    const crearChat= async()=>{
        //funcion para crear chats se quedara en stanby 
        //setdoc crea o modifica un archivo no agrega a el 
        await setDoc(doc(db, "chats", "personal"), {
            //db es la base de datos de firebase
            //chats es la coleccion de chats
            //personal es el nombre del  chat este parametro cambia donde se va a guardar la info
            //tenerloo en mente cuando creemos los formularios
            name: input,
            state: "CA",
            country: "USA"
          }).then(console.log("Chat creado : "+input))
          .then(navigation.navigate("Home"));
    }

  return (
    <View style={styles.container} >
      <Input placeholder="Nombre del registro" value={input} onChangeText={(text)=>setInput(text) }
      leftIcon={
          <Icon name="wechat" size={24} type="antdesign" color="black" />
      } />
        <Button title="Crear" onPress={crearChat } />
    </View>
  )
}

export default AddChat

const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        padding:30,
        height:"100%"
    }
})