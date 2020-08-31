import React, { Component } from 'react'
import { Text, View,StyleSheet, TouchableOpacity,Button,SafeAreaView ,TextInput, Image} from 'react-native'
import { Actions } from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient';
import {PhoneWidth , PhoneHeight} from '../config/env';


export default class SignIn extends Component {
    render() {
        return (
            
<View style = {styles.container}>
 <LinearGradient colors={['#4d21d0', '#621fb9', '#8825b9']} style={styles.linearGradient}>
    {/* <Image style ={styles.image} source={require('../pages/candles.png')}/> */}
  <View style={styles.whiteBox}>
    <Text style={styles.txt}>Girmek için parolayı söyle</Text>

    <TextInput
      style={styles.userNameWrapper}
      onChangeText={text => onChangeText(text)}
      placeholder='emailinizi giriniz'
      placeholderTextColor='black'
        />

    <TextInput
      style={styles.passwordWrapper}
      onChangeText={text => onChangeText(text)}
      placeholder='şifrenizi giriniz'
      placeholderTextColor='black'
        />

      <View style ={styles.buttonBox}>
        <TouchableOpacity style={styles.LoginBtn}
          onPress={Actions.Main()}>
          <Text style={styles.loginTxt}>Giriş Yap</Text>
        </TouchableOpacity>

      </View>
    <Text style={styles.noAccountTxt}>Hesabın yok di mi ? Üye Ol !</Text>
          
  </View> 
        
 </LinearGradient>
   
</View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    }
    ,linearGradient: {
      height:PhoneHeight*1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 2,
      justifyContent:'center',
    }
    ,txt:{
      fontSize:23,
    },image:{
      height: PhoneHeight * 0.23,
      width: PhoneWidth * 0.5,
      marginLeft:'24%',
      marginBottom:20
    }
    ,LoginBtn:{
      backgroundColor:'#94d569',
      height: PhoneHeight * 0.04,
      width: PhoneWidth * 0.5,
      borderRadius: 10,
      marginTop:'5%'
    }
    ,inputsBox:{
      alignItems:'center',
      justifyContent:'center',
      padding:'15%',
    }
    ,whiteBox:{
      alignSelf:'center',
      alignItems:'center',
      backgroundColor:'white',
      borderRadius:16,
      height: PhoneHeight * 0.4,
      width: PhoneWidth * 0.95,
      marginTop:'20%', 
    }
    ,userNameWrapper:{ 
      marginTop:'23%',
      textAlign:'center',
      borderWidth:1.5,
      height: PhoneHeight * 0.05,
      width: PhoneWidth * 0.7,
      borderColor:'#94d569',
      borderRadius: 10,
    }
    ,passwordWrapper:{
      marginTop:'5%',
      textAlign:'center',
      borderWidth:1.5,
      height: PhoneHeight * 0.05,
      width: PhoneWidth * 0.7,
      borderColor:'#94d569',
      borderRadius: 10,
    }
    ,loginTxt:{
      alignSelf:'center',
      marginTop:9,
    }
    ,noAccountTxt:{
      //to last text of the page
    }

  });
