import React, { Component } from 'react'
import { Text, View,StyleSheet, TouchableOpacity,Button,SafeAreaView ,TextInput, Image} from 'react-native'
import { Actions } from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient';
import {PhoneWidth , PhoneHeight, responsiveSize} from '../config/env';
export default class SignIn extends Component {
    render() {
        return (
<View style = {styles.container}>
 <LinearGradient colors={['#FFFFFF', '#FFFFFF', '#FFFFFF']} style={styles.linearGradient}>
    <Image style ={styles.image} source={require('../pages/candies.png')}/>
  <View style={styles.whiteBox}>
    <Text style={styles.txt}>Girmek için parolayı söyle</Text>
<View style={styles.generalBox}>
    <TextInput
      style={styles.userNameWrapper}
      onChangeText={text => onChangeText(text)}
      placeholder='E-POSTA'
      placeholderTextColor='black'
        />
    <TextInput
      style={styles.passwordWrapper}
      onChangeText={text => onChangeText(text)}
      placeholder='ŞİFRE'
      placeholderTextColor='black'
        />
      <View style ={styles.buttonBox}>
        <TouchableOpacity style={styles.LoginBtn}
          onPress={()=>Actions.jump('Main')}>
          <Text style={styles.loginTxt}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    <Text style={styles.noAccountTxt}>Hesabın yok di mi ?<Text style={styles.sıgnUpTxt}
                                                               onPress={()=>Actions.goToSignUp()}> Üye Ol !  </Text></Text>
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
      height: PhoneHeight * 0.16,
      width: PhoneWidth * 0.35,
      marginLeft:'0%',
      marginTop:20,
      alignSelf:'center',
    }
    ,LoginBtn:{
      backgroundColor:'#852E4C',
      height: PhoneHeight * 0.04,
      width: PhoneWidth * 0.5,
      marginTop:'5%',
      alignSelf:'center',
      marginRight:15
    }
    ,inputsBox:{
      alignItems:'center',
      justifyContent:'center',
      padding:'15%',
    }
    // ,whiteBox:{
    //   alignSelf:'center',
    //   alignItems:'center',
    //   backgroundColor:'white',
    //   borderRadius:16,
    //   height: PhoneHeight * 0.4,
    //   width: PhoneWidth * 0.95,
    //   marginTop:'20%',
    // }
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
      alignSelf:'center',
      marginTop:9,
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