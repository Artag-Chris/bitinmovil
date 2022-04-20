import { StyleSheet, View, SafeAreaView, ScrollView, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState, useLayoutEffect } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { StatusBar } from 'expo-status-bar';
import { Text, Dialog, Button, CheckBox, Avatar } from 'react-native-elements';
import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from 'date-fns';


const Opcion3 = ({ navigation }) => {
    const [name, setName] = useState('');
    const [date,setDate] = useState(new Date())
    const [email, setEmail] = useState('scrist');
    const [input, setInput] = useState('');
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState(1);
    const [checked2, setChecked2] = useState(1);
    const [interruptor, setInterruptor] = useState(false);
    const [interruptor2, setInterruptor2] = useState(false);
    const [interruptor3, setInterruptor3] = useState(false);
    const [mode,setMode] = useState("date");
    const [primera, setPrimera] = useState();
    const [segunda, setSegunda] = useState();
    const [tercera, setTercera] = useState();
    const [cuarta, setCuarta] = useState();
    const auth = getAuth();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Registra una alarma',
            headerStyle: { backgroundColor: '#772CE8', fontSize: 30 },
            headerTitleStyle: { color: 'white' },
        })
    }, [])
    //aqui toca cerrar el showMode guardar las fechas en el estado 
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        let tempDate =new Date(currentDate);
        let fDate = tempDate.getFullYear() + "-" + (tempDate.getMonth() + 1) + "-" + tempDate.getDate();
        let Ftime = tempDate.getHours() + ":" + tempDate.getMinutes() + ":" + tempDate.getSeconds();
        const dateFormat = format(currentDate, 'yyyy-MM-dd');
        setTercera(dateFormat);
        setInterruptor3(true);
        setShow(false);   
       
    };   
    
    const showCalendar = () => {  
        setShow(true);
        setMode("date"); 
    }

    useEffect(() => {
        if (auth?.currentUser) {
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
            return onAuthStateChanged
        }
    }, [])


    const guardar = async () => {
        const docRef = doc(collection(db, "registros"),);
        await setDoc(docRef, {
            email,
            nombreMedicamento: primera,
            dosisMedicamento :segunda,
            fechaQueVence: tercera, 
            nombreusuario: name, 
            name:"registro de alarma",
        }, { merge: true });
    }



  
    const primerarespuesta = () => {
        Keyboard.dismiss(); 
        setPrimera(input);
        setTimeout(() => {
            setInterruptor(true);

        }, 1000);

    }
    const segundaRespuesta = () => {
        Keyboard.dismiss();
        setSegunda(input);
        setTimeout(() => {
            setInterruptor2(true);
        }, 1000);
    }
    const toggleDialog = () => {
        setVisible(!visible);
    };
    const toggleDialog2 = () => {
        setVisible2(!visible2);
    };
    const terceraRespuesta = () => {
        Keyboard.dismiss();
        setTercera(input);
        setTimeout(() => {
            setInterruptor3(true);
        }, 1000);
    }
    

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar style="light" />
            <KeyboardAvoidingView

                style={styles.container}
                keyboardVerticalOffset={90}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <>
                        <ScrollView>
                            <View style={styles.reciever}>
                                <Avatar position="absolute" bottom={-20} right={-5} rounded size={45} source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }} />
                                <Text  > Hola ¿como estas? </Text>
                            </View>
                            <View style={styles.reciever}>
                                <Avatar position="absolute" bottom={-20} right={-5} rounded size={45} source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }} />
                                <Text  >¿Cual es el nombre de tu medicamento? </Text>
                            </View>
                            <View style={styles.sender }>
                                <Avatar position="absolute" bottom={-20} left={-5} rounded size={45} source={{ uri: auth?.currentUser.photoURL || 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
                                <TextInput style={styles.input} onSubmitEditing={primerarespuesta}  placeholder="Escribe el nombre del medicamento" placeholderTextColor="white" onChangeText={(text) => setInput(text)} />
                            </View>

                            
                            {interruptor ? <View style={styles.reciever}>
                                <Avatar position="absolute" bottom={-20} right={-5} rounded size={45} source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }} />
                                <Text  > Escribe la Dosis </Text>
                            </View>: null}

                            {interruptor ?  <View style={styles.sender }>
                                <Avatar position="absolute" bottom={-20} left={-5} rounded size={45} source={{ uri: auth?.currentUser.photoURL || 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
                                <TextInput style={styles.input} onSubmitEditing={segundaRespuesta}  placeholder="Cuantos miligramos?" placeholderTextColor="white" onChangeText={(text) => setInput(text)} />
                            </View> : null}
                            {interruptor2 ? <View style={styles.reciever}>
                                <Avatar position="absolute" bottom={-20} right={-5} rounded size={45} source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }} />
                                <Text  > Escoje una opcion </Text>
                            </View>: null}
                            {interruptor2 ? <View style={styles.sender }>
                                <Avatar position="absolute" bottom={-20} left={-5} rounded size={45} source={{ uri: auth?.currentUser.photoURL || 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
                                <Button title="escoje la fecha" onPress={showCalendar}  /> 
                            </View> : null}
                            {show &&(<DateTimePicker
                                
                                textId="date_picker_dialog_title"
                                value={date}
                                mode={mode}
                                display="default" 
                                onChange={onChange} 

                                />)} 
                  
                            <Dialog 
                                isVisible={visible}  
                                onBackdropPress={toggleDialog}
                            >
                                <Dialog.Title title="Select Preference" />
                                {['Option 1', 'Option 2', 'Option 3'].map((l, i) => (
                                    <CheckBox
                                        key={i}
                                        title={l}
                                        containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                                        checkedIcon="dot-circle-o"
                                        uncheckedIcon="circle-o"
                                        checked={checked === i + 1}
                                        onPress={() => setChecked(i + 1)}
                                    />
                                ))}

                                <Dialog.Actions>
                                    <Dialog.Button
                                        title="CONFIRM"
                                        onPress={() => {
                                            console.log(`Option ${checked} was selected!`);
                                            toggleDialog();
                                            setTercera(checked);
                                            setInterruptor3(true);
                                        }}
                                    />
                                    <Dialog.Button title="CANCEL" onPress={toggleDialog} />
                                </Dialog.Actions>
                            </Dialog>
                            {interruptor3 ? <View style={styles.reciever}>
                                <Avatar position="absolute" bottom={-20} right={-5} rounded size={45} source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }} />
                                <Text  > ¿Registrar formula? </Text>
                            </View> : null}
                            {interruptor3 ?<View style={styles.sender }>
                                <Avatar position="absolute" bottom={-20} left={-5} rounded size={45} source={{ uri: auth?.currentUser.photoURL || 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
                                <Text onPress={toggleDialog2}  > ¿Guardar o Cancelar? </Text>
                            </View> : null}
                            
                            <Dialog
                                isVisible={visible2}
                                onBackdropPress={toggleDialog2}
                            >
                                <Dialog.Title title="guardar info?" />
                                {['si', "no"].map((l, i) => (
                                    <CheckBox
                                        key={i}
                                        title={l}
                                        containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                                        checkedIcon="dot-circle-o"
                                        uncheckedIcon="circle-o"
                                        checked={checked2 === i + 1}
                                        onPress={() => setChecked2(i + 1)}
                                    />
                                ))}

                                <Dialog.Actions>
                                    <Dialog.Button
                                        title="CONFIRM"
                                        onPress={() => {
                                            console.log(`Option ${checked2} was selected!`);
                                            toggleDialog2();
                                            setCuarta(checked2);
                                            if (checked2 === 1) {
                                                console.log("si fue seleccionado haga tal cosa");
                                                console.log("guardando info");
                                                guardar();
                                                navigation.navigate('Home');
                                            }
                                            if (checked2 === 2) {
                                                console.log("no fue seleccionado haga tal cosa");
                                                navigation.navigate('addChat');
                                            }

                                        }}
                                    />
                                    <Dialog.Button title="CANCEL" onPress={toggleDialog2} />
                                </Dialog.Actions>
                            </Dialog>
                        </ScrollView>


                    </>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Opcion3

const styles = StyleSheet.create({
    container: { flex: 1 },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 15,
    },
    input: {
    

    }, reciever: {
        padding: 15,
        backgroundColor: "#ECECEC",
        alignSelf: "flex-end",
        borderRadius: 20,
        marginRight: 15,
        marginBottom: 20,
        maxWidth: "80%",
        position: "relative",
    },
    sender: {
        padding: 15,
        backgroundColor: "#772CE8",
        alignSelf: "flex-start",
        borderRadius: 20,
        margin: 15,
        maxWidth: "80%",
        position: "relative",
        color: "white",
    }, button: {},
    placeholder: {
        color: "white",
    }
})