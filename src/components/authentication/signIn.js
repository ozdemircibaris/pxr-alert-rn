import React, { Component } from 'react'
import { Text, View,StyleSheet, TouchableOpacity,Button,SafeAreaView ,TextInput, Image,AsyncStorage} from 'react-native'
import { Actions } from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient';
import {PhoneWidth , PhoneHeight, responsiveSize} from '../config/env';
import axios from 'axios';
import { connect } from 'react-redux';
import { fullNameChange,emailChange, passwordChange ,signInClicked} from '../../actions/authenticationAction';
import { Value } from 'react-native-reanimated';

 

export class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'', 
      id : this.props.idValue, 
      phoneToken: ""};
    console.log("deneme",this.props.idValue)
    }
    
    onEmailChanged    = (value) => this.props.emailChange(value)
    onPasswordChanged = (value) => this.props.passwordChange(value)
    onSignIn = () =>this.props.signInClicked(this.props.emailValue, this.props.passwordValue ,this.props.idValue)
    
    

    
    render() {
     
      
        return (
<View style = {styles.container}>
 <LinearGradient colors={['#FFFFFF', '#FFFFFF', '#FFFFFF']} style={styles.linearGradient}>
    <Image style ={styles.image} source={require('../../images/candies.png')}/>
  <View style={styles.whiteBox}>
    <Text style={styles.txt}>Girmek için parolayı söyle</Text>
<View style={styles.generalBox}>
    <TextInput
      style={styles.userNameWrapper}
      onChangeText={(value) =>this.props.emailChange(value)}
      placeholder='E-POSTA'
      placeholderTextColor='black'
        />
    <TextInput
      secureTextEntry
      style={styles.passwordWrapper}
      onChangeText={(value) =>this.props.passwordChange(value)}
      placeholder='ŞİFRE'
      placeholderTextColor='black'
        />
      <View style ={styles.buttonBox}>
        <TouchableOpacity style={styles.LoginBtn}
             onPress={()=> this.onSignIn()}>
          <Text style={styles.loginTxt}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    <Text style={styles.noAccountTxt}>Hesabın yok di mi?
     <Text style={styles.sıgnUpTxt} onPress={()=>Actions.signUp()}> Üye Ol! </Text></Text>
    </View>
  </View>
 </LinearGradient>
</View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems:'center',
      marginTop:'20%'
    },
    txt:{
      fontSize:responsiveSize(20),
      fontWeight:'bold',
      color:'black',
      alignSelf:'center',
      marginTop:24,
      paddingTop:30
    }
    ,image:{
      width: responsiveSize(80),
      height: responsiveSize(80),
      marginLeft:'0%',
      marginTop:20,
      alignSelf:'center',
      resizeMode:"contain",
    }
    ,LoginBtn:{
      backgroundColor:'#852E4C',
      height: responsiveSize(28),
      width: responsiveSize(170),
      marginTop:'5%',
      alignSelf:'center',
      justifyContent:"center"
    }
    ,inputsBox:{
      alignItems:'center',
      justifyContent:'center',
      padding:'15%',
    }
    ,userNameWrapper:{
      marginTop:'23%',
      textAlign:'center',
      borderWidth:1.5,
      height: PhoneHeight * 0.05,
      width: PhoneWidth * 0.7,
      borderColor:'#852E4C',
      borderRadius: 8,
      fontSize:11,
      borderWidth:2,
    }
    ,passwordWrapper:{
      marginTop:'5%',
      textAlign:'center',
      borderWidth:2,
      height: PhoneHeight * 0.05,
      width: PhoneWidth * 0.7,
      borderColor:'#852E4C',
      borderRadius: 8,
      fontSize:11
    }
    ,loginTxt:{
      color:'white',
      alignSelf:'center'
    }
    ,noAccountTxt:{
      alignSelf:'center',
      fontSize:responsiveSize(13),
      paddingTop:10
      //to last text of the page
    },
    sıgnUpTxt:{
      color:'#852E4C',
      fontSize:responsiveSize(13),
    }
  });

const mapStateToProps = (state) => {
  const {emailValue, passwordValue ,idValue} = state.authenticationReducer;
  return {
      emailValue,
      passwordValue,
      idValue
  }
}
export default connect(
  mapStateToProps,
  {
      fullNameChange,
      emailChange,
      passwordChange,
      signInClicked
  }
)(SignIn)