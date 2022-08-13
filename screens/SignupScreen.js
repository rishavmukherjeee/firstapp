import { StyleSheet, Text, View, TouchableOpacity,TextInput,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import firebase from 'firebase'
const SignupScreen = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [firstname,setFirstName]=useState('')
    const [lastname,setLastName]=useState('')
    const [location,setLocation]=useState('')
    const [middlename,setMiddleName]=useState('')
    registerUser = async(email,password,firstname,middlename,lastname,location) =>{
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
        <TextInput
        placeholder="First Name"
        value={email}
        onChangeText={text =>setFirstName(text)}
        style={styles.input}
        ></TextInput>
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
        onPress={()=>registerUser(email,password,firstname,middlename,lastname,location)}

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
})