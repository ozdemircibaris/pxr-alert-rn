import React, { Component } from 'react';
import { Button,Text,TouchableOpacity,TextInput,View ,StyleSheet,Image, ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { PhoneHeight,PhoneWidth,responsiveSize } from '../config/env';
import axios from 'axios';

export default class SignIn extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    phoneToken: 'zeynep12'
  };
  
  signUp = () => {
    axios.post('http://pxralert.ozdemircibaris.xyz/api/v1/users/signup', {
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password,
      phoneToken: this.state.phoneToken
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
    Actions.goToLogin();
}
    render() {
        return (
          <View style={styles.background}>
            <Image style={styles.icon}
                source={require('../../images/candies.png')}>
             </Image>
            <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder='AD SOYAD'
                placeholderTextColor='black'
                onChangeText={(text)=>{
                  this.setState({
                      fullName:text
                  })
                }}
                value={this.state.fullName}/>
            <TextInput 
                style={styles.input}
                placeholder='E-POSTA'
                placeholderTextColor='black'
                onChangeText={(text) => {
                  this.setState({
                      email:text
                  })
                }}
                value={this.state.email}/>
             <TextInput 
                style={styles.input}
                placeholder='ŞİFRE'
                placeholderTextColor='black'
                onChangeText={(text) => {
                  this.setState({
                      password:text
                  })
                }}
                value={this.state.password}/>            
            <TouchableOpacity
                onPress={() => this.signUp()} 
                style={styles.signUpButton}>
              <Text style={styles.signUpButtonText}> Kayıt Ol </Text> 
            </TouchableOpacity>
                <Text style={styles.questionText}>Hesabın varsa burda ne işin var?
                    <Text style={styles.loginButtonText}
                          onPress = {() => Actions.goToLogin()}> Giriş yap </Text>
                </Text>
            </View>
          </View>   
        )
    }
}
const styles = StyleSheet.create({
  background:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    },
    icon:{
      width: responsiveSize(80),
      height: responsiveSize(80),
      resizeMode: "contain",
      alignSelf: "center",
    },
    container:{
      height: PhoneHeight * 0.50,  
      justifyContent:"center",
      alignItems:"center"
    },
    input: {
      width: PhoneWidth * 0.7,
      height: PhoneHeight * 0.05,
      margin: 10,
      color: 'red',
      fontSize: responsiveSize(11),
      textAlign: "center",
      borderColor: "#852e4c",
      borderWidth: 2,
      borderRadius: 8,
    },
    signUpButton:{
      height: responsiveSize(28),
      width: responsiveSize(170), 
      alignSelf: "center",
      marginTop: 10,
      backgroundColor: "#852e4c",
      justifyContent:"center"
    },
    signUpButtonText:{
      color: "white",
      textAlign: "center",
      fontSize: responsiveSize(14),
    
    },
    questionText:{
      paddingTop:10,
      fontSize: responsiveSize(13),
    },
    loginButtonText:{
      paddingTop:10,
      color: "#852e4c",
    },
    login:{
      color: "#852e4c"
    }
});