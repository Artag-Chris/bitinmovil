import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ListItem, Avatar, } from 'react-native-elements'


const CustomListItem3 = ({enterOpcion3}) => {
  return (
      <View   >
      <ListItem onPress={enterOpcion3}   >
        <Avatar rounded source={{uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}} />
        <ListItem.Content  >  
          <ListItem.Title style={"{fontWeight:800}"} >Quiero Crear una alarma </ListItem.Title> 
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">Registrar alarma</ListItem.Subtitle> 
          </ListItem.Content>
      </ListItem>
      </View>
      
  )
}

export default CustomListItem3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white'
  }
})