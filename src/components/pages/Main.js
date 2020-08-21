import React, { Component } from 'react';
import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';
import Header from '../leftBar/Header';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';

export default class Main extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    

    return (
        
        <View style ={styles.container}>
            {/* <Header /> */}      
            {/* <Text style = {styles.title}> Ana Sayfa  </Text> */}
  <LinearGradient colors={['#4d21d0', '#621fb9', '#8825b9']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>
    
    
  </Text>
</LinearGradient>
                
                     
        </View>
              
      );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    }
  });
  
  