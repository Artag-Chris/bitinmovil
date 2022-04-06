import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ListItem, Avatar, } from 'react-native-elements'


const CustomListItem2 = ({enterOpcion2}) => {
  return (
    
      <ListItem onPress={enterOpcion2} >
        <Avatar rounded source={{uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}} />
        <ListItem.Content >  
          <ListItem.Title style={"{fontWeight:800}"} >Quiero Tener un registro de mis formulas medicas</ListItem.Title> 
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">Registrar formula</ListItem.Subtitle> 
          </ListItem.Content>
      </ListItem>
      
  )
}

export default CustomListItem2

const styles = StyleSheet.create({})