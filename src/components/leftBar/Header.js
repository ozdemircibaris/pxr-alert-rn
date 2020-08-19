import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Header extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <View style = {styles.container}>
                <TouchableOpacity onPress={() => Actions.drawerToggle()}><Text style = {styles.title}>Menu</Text></TouchableOpacity>
        </View>      
      );
  }
}

let styles = StyleSheet.create({
    container: {
        padding: 40,
        alignItems: 'center',
        borderBottomWidth:1,
        borderBottomColor: 'white',
        flexDirection: 'row',
     },
     title:{
      fontSize:18
     },     
});