import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
    }  
  render() {
    return (
       <View>
           <View style = {styles.container}>
                <View style = {styles.textView}>
                   <TouchableOpacity onPress={() => Actions.Main()}><Text style = {styles.title}> Home </Text></TouchableOpacity> 
                </View>
                <View style = {styles.textView}>
                   <TouchableOpacity onPress={() => Actions.page2()}><Text style = {styles.title}> Page 2 </Text></TouchableOpacity> 
                </View>
                <View style = {styles.textView}>
                   <TouchableOpacity onPress={() => Actions.page3()}><Text style = {styles.title}> Page 3 </Text></TouchableOpacity> 
                </View>
                <View style = {styles.textView}>
                    <TouchableOpacity onPress={() => Actions.drawerClose()}><Text style = {styles.title}> Back </Text></TouchableOpacity> 
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
     },
     textView:{
         padding:-20,
        height: 30,
        width:'100%',
        alignItems: 'center',
     },
     title:{
      fontSize:18
     },     
});