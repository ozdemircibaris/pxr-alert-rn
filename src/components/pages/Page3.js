import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from '../leftBar/Header';


export default class Page3 extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <View>
            {/* <Header /> */}
            <View style = {styles.container}>
            <View style={styles.whiteBox}></View>
            <View style={styles.whiteBox}></View>
            <View style={styles.whiteBox}></View>


            </View>
        </View>
              
      );
  }
}

let styles = StyleSheet.create({
    container: {
        flex:1,
        // flexDirection:'column',
        flexDirection:'row',
        flexWrap:"wrap",
        justifyContent:'space-between',
        padding: 7,
        borderBottomColor:'white',   
     }
     ,title:{
       fontSize:17
     }
     ,whiteBox:{ 
       
        backgroundColor:'pink',
        height:70,
        width:70,
        borderRadius:10
      }  
});