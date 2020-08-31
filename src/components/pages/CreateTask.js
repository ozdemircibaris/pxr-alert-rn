import React, { Component } from 'react';
import { Button,Platform, Text,TextInput,View ,TouchableOpacity,StyleSheet,Image, ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';
import DateTimePicker from '@react-native-community/datetimepicker';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment'
import 'moment/dist/locale/tr';
import { PhoneHeight,PhoneWidth,responsiveSize } from '../config/env';

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
      return (
        <LinearGradient colors={['#5701d4', '#5b00bf', '#9300c0']} style={styles.linearGradient}>
        <View style={styles.background}>
          <View style={styles.header}>
           <Text style={styles.headerText}>Merhaba Murat.{"\n"}Birine iş kitlemek için harika bir gün!</Text>
          </View>
          <View style={styles.container}>
            <TextInput 
              style={styles.taskHeaderInput}
              placeholder="İşin Başlığı"
              placeholderTextColor='white'>
              placeholderTextColor='#852e4c'>
            </TextInput>
            <TextInput 
              style={styles.taskInfoInput}
              placeholder="İşin Tanımı"
              placeholderTextColor='white'>
              placeholderTextColor='#852e4c'>
            </TextInput>
            <View style={styles.calendar}>
              <TouchableOpacity style={styles.dateButton} onPress={this.showDate}>
                <Text style={styles.dateButtonText}>Tarih</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.timeButton} onPress={this.showTime}>
                <Text style={styles.timeButtonText}>Saat</Text>
              </TouchableOpacity>
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
          <View style={styles.focusButtonContainer}>
          <TouchableOpacity style={styles.focusButton}>
             <Text style={styles.focusButtonText}>Hedefe Kitlen</Text>
          </TouchableOpacity>
          </View>
        </LinearGradient>  
          </View>
        </View>  
      )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
    background: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
    },
    header:{
      flex: 0.3,
      height: PhoneHeight * 0.30,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
    },
    headerText:{
      fontSize: responsiveSize(19),
      color: "white"
    },
    taskHeaderInput:{
      borderWidth: 1,
      width: PhoneWidth * 0.85,
      height: PhoneHeight * 0.07,
      borderColor: "white",
      borderRadius: 5,
      textAlign: "center",
      fontSize: responsiveSize(15), 
      marginTop: 6,
      alignSelf: "center",   
    },
    taskInfoInput:{
      borderWidth: 1,
      width: PhoneWidth * 0.85,
      height: PhoneHeight * 0.25,
      borderColor: "white",
      borderRadius: 5,
      marginTop: 5,
    },
    headerText:{
      fontSize: responsiveSize(19),
      color: "#852e4c",
      fontWeight: "bold"
    },
    taskHeaderInput:{
      borderWidth: 2,
      width: PhoneWidth * 0.85,
      height: PhoneHeight * 0.07,
      borderColor: "#852e4c",
      borderRadius: 8,
      textAlign: "center",
      fontSize: responsiveSize(15), 
      alignSelf: "center",   
    },
    taskInfoInput:{
      borderWidth: 2,
      width: PhoneWidth * 0.85,
      height: PhoneHeight * 0.25,
      borderColor: "#852e4c",
      borderRadius: 8,
      textAlign: "center",
      fontSize: responsiveSize(15), 
      marginTop: 20,
      alignSelf: "center", 
    },
    dateButton:{
      width: PhoneWidth * 0.38,
      borderWidth: 1,
      borderColor: "white",
      height: PhoneHeight * 0.057,  
      borderRadius: 5,
      borderColor: "white",
      borderWidth: 2,
      height: PhoneHeight * 0.057,  
      borderRadius: 8,
      borderColor: "#852e4c",
      marginLeft: 16,
    },
    dateButtonText:{
      textAlign: "center",
      color: "white",
      color: "#852e4c",
      fontSize: responsiveSize(15),
      marginTop: 5
    },
    timeButton:{
      width: PhoneWidth * 0.38,
      borderWidth: 1,
      height: PhoneHeight * 0.057,
      borderRadius: 5,
      borderColor: "white",  
      borderWidth: 2,
      height: PhoneHeight * 0.057,
      borderRadius: 8,
      borderColor: "#852e4c",  
      marginRight: 16 
    },
    timeButtonText:{
      textAlign: "center",
      color: "white",
      fontSize: responsiveSize(15),
      marginTop: 5
    },
    focusButton:{
      width: PhoneWidth * 0.85,
      borderWidth: 1,
      height: PhoneHeight * 0.057,
      borderColor: "white",  
      alignSelf: "center",
      marginTop: 20,
      backgroundColor: "white"
    },
    focusButtonText:{
      textAlign: "center",
      color: "#6d00bf",
      fontSize: responsiveSize(15),
      fontWeight: "bold",
      color: "#852e4c",
      fontSize: responsiveSize(15),
      marginTop: 5
    }, 
    focusButtonContainer:{
      marginTop: 20,
      paddingTop: 20
    },
    focusButton:{
      width: PhoneWidth * 0.85,
      borderWidth: 2,
      height: PhoneHeight * 0.057,
      borderColor: "#852e4c",  
      alignSelf: "center",
      marginTop: 20,
      backgroundColor: "#852e4c"
    },
    focusButtonText:{
      textAlign: "center",
      color: "white",
      fontSize: responsiveSize(15),
      marginTop: 4
    },
    calendar:{
      textAlign: "center", 
      flexDirection: "row",
      marginTop: 15,
      justifyContent: "space-between",
    },
    container:{
      flex: 0.5,
      flex: 1,
    }
});