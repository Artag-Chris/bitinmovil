import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Calendar as Calendario, CalendarList, Agenda } from 'react-native-calendars';
import React, { useState } from 'react'

 const markedDates={
  '2017-05-08': {textColor: '#43515c'},
  '2017-05-09': {textColor: '#43515c'},
  '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
  '2017-05-21': {startingDay: true, color: 'blue'},
  '2017-05-22': {endingDay: true, color: 'gray'},
  '2017-05-24': {startingDay: true, color: 'gray'},
  '2017-05-25': {color: 'gray'},
'2017-05-26': {endingDay: true, color: 'gray'}}

const Calendar = () => {

  
  return (
    <View style={styles.item}>
      <Agenda 
      showClosingKnob={true}
      // markingType={'period'}
         
         // monthFormat={'yyyy'}
       //  items={markedDates}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
       
        renderEmptyDate={() => {
          return <View />;
        }}
        // hideExtraDays={false}
        // showOnlySelectedDayItems
        
        loadItemsForMonth={(month) => {
          console.log(month);
        }}
        selected={'2017-05-08'} //necesita este campo para renderiar la agendda
      />
    </View>

   
  );

}

export default Calendar

const styles = StyleSheet.create({
  item: {
    
    flex: 1,
    
  
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});