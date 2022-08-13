import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { auth } from '../firebase';
const handleSignOut= () =>{
  auth
  .signOut()
  .then(() => {
    NavigationPreloadManager.replace
  }
  )
}
export default class UserProfileView extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={require('../images/logo.jpg')} />

                <Text style={styles.name}> John doe </Text>
                <Text style={styles.userInfo}>{auth.currentUser.email} </Text>
                <Text style={styles.userInfo}>Officer</Text>
                
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.iconContent}>
              <Ionicons name="location"  size={30}  color='#fff' ></Ionicons>
              </View>
              <View  style={styles.som}>
                <Text style={styles.info}>Location is set by central </Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
              <Ionicons name="checkbox-outline"  size={30}  color='#fff' ></Ionicons>
                 </View>
              <View  style={styles.som} >
                <Text style={styles.info}>No Suggested Action for you</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
              <Ionicons name="notifications"  size={30}  color='#fff' ></Ionicons>
              </View>
              <View style={styles.som} >
                <Text style={styles.info}>No alerts for you</Text>
              </View>
            </View>

            

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  
  avatar: {
    width: 260,
    height: 260,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginTop:100,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#778899",
    height:500,
    alignItems:'center',
  },
  item:{
   flexDirection : 'row',
  }
  ,
  iteme:{
   flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5,
    marginLeft: 10,
  },
  iconContent:{
    flex:1,
    alignItems:'center',
    paddingLeft:5,
   // marginLeft:200,
    marginTop:30,
    marginLeft:100
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  som:{
    //alignContent:'center'
    //marginRight:100,
  },
  info:{
  
    
    
    marginTop:30,
    color: "#FFFFFF",
    fontSize:15,
    fontWeight:"bold"
  }
});
