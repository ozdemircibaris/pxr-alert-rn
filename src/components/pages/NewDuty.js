import React, { Component } from 'react';
import { Button,Text, TextInput,View ,StyleSheet,Image, ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

export default class SignIn extends Component {
    render() {
        return (
          <LinearGradient colors={['#5701d4', '#5b00bf', '#9300c0']} style={styles.linearGradient}>
                   <TextInput style={styles.dutyHeader}
                            placeholder="İş Başlığı"
                            placeholderTextColor='white'
                            >
                   </TextInput>
                   <TextInput style={styles.dutyInfo}
                            placeholder="İşinTanımı"
                            placeholderTextColor='white'
                            >
                   </TextInput>
                  <View style={styles.datAndTime}>
                      <View style={styles.date}>
                          <Text>Tarih</Text>
                      </View>
                      <View style={styles.time}>
                      <Text>Saat</Text>
                      </View>
                  </View>
          
            </LinearGradient>  
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
         flex: 1,
         paddingLeft: 15,
         paddingRight: 15,
        //  justifyContent:"center",
         alignItems:"center",   
       },
       dutyHeader:{
          borderWidth:1.5,
          width:350,
          height:60,
          borderColor:"white",
          borderRadius:5,
          textAlign:"center",
          fontSize:16, 
          top:150,
       },
       dutyHeaderText:{
           flex:1,
           textAlign:"center",
           marginTop:10,
           color:"white",
       },
       dutyInfo:{
        borderWidth:1.5,
        width:350,
        height:200,
        borderColor:"white",
        borderRadius:5,
        textAlign:"center",
        fontSize:16, 
        top:180,
       },
  datAndTime:{
      flex:1,
      top:200,
      flexDirection:"row",
    // justifyContent:"space-around",
  },

  time:{
    borderWidth:1.5,
    borderColor:"white",
    width: 175,
     height: 50, 
   
  },
  date:{
    borderWidth:1.5,
    borderColor:"white",
    width: 175,
    height: 50, 
   
  }
  });