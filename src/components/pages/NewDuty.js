import React, { Component } from 'react';
import { Button,Text, TextInput,View ,StyleSheet,Image, ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

export default class SignIn extends Component {
    render() {
        return (
          <LinearGradient colors={['#5701d4', '#5b00bf', '#9300c0']} style={styles.linearGradient}>
            <Text style={styles.hello}>Merhaba Murat.Birine iş kitlemek için harika bir gün!</Text>
                   <TextInput style={styles.dutyHeader}
                            placeholder="İş Başlığı"
                            placeholderTextColor='white'
                            >
                   </TextInput>
                   <TextInput style={styles.dutyInfo}
                            placeholder="İşin Tanımı"
                            placeholderTextColor='white'
                            >
                   </TextInput>
                  <View style={styles.datAndTime}>
                      <View style={styles.date}>
                          <Text style={styles.dateText}>Tarih</Text>
                      </View>
                      <View style={styles.time}>
                      <Text style={styles.timeText}>Saat</Text>
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
          borderWidth:1,
          width:350,
          height:60,
          borderColor:"white",
          borderRadius:5,
          textAlign:"center",
          fontSize:18, 
          top:150,
       },
       dutyHeaderText:{
           flex:1,
           textAlign:"center",
           marginTop:10,
           color:"white",
       },
       dutyInfo:{
        borderWidth:1,
        width:350,
        height:200,
        borderColor:"white",
        borderRadius:5,
        textAlign:"center",
        fontSize:18, 
        top:180,
       },
  datAndTime:{
      flex:1,
      top:200,
      flexDirection:"row",
    // justifyContent:"space-around",
  },

  time:{
    borderWidth:1,
    borderColor:"white",
    width: 175,
     height: 50, 
   
  },
  date:{
    borderWidth:1,
    borderColor:"white",
    width: 175,
    height: 50, 
   
  },
  hello:{
     fontSize:30,
     top:50
  },
  dateText:{
    color:"white",
    textAlign:"center",
    fontSize:18,
    marginTop:10
  },
  timeText:{
    color:"white",
    textAlign:"center",
    fontSize:18,
    marginTop:10
  }
  });