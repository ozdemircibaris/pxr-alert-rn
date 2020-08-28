import React, { Component } from 'react';
import { Button,Text,TouchableOpacity,TextInput,View ,StyleSheet,Image, ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { PhoneHeight,PhoneWidth,responsiveSize } from '../config/env';

export default class SignIn extends Component {
  state = {
    nameSurname: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
    render() {
      console.log(this.state.password);
        return (
          <LinearGradient colors={['#5701d4', '#5b00bf', '#9300c0']} style={styles.linearGradient}>
            <Image style={styles.icon}
                source={require('../pages/candies.png')}>
             </Image>
            <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder='AD SOYAD'
                placeholderTextColor='white'
                onChangeText={( )=>{
                  this.setState({
                      nameSurname:text
                  })
                }}
                value={this.state.nameSurname}/>
            <TextInput 
                style={styles.input}
                placeholder='E-POSTA'
                placeholderTextColor='white'
                onChangeText={(text)=>{
                  this.setState({
                      email:text
                  })
                }}
                value={this.state.email}/>
             <TextInput 
                style={styles.input}
                placeholder='ŞİFRE'
                placeholderTextColor='white'
                onChangeText={(text)=>{
                  this.setState({
                      password:text
                  })
                }}
                value={this.state.password}/>
            <TextInput 
                style={styles.input}
                placeholder='ŞİFRE TEKRAR'
                placeholderTextColor='white'
                onChangeText={(text)=>{
                  this.setState({
                      confirmPassword:text
                  })
                }}
                value={this.state.confirmPassword}/>              
            <TouchableOpacity style={styles.signUpButton}>
              <Text style={styles.signUpButtonText}>Kayıt Ol</Text> 
            </TouchableOpacity>
                <Text style={styles.questionText}>Hesabın varsa burda ne işin var?
                    <Text style={styles.loginButtonText} onPress={()=> Actions.goToLogin()}> Giriş yap</Text>
                </Text></View>  
          </LinearGradient>  
        )
    }
}
const styles = StyleSheet.create({
    linearGradient:{
      flex: 1, 
      alignItems: "center",
    },
    icon:{
      width: PhoneWidth * 0.25,
      height: PhoneHeight * 0.15,
      alignSelf: "center",
      marginTop: 20,
    },
    container:{
      width: PhoneWidth * 0.70,
      height: PhoneHeight * 0.50,  
      justifyContent:"center",
      alignItems:"center"
    },
    input: {
      width: PhoneWidth * 0.7,
      height: PhoneHeight * 0.05,
      margin: 10,
      color: 'white',
      fontSize: responsiveSize(11),
      textAlign: "center",
      borderColor: "#00d1db",
      borderWidth: 2,
      borderRadius: 8,
    },
    signUpButton:{
      width: PhoneWidth * 0.5,
      height: PhoneHeight * 0.05, 
      alignSelf: "center",
      marginTop: 10,
      backgroundColor: "#00d1db",
    },
    signUpButtonText:{
      color: "white",
      textAlign: "center",
      fontSize: responsiveSize(14),
      marginTop: 4.5,
    },
    questionText:{
      paddingTop:10,
      fontSize: responsiveSize(13),
    },
    loginButtonText:{
      paddingTop:10,
      color: "#00d1db",
    },
    login:{
      color: "#00d1db"
    }
});