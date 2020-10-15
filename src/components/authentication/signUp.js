import React, { Component } from 'react';
import {Text,TouchableOpacity,TextInput,View ,StyleSheet,Image} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { PhoneHeight,PhoneWidth,responsiveSize } from '../config/env';
import { fullNameChange,emailChange, passwordChange ,signUpClicked} from '../../actions/authenticationAction';
import AsyncStorage from '@react-native-community/async-storage';

class signUp extends Component {
  constructor(props) {
    super(props);
  }

  onFullNameChanged = (value) => this.props.fullNameChange(value)
  onEmailChanged    = (value) => this.props.emailChange(value)
  onPasswordChanged = (value) => this.props.passwordChange(value)
  onSignUp = () => {
    AsyncStorage.getItem("device").then((token) => {
      console.log("token", token)
      this.props.signUpClicked(this.props.fullNameValue, this.props.emailValue, this.props.passwordValue,token)
    })
  }
    render() {
        return (
          <View style={styles.background}>
            <Image style={styles.icon}
                source={require('../../images/pxrr.png')}>
             </Image>
            <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder='AD SOYAD'
                placeholderTextColor='black'
                onChangeText={(value) => this.props.fullNameChange(value)}
                />
            <TextInput 
                style={styles.input}
                placeholder='E-POSTA'
                placeholderTextColor='black'
                onChangeText={(value) => this.props.emailChange(value)}
                />
             <TextInput
             secureTextEntry 
                style={styles.input}
                placeholder='ŞİFRE'
                placeholderTextColor='black'
                onChangeText={(value) => this.props.passwordChange(value)}
                />            
            <TouchableOpacity
                onPress={this.onSignUp}
                style={styles.signUpButton}>
              <Text style={styles.signUpButtonText}> Kayıt Ol </Text> 
            </TouchableOpacity>
                <Text style={styles.questionText}>Hesabın varsa burda ne işin var?
                    <Text style={styles.loginButtonText}
                          onPress = {() => Actions.signIn()}> Giriş yap! </Text>
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
      width: responsiveSize(100),
      height: responsiveSize(100),
      resizeMode: "contain",
      alignSelf: "center"
    },
    container:{
      height: PhoneHeight * 0.50,  
      justifyContent: "center",
      alignItems: "center"
    },
    input: {
      width: PhoneWidth * 0.7,
      height: PhoneHeight * 0.05,
      margin: 10,
      color: 'black',
      fontSize: responsiveSize(10),
      textAlign: "center",
      borderColor: "#445c8b",
      borderWidth: 2,
      borderRadius: 8,
    },
    signUpButton:{
      height: PhoneHeight * 0.05,
      width: PhoneWidth * 0.5, 
      alignSelf: "center",
      marginTop: 10,
      backgroundColor: "#2a2124",
      justifyContent:"center"
    },
    signUpButtonText:{
      color: "white",
      textAlign: "center",
      fontSize: responsiveSize(14),
    },
    questionText:{
      paddingTop: 15,
      fontSize: responsiveSize(13),
    },
    loginButtonText:{
      paddingTop: 10,
      color: "#445c8b",
    },
    login:{
      color: "#445c8b"
    }
});
const mapStateToProps = (state) => {
  const { fullNameValue, emailValue, passwordValue,phoneToken } = state.authenticationReducer;
  return {
      emailValue,
      passwordValue,
      fullNameValue,
      phoneToken
  }
}
export default connect(
  mapStateToProps,
  {
      fullNameChange,
      emailChange,
      passwordChange,
     signUpClicked
  }
)(signUp)