import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import {ListItem, Avatar, } from 'react-native-elements'


const CustomListItem = ({enterOpcion1,key}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "gray" }}>
      <ListItem onPress={enterOpcion1} id={key} >
        <Avatar rounded source={{uri: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80'}} />
        <ListItem.Content >  
          <ListItem.Title style={"{fontWeight:800}"} >Quiero llevar las horas de mis medicamentos</ListItem.Title> 
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">Registrar medicamento</ListItem.Subtitle> 
          </ListItem.Content>
      </ListItem>
    </SafeAreaView>
      
  )
}

export default CustomListItem

const styles = StyleSheet.create({})