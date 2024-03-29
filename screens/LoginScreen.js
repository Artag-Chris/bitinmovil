import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState, useLayoutEffect } from 'react'
import { Image, Input, Button } from 'react-native-elements'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, } from "firebase/auth";
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

WebBrowser.maybeCompleteAuthSession();

//hay que pasar los props a otras pantallas
//el objeto dque devolvera google deberemos guardarlo con la misma estructura de userInfo



const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [accessToken, setAccessToken] = useState("");
    const [userInfo, setUserInfo] = useState("");
    const [message, setMessage] = useState(""); //para escribir mensajes de error
    const auth = getAuth();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Bienvenido',
            headerStyle: { backgroundColor: '#772CE8', },


        })
    }, [])

    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId: "708800781307-6lt53u6shle42hmr5mc2lh55fespiprk.apps.googleusercontent.com",
        androidClientId: "708800781307-bm5l4h4f2g2stp7kv1bh7gtq992v7u46.apps.googleusercontent.com",
        expoClientId: "ff92d0ba-bec3-4736-82df-29440e601afb",
        webClientId: "708800781307-7grqnk6hb2s51kcebpfjt2i0c12sth91.apps.googleusercontent.com"
    })
    useEffect(() => {
        setMessage(JSON.stringify(response));
        if (response?.type === "success") {
            setAccessToken(response.authentication.accessToken);
            setUserInfo(response.user);
        }
    }, [response]);

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                setUserInfo(userCredential.user);
                console.log(userCredential.user.email);


                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log("User is signed in:", user);
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUserInfo(user);
                const uid = user.uid;
                // console.log("User uid:", uid);

                navigation.replace('Home');
                // ...
            } else {
                // User is signed out
                // ...
            }
            return unsubscribe;
        });

    }, [])
    async function getUserData() {
        let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
            headers: { Authorization: `Bearer ${accessToken}` }
        });

        userInfoResponse.json().then(data => {
            setUserInfo(data);
        });
    }


    return (

        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar backgroundColor='#772CE8' />

            <Image
                source={require('../assets/logo.png')}
                style={{ width: 200, height: 200, }}
            />
            <View style={styles.inputContainer} >
                <Input placeholder="Email" type="email" value={email} onChangeText={text => setEmail(text)} />
                <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={text => setPassword(text)} />

            </View>

            <Icon.Button  color="rgb(223,87,208)" style={styles.button} onPress={ signIn}>
                <Text style={{color:"rgb(223,87,208)",fontSize:20}} >
                    Login 
                </Text>
            </Icon.Button>
            <Icon.Button  color="rgb(223,87,208)" style={styles.button2} onPress={()=>navigation.navigate("Register")}>
                <Text style={{color:"rgb(223,87,208)",fontSize:20}} >
                    Registrarte  
                </Text>
            </Icon.Button>
            <Icon.Button name="google" color="rgb(223,87,208)" style={styles.button} onPress={accessToken ? getUserData : () => { promptAsync({ useProxy: false, showInRecents: true }) }}>
                <Text style={{color:"rgb(223,87,208)",fontSize:20}} >
                    Login with Google
                </Text>
            </Icon.Button>
            
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>

    )
}

export default LoginScreen

const styles = StyleSheet.create({
    inputContainer: {
        width: 200,
    },
    button: {
        width: 200,
        height: 50,
        alignContent: 'center',
        justifyContent: 'center',
        //backgroundColor: 'rgb(223,87,208)',
        backgroundColor: '#772CE8',
        color: 'white',


    }, button2: {
        width: 200,
        
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
       
        //backgroundColor: 'rgb(223,87,208)',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    }
})