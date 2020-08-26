import React, { Component } from 'react';
import { Button,Platform, Text,TextInput,View ,StyleSheet,Image, ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';
import DateTimePicker from '@react-native-community/datetimepicker';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment'
import 'moment/dist/locale/tr';
import { PhoneHeight,PhoneWidth } from '../config/env';

export default class SignIn extends Component {
  state={
    dateValue : new Date(),
    pickerMode: 'date',
    show: false
  };

  onChange = (event, selectedDate) => this.setState({ dateValue: selectedDate });
  
  showDate = () => this.setState({ pickerMode: "date", show: true, })
  showTime = () => this.setState({ pickerMode: "time", show: true, });
    render() {
      const { show, dateValue, pickerMode } = this.state

      console.log("height: ", PhoneHeight );
      console.log("width: ", PhoneWidth );
      // console.log("date", moment(dateValue).format('L'))
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

          <View><View>
            <Button onPress={this.showDate} title="Tarih"></Button>
            </View>
            <View>
            <Button onPress={this.showTime} title="Saat"></Button>
            </View>
            {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={dateValue}
          mode={pickerMode}
          is24Hour={true}
          display="spinner"
          onChange={this.onChange}
        />
      )}
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
  });