import React, { Component } from 'react';
import { Button,Text,TouchableOpacity,TextInput,View ,StyleSheet,Image, ImageBackground, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { PhoneHeight,PhoneWidth,responsiveSize } from '../config/env';
import { fullNameChange,emailChange, passwordChange ,signUpClicked} from '../../actions/authenticationAction';
import axios from 'axios';

class signUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullNameValue: "",
      emailValue: "",
      passwordValue: "",
      token : ""
      
    }
  }
  

  onFullNameChanged = (value) => this.props.fullNameChange(value)
  onEmailChanged    = (value) => this.props.emailChange(value)
  onPasswordChanged = (value) => this.props.passwordChange(value)
  onSignUp = () =>{ 
    AsyncStorage.getItem("device").then((token) => {
      console.log("token", token)
      this.props.signUpClicked(this.props.fullNameValue, this.props.emailValue, this.props.passwordValue,token)
})
      
   
    
           }
  

    render() {
      const { emailValue, passwordValue, fullNameValue } = this.props;
    
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
                onChangeText={(value) => this.props.fullNameChange(value)}
                // value={this.state.fullName}
                />
            <TextInput 
                style={styles.input}
                placeholder='E-POSTA'
                placeholderTextColor='black'
                onChangeText={(value) => this.props.emailChange(value)}
                // value={this.state.email}
                />
             <TextInput
             secureTextEntry 
                style={styles.input}
                placeholder='ŞİFRE'
                placeholderTextColor='black'
                onChangeText={(value) => this.props.passwordChange(value)}
                // value={this.state.password}
                />            
            <TouchableOpacity
                onPress={this.onSignUp}
                style={styles.signUpButton}>
              <Text style={styles.signUpButtonText}> Kayıt Ol </Text> 
            </TouchableOpacity>
                <Text style={styles.questionText}>Hesabın varsa burda ne işin var?
                    <Text style={styles.loginButtonText}
                          onPress = {() => Actions.signIn()}> Giriş yap </Text>
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