import React, { Component } from 'react'
import { Text, View,StyleSheet, TouchableOpacity,Button,SafeAreaView ,TextInput, Image} from 'react-native'
import { Actions } from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient';

export default class SignIn extends Component {
    render() {
        return (
            
<View style = {styles.container}>
    <LinearGradient colors={['#4d21d0', '#621fb9', '#8825b9']} style={styles.linearGradient}>
    <Image style={styles.ImageWork} source={require('../authentication/work.png')} />
        <View style={styles.whiteBox}>
          <Text style={{fontSize:25}}>Girmek için parolayı söyle</Text>
       
               
          <View style={styles.inputsBox}>
          <TextInput
                style={{textAlign:'center' , width: '90%',height: 40, borderColor: '#00D1DB', borderWidth: 2 ,margin:40}}
                onChangeText={text => onChangeText(text)}
                placeholder='emailinizi giriniz'
                placeholderTextColor='black'
                
              />
          <TextInput
              style={{  textAlign:'center',color:'black', width: '90%' ,height: 40, borderColor: '#00D1DB', borderWidth: 2 }}
              onChangeText={text => onChangeText(text)}
              placeholder='şifrenizi giriniz'
              placeholderTextColor='black'
              
            />
   
        </View> 
       
        </View> 
              <View style={styles.buttonBox}> 
              <Button style={styles.LoginBtn}
                onPress={Actions.Main()}
                title="giriş yap"
                color="white"
                accessibilityLabel="Learn more about this purple button"
              />  
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
   

    },linearGradient: {
      height:'100%',
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 2,
    
    },LoginBtn:{
        zIndex: 3 ,
        position: 'absolute',
        height: 40, 
        width: '100%' ,
       
       
    },
    buttonBox:{
       position: 'absolute',
       zIndex: 3 ,
       marginTop:675,
       backgroundColor:'#00D1DB',
       marginLeft:45,
       width: '85%' ,

       
    },
    inputsBox:{
      alignItems:'center'
    },
    whiteBox:{
      backgroundColor:'white',
      paddingLeft: 13,
      paddingRight: 13,
      height:300,
      borderRadius:30,
      marginTop:310,
      
    },ImageWork:{
      height:70,
      width:60,
      marginTop:50,
      marginLeft:160
    }
    

  });