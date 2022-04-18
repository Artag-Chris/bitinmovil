import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Calendar as Calendario, CalendarList, Agenda } from 'react-native-calendars';
import React, { useLayoutEffect } from 'react'
import {Card, Avatar} from 'react-native-paper';
import BottomNav from '../components/BottomNav';


 




const Calendar = ({navigation}) => {
  
  useLayoutEffect(() => {
    navigation.setOptions({
        title:"Calendario",
        headerBackTitle:"Atras",
        headerStyle: { backgroundColor: '#F400A2',fontSize: 20 },
        headerTitleStyle: { color: 'white' },
    })
},[])

  
  return (

    <View style={styles.item}>
     
      <Calendario
  // Initially visible month. Default = now
  current={new Date()}
 
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
 
  onDayPress={day => {
    console.log('selected day', day);
  }}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={day => {
    console.log('selected day', day);
  }}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MM'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={month => {
    console.log('month changed', month);
  }}
  // Hide month navigation arrows. Default = false
 
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  
  // Do not show days of other months in month page. Default = false
 
  // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
  
  // Hide day names. Default = false
 
  // Show week numbers to the left. Default = false
  
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month

  // Disable left arrow. Default = false
  disableArrowLeft={true}
  // Disable right arrow. Default = false
  disableArrowRight={true}
  // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
  
  renderHeader={date => {
    /*Return JSX*/
  }}
  // Enable the option to swipe between months. Default = false
 
  markingType={'period'}
  markedDates={{
    '2022-04-13': {textColor: 'red'},
    '2022-04-14': {startingDay: true, color: 'red',textColor: 'white'},
    '2022-04-15': {selected: true, endingDay: true, color: 'red', textColor: 'blue'},
    '2022-04-16': {disabled: true, startingDay: true, color: 'green', endingDay: true},
    '2022-04-23': {disabled: true, color: 'black', textColor: 'gray', startingDay: true},
    '2022-04-24': {disabled: true, color: 'black', textColor: 'gray'},
    '2022-04-25': {disabled: true, color: 'black', textColor: 'red',endingDay: true},

  }}
/>
<BottomNav  />
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