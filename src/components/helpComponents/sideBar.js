import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import signIn from '../authentication/signIn';
import { connect } from 'react-redux';
import { logOut } from '../../actions/authenticationAction';
import { PhoneHeight, responsiveSize, PhoneWidth } from '../config/env';
export class SideBar extends Component {
    constructor(props) {
        super(props);
   }
  render() {
    return (
       <View style ={styles.outContainer}>
         <View style = {styles.inContainer}>
               <View style = {styles.textView}>
                  <TouchableOpacity onPress={() => Actions.Main() || Actions.drawerClose()}><Text style = {styles.title}> Anasayfa </Text></TouchableOpacity> 
               </View>
               <View style = {styles.textView}>
                  <TouchableOpacity onPress={() => Actions.CreateTask({newTaskStatus: 'newCard', task: ""})}><Text style = {styles.title}> Kart Ekle </Text></TouchableOpacity> 
               </View>
               <View style = {styles.textView}>
                  <TouchableOpacity onPress={() => Actions.mytasks() || Actions.drawerClose()}><Text style = {styles.title}> Bana Gelen Görevler </Text></TouchableOpacity> 
               </View>
               <View style={styles.logOutContainer}>
                  <TouchableOpacity
                     onPress={() => this.props.logOut()}>
                     <Text style={styles.logOutText}>Çıkış Yap</Text>
                  </TouchableOpacity>
               </View>
         </View>
       </View>
      );
  }
}
let styles = StyleSheet.create({

   outContainer: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: "white"
     },
     inContainer:{
      backgroundColor: 'white',
      width: "95%",
      flexDirection: "column",
      height: "100%",
      marginTop: "20%"
     },
     textView:{
      width: PhoneWidth * 0.55,
      height: PhoneHeight * 0.050,
      marginTop: 20,
      borderTopLeftRadius: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      backgroundColor: "#445c8b",
      justifyContent: "center",
     },
     title:{
      fontSize: responsiveSize(12),
      color: "white",
      marginLeft: 5
     },
     logOutContainer:{
        alignSelf: "center",
        top: "50%"
     },
     logOutText:{
        fontSize: responsiveSize(15),
        color:'#445c8b',
        fontWeight: "bold"
     }
});

const mapStateToProps = state => {
   return {}
}
export default connect(
   mapStateToProps,
   {
       logOut
   }
)(SideBar)