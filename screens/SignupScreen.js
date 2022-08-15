import {Image , KeyboardAvoidingView, TouchableOpacity, StyleSheet,TextInput, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {auth} from '../firebase.js'
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import firebase from 'firebase';
  // Check for user status

const SignupScreen = () => {

  

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [firstname,setFirstName]=useState('')
    const [lastname,setLastName]=useState('')
    const [location,setLocation]=useState('')
    const [designation,setDesignation]=useState('')
    const user = firebase.auth().currentUser;
  const navigation= useNavigation()


  const handleSignUp = () => {
    user.displayName=firstname+" "+lastname;
    auth
    .createUserWithEmailAndPassword(email,password)
    
    .then(async() =>{
       // const user=userCredentials.user;
       // alert("Successfully Registered ");
       // navigation.navigate("LoginScreen")
        navigation.navigate("HomeScreen")
      // .then(()=>{
           await firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp:true,
                url:"https://drds-a2256.firebaseapp.com"
            })})
              .then(()=>{
                alert("Verification mail Sent");
                
                  firebase.firestore().collection('users')
                  .doc(firebase.auth().currentUser.uid)
                  .set({
                      firstname,
                      middlename,
                      lastname,
                      email,
                      location,
                  })
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
           <TextInput style={ styles.input}
           placeholder=' First Name'
           value={firstname}
           onChangeText={text =>setFirstName(text)}
           //style={styles.input}
           ></TextInput>
          
           
           <TextInput
           placeholder='Last Name'
           value={lastname}
           onChangeText={text =>setLastName(text)}
           style={styles.input}
           ></TextInput>
           
           <TextInput
           placeholder='Designation'
           value={designation}
           onChangeText={text =>setDesignation(text)}
           style={styles.input}
           ></TextInput>
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
           onPress={handleSignUp }
           style={styles.button2}
           >
               <Text style={styles.buttonOutlineText}>Sign Up</Text>
           </TouchableOpacity>
          
       </View>
       
      </KeyboardAvoidingView>
    )
  }

export default SignupScreen

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
  input2:{
    backgroundColor:'white',
    paddingHorizontal:'5%',
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





/*
const SignupScreen = () => {
  
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [firstname,setFirstName]=useState('')
    const [lastname,setLastName]=useState('')
    const [location,setLocation]=useState('')
    const [middlename,setMiddleName]=useState('')
    const navigation= useNavigation()

    
   const registerUser = async(email,password,firstname,middlename,lastname,location) =>{
        await  
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(()=>{
            firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp:true,
                url:"https://drds-a2256.firebaseapp.com"
            })
              .then(()=>{
                alert("Verification mail Sent")
              }).catch((error=>{
                alert(error.message)
              }))
              .then(()=>{
                firebase.firestore().collection('users')
                .doc(firebase.auth().currentUser.uid)
                .set({
                    firstname,
                    middlename,
                    lastname,
                    email,
                    location,
                })
              }).catch((error=>{
                alert(error.message)
              }))
             }).catch((error=>{
                alert(error.message)
        }))
        
    }

  return (
    <View>
        <Text style={{fontWeight:'bold',fontSize:'23'}}>Register Here!!</Text>
    <View>
      <KeyboardAvoidingView>
        <TextInput
        placeholder="First Name"
        value={email}
        onChangeText={text =>setFirstName(text)}
        style={styles.input}
        ></TextInput>
        </KeyboardAvoidingView>
        <TextInput
        placeholder='Middle Name'
        value={email}
        onChangeText={text =>setMiddleName(text)}
        style={styles.input}
        ></TextInput>
       <TextInput
        placeholder='Last Name'
        value={email}
        onChangeText={text =>setLastName(text)}
        style={styles.input}
        ></TextInput>
        <TextInput
        placeholder='Enter Your Email Address Here'
        value={email}
        onChangeText={text =>setEmail(text)}
        style={styles.input}
        keyboardType="email-address"
        ></TextInput>
        <TextInput
        placeholder='Enter Password Here'
        value={email}
        onChangeText={text =>setPassword(text)}
        style={styles.input}
        secureTextEntry
        ></TextInput>
        <TextInput
        placeholder='Enter Your Location Here'
        value={email}
        onChangeText={text =>setLocation(text)}
        style={styles.input}
        ></TextInput>
    </View>
    <TouchableOpacity
        onPress={registerUser(email,password,firstname,middlename,lastname,location) && navigation.navigate('LoginScreen')}

        style={styles.button}
    >
        <Text style={{fontWeight:'bold', fontSize:'22'}}>Register</Text>
    </TouchableOpacity>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({

    button:{
        backgroundColor:'#078',
        width:'100%',
        padding:15,
        borderRadius:10,
        alignSelf:'center',
        marginTop:'0%',
        paddingHorizontal:'10%'
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:'10%',
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,

    },
})*/