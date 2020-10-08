import React, { Component } from 'react'
import { Text, View,StyleSheet, TouchableOpacity,Button,SafeAreaView ,TextInput, Image,AsyncStorage} from 'react-native'
import { Actions } from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient';
import {PhoneWidth , PhoneHeight, responsiveSize} from '../config/env';
import { connect } from 'react-redux';
import { fullNameChange,emailChange, passwordChange ,signInClicked} from '../../actions/authenticationAction';
export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'bariss',
      password:'123456',
      id : this.props.idValue,
      phoneToken: ""
    };
    }

    onEmailChanged    = (value) => this.props.emailChange(value)
    onPasswordChanged = (value) => this.props.passwordChange(value)
    onSignIn = () => this.props.signInClicked(this.props.emailValue, this.props.passwordValue ,this.props.idValue)

    render() {
        return (
<View style = {styles.container}>
 <LinearGradient colors={['#FFFFFF', '#FFFFFF', '#FFFFFF']} style={styles.linearGradient}>
    <Image style ={styles.image} source={require('../../images/pxrr.png')}/>
  <View style={styles.whiteBox}>
<View style={styles.generalBox}>
    <TextInput
      style={styles.userNameWrapper}
      onChangeText={(value) => this.props.emailChange(value)}
      placeholder='E-POSTA'
      value={this.props.emailValue}
      placeholderTextColor='black'
        />
    <TextInput
      secureTextEntry
      style={styles.passwordWrapper}
      onChangeText={(value) =>this.props.passwordChange(value)}
      value={this.props.passwordValue}
      placeholder='ŞİFRE'
      placeholderTextColor='black'
        />
      <View style ={styles.buttonBox}>
        <TouchableOpacity style={styles.LoginBtn}
             onPress={()=> this.onSignIn()}>
          <Text style={styles.loginTxt}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: PhoneHeight * 0.01}}>

    <Text style={styles.noAccountTxt}>Hesabın yok di mi?</Text>
    <TouchableOpacity onPress={()=>Actions.signUp()}>
      <Text style={styles.sıgnUpTxt} > Üye Ol! </Text>
    </TouchableOpacity>
      </View>
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
      width: responsiveSize(100),
      height: responsiveSize(100),
      marginLeft:'0%',
      marginTop:20,
      alignSelf:'center',
      resizeMode:"contain",
    }
    ,LoginBtn:{
      backgroundColor:'#2a2124',
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
      borderColor:'#445c8b',
      borderRadius: 8,
      fontSize: responsiveSize(10),
      borderWidth:2,
    }
    ,passwordWrapper:{
      marginTop:'5%',
      textAlign:'center',
      borderWidth:2,
      height: PhoneHeight * 0.05,
      width: PhoneWidth * 0.7,
      borderColor:'#445c8b',
      borderRadius: 8,
      fontSize: responsiveSize(10)
    }
    ,loginTxt:{
      color:'white',
      alignSelf:'center'
    }
    ,noAccountTxt:{
      justifyContent: 'center',
      alignSelf:'center',
      fontSize:responsiveSize(13),
      // paddingTop: 17,
      //to last text of the page
    },
    sıgnUpTxt:{
      color:'#445c8b',
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