import React, { Component } from 'react';
import { Button,Platform, Text,TextInput,View ,TouchableOpacity,StyleSheet,Image, ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { PhoneHeight,PhoneWidth,responsiveSize } from '../config/env';

export default class SignIn extends Component {
  state={
    title: '',
    subTitle: '',
    user_id: '',
    cat_id: ''
  };

    render() {
      return (
        <View style={styles.background}>
          <View style={styles.header}>
           <Text style={styles.headerText}>Merhaba Murat.{"\n"}Birine iş kitlemek için harika bir gün!</Text>
          </View>
          <View style={styles.container}>
            <TextInput 
              style={styles.titleInput}
              placeholder="İşin Başlığı"
              placeholderTextColor='#852e4c'
              onChangeText={(text)=>{
                this.setState({
                    title:text
                })
              }}>
            </TextInput>
            <TextInput 
              style={styles.subTitleInput}
              placeholder="İşin Tanımı"
              placeholderTextColor='#852e4c'
              onChangeText={(text)=>{
                this.setState({
                    subTitle:text
                })
              }}>
            </TextInput>
          <View style={styles.focusButtonContainer}>
          <TouchableOpacity style={styles.focusButton}>
             <Text style={styles.focusButtonText}>Hedefe Kitlen</Text>
          </TouchableOpacity>
          </View>
          </View>
        </View>  
      )
    }
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
    },
    header:{
      flex: 0.3,
      height: PhoneHeight * 0.30,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 5,
    },
    headerText:{
      fontSize: responsiveSize(19),
      color: "#852e4c",
      fontWeight: "bold"
    },
    titleInput:{
      borderWidth: 2,
      width: PhoneWidth * 0.85,
      height: PhoneHeight * 0.07,
      borderColor: "#852e4c",
      borderRadius: 8,
      textAlign: "center",
      fontSize: responsiveSize(15), 
      alignSelf: "center",   
    },
    subTitleInput:{
      borderWidth: 2,
      width: PhoneWidth * 0.85,
      height: PhoneHeight * 0.25,
      borderColor: "#852e4c",
      borderRadius: 8,
      textAlign: "center",
      fontSize: responsiveSize(15), 
      marginTop: 20,
      alignSelf: "center", 
    },
    focusButtonContainer:{
      marginTop: 20,
      paddingTop: 20
    },
    focusButton:{
      width: PhoneWidth * 0.85,
      borderWidth: 2,
      height: PhoneHeight * 0.057,
      borderColor: "#852e4c",  
      alignSelf: "center",
      marginTop: 20,
      backgroundColor: "#852e4c"
    },
    focusButtonText:{
      textAlign: "center",
      color: "white",
      fontSize: responsiveSize(15),
      marginTop: 4
    },
    container:{
      flex: 1,
    }
});