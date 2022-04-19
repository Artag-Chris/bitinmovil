//import "react-native-gesture-handler";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import AddChat from './screens/AddChat';
import Opcion1 from './screens/Opcion1';
import Opcion2 from './screens/Opcion2';
import Opcion3 from './screens/Opcion3';
import Calendar from './screens/Calendar';

const Stack = createNativeStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: '#2c6BED', title: 'BitinMovil' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white'
};

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={globalScreenOptions} initialouteName="Home" >
        <Stack.Screen options={{ }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ }} name="Register" component={RegisterScreen} />
        <Stack.Screen options={{ }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ }} name="addChat" component={AddChat} />
        <Stack.Screen options={{ }} name="Opcion1" component={Opcion1} />
        <Stack.Screen options={{ }} name="Opcion2" component={Opcion2} />
        <Stack.Screen options={{ }} name="Opcion3" component={Opcion3} />
        <Stack.Screen options={{ }} name="calendar" component={Calendar} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

