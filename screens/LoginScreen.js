import {Image , KeyboardAvoidingView, TouchableOpacity, StyleSheet,TextInput, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {auth} from '../firebase.js'
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

  // Check for user status

const LoginScreen = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigation= useNavigation()

  /*  function sc(){
        useEffect(() =>{
            const unsubscribe= auth.onAuthStateChanged(user => {
                if(user){
                   navigation.navigate("HomeScreen")
                   
                }
                return unsubscribe
            })
            
        },[])
    }*/

    /*const handleSignUp = () => {
        
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials =>{
            const user=userCredentials.user;
            alert("Successfully Registered ");
            navigation.navigate("HomeScreen")
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }
        
            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
        
            console.error(error);
          });
        }*/
        const handleLogin =() =>{
            auth
            .signInWithEmailAndPassword(email,password)
            .then(userCredentials =>{
                const user=userCredentials.user;
                //alert("Logged in ");
                navigation.navigate("HomeScreen")
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                  console.log('That email address is already in use!');
                }
            
                if (error.code === 'auth/invalid-email') {
                  console.log('That email address is invalid!');
                }
            
                console.error(error);
              });
        }
  return (
    
   <KeyboardAvoidingView
     style={styles.container}
    behaviour="padding"  
   >
    
    <View style ={styles.inputContainer}>
        <Text style={styles.head}>Drone Detection Alert System</Text>
        <Image  source={require('../images/bg.jpg')} style={styles.Image} ></Image>
        <TextInput
        placeholder='Enter Your Email Address Here'
        value={email}
        onChangeText={text =>setEmail(text)}
        style={styles.input}
        ></TextInput>
        <TextInput
        placeholder='Enter Your Password Here'
        value={password}
        onChangeText={text =>setPassword(text)}
        style={styles.input}
        secureTextEntry
        ></TextInput>
        
    </View>
    <View style={styles.butttonContainer}>
    
         <TouchableOpacity
        onPress={handleLogin }
       /* onPress={() => {
        handleLogin}} */
        style={styles.button}
        >
            <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
       onPress={() => {
        navigation.navigate("SignupScreen")}} 
        style={styles.button2}
        >
            <Text style={styles.buttonOutlineText}>Sign Up</Text>
        </TouchableOpacity>
       
    </View>
    
   </KeyboardAvoidingView>
    
  );

  
}

export default LoginScreen

const styles = StyleSheet.create({

    container:{
       
        backgroundColor:'#a7bed3',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    inputContainer:{
        width:'80%'
    },
    head:{
        textAlign:'center',
        fontSize:35,
        fontStyle:'italic',
        fontWeight:'bold',
        fontFamily:'monospace'
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:'10%',
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,

    },
    butttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,

    },
    button:{
        backgroundColor:'#078',
        width:'100%',
        padding:15,
        borderRadius:10,
        alignSelf:'center',
        marginTop:'0%',
        paddingHorizontal:'10%'
    },
    button2:{
        backgroundColor:'#82ac85',
        width:'100%',
        padding:15,
        borderRadius:10,
        alignSelf:'center',
        marginTop:'1%',
        paddingHorizontal:'10%'
    },
    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        backgroundColor:'#ffff',
        borderWidth:2,
    },
    buttonText:{
        color:'white',
        fontWeight:'780',
        fontSize:16,
    },
    buttonOutlineText:{
        color:'#ffffff',
        fontWeight:'780',
        fontSize:16,
    },
    Image:{
        width:'50%',
        height:'50%',
        alignSelf:'center',
        borderRadius:100,
        paddingVertical:"10%",

    }
})
