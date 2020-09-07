import React, { Component } from 'react';
import { Button,Platform, Text,TextInput,View ,TouchableOpacity,StyleSheet,Image, ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment'
import 'moment/locale/tr';
import { PhoneHeight,PhoneWidth,responsiveSize } from '../config/env';
import DatePicker from 'react-native-datepicker'

export default class SignIn extends Component {
  state={
    dateValue: moment().format('L'),
    pickerMode: 'date',
    show: false
  };
  onChange = (event, selectedDate) => this.setState({ dateValue: selectedDate });

  showDate = () => this.setState({ pickerMode: "date", show: true, })
  showTime = () => this.setState({ pickerMode: "time", show: true, });

  render() {
    const { show, dateValue, pickerMode } = this.state
    return (
      <View style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Merhaba Murat.{"\n"}Birine iş kitlemek için harika bir gün!</Text>
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.taskHeaderInput}
            placeholder="İşin Başlığı"
            placeholderTextColor='#852e4c'>
          </TextInput>
          <TextInput
            style={styles.taskInfoInput}
            placeholder="İşin Tanımı"
            placeholderTextColor='#852e4c'>
          </TextInput>
          <View style={styles.calendar}>
            <TouchableOpacity style={styles.dateButton} onPress={this.showDate}>
              <Text style={styles.dateButtonText}>Tarih</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeButton} onPress={this.showTime}>
              <Text style={styles.timeButtonText}>Saat</Text>
            </TouchableOpacity>
        </View>
        <DatePicker
      style={{width: 200}}
      date={this.state.dateValue}
      mode="time"
      placeholder="select date"
      format={"DD.MM.YYYY"}
      locale="tr"
      minDate="01.01.2020"
      maxDate="31.12.2020"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"

      customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 0
        },
        dateInput: {
          marginLeft: 36
        }
        // ... You can check the source to find the other keys.
      }}
      onDateChange={(date) => {this.setState({date: date})}}
    />
        <View style={styles.focusButtonContainer}>
        <TouchableOpacity style={styles.focusButton}>
            <Text style={styles.focusButtonText}>Hedefe Kitlen</Text>
        </TouchableOpacity>
        </View>
        </View>
      </View>  
    )
  }
}
const styles = StyleSheet.create({
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
      borderWidth: 2,
      height: PhoneHeight * 0.057,  
      borderRadius: 8,
      borderColor: "#852e4c",
      marginLeft: 16,
    },
    dateButtonText:{
      textAlign: "center",
      color: "#852e4c",
      fontSize: responsiveSize(15),
      marginTop: 5
    },
    timeButton:{
      width: PhoneWidth * 0.38,
      borderWidth: 2,
      height: PhoneHeight * 0.057,
      borderRadius: 8,
      borderColor: "#852e4c",  
      marginRight: 16 
    },
    timeButtonText:{
      textAlign: "center",
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
      flex: 1,
    }
});