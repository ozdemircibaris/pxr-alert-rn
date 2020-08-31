import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { PhoneHeight } from '../config/env';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
    }  
  render() {
    return (
       <View style ={styles.outContainer}>
           <View style = {styles.container}>
               <View style = {styles.deneme}>
                <View style = {styles.textView}>
                   <TouchableOpacity onPress={() => Actions.Main()}><Text style = {styles.title}> Home </Text></TouchableOpacity> 
                </View>
                <View style = {styles.textView}>
                   <TouchableOpacity onPress={() => Actions.page2()}><Text style = {styles.title}> Kart Ekle </Text></TouchableOpacity> 
                </View>
                <View style = {styles.textView}>
                   <TouchableOpacity onPress={() => Actions.page3()}><Text style = {styles.title}> Bana Gelen Görevler </Text></TouchableOpacity> 
                </View>
                <View style = {styles.textView}>
                    <TouchableOpacity onPress={() => Actions.drawerClose()}><Text style = {styles.title}> Back </Text></TouchableOpacity> 
                </View>
            </View>
         </View>
       </View>       
      );
  }
}

let styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex:1,

        justifyContent:'space-between'


     },
     textView:{
        height: PhoneHeight * 0.05 ,
        width:'100%',
        alignItems: 'center',
        backgroundColor:'#852e4c',
        borderRadius:10,
        justifyContent:'space-between'
     },
     title:{
        backgroundColor:'#852e4c',
        fontSize:18,
        justifyContent:'space-between'
     }
     ,deneme:{
        backgroundColor:'green',
        marginTop:'25%',
        justifyContent:'space-between'

     }   
});