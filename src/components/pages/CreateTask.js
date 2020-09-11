import React, { Component } from 'react';
import { Button, Platform, Text, TextInput, View, TouchableOpacity, StyleSheet, Image, ImageBackground, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment'
import 'moment/dist/locale/tr';
import DateTimePicker from '@react-native-community/datetimepicker';
import { PhoneHeight, PhoneWidth, responsiveSize } from '../config/env';

export default class CreateTask extends Component {
  state={
    dateValue: new Date(),
    pickerMode: 'date',
    show: false,
    modalVisible: false
  };
  Deneme = () => {
    const { show, dateValue, pickerMode } = this.state
    if (this.props.newTaskStatus == 'newTask') {
      return (
        <View style={styles.container}>
          <TextInput
            style={styles.taskHeaderInput}
            placeholder="İşin Başlığı"
            value={this.props.task.item == null ? "" : this.props.task.item.title}
            placeholderTextColor='#852E4C'>
          </TextInput>
          <TextInput
            style={styles.taskInfoInput}
            placeholder="İşin Tanımı"
            value={this.props.task.item == null ? "" : this.props.task.item.body}
            placeholderTextColor='#852E4C'>
          </TextInput>
          <TouchableOpacity
            style={styles.openButton}
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <Text style={styles.textStyle}>Kategori Seç</Text>
          </TouchableOpacity>
          {/* tarih acıcı buton */}
         

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
                display="calendar"
                onChange={this.onChange}
              />
            )}
          </View>
          <View style={styles.focusButtonContainer}>
            <TouchableOpacity style={styles.focusButton}>
              <Text style={styles.focusButtonText}>Hedefe Kitlen</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
    } else if(this.props.newTaskStatus == 'newCard'){
      return (
        <View style={styles.container}>
          <TextInput
            style={styles.taskHeaderInput}
            placeholder="İşin Başlığı"
            value={this.props.task.item == null ? "" : this.props.task.item.title}
            placeholderTextColor='#852E4C'>
          </TextInput>
          <TextInput
            style={styles.taskInfoInput}
            placeholder="İşin Tanımı"
            value={this.props.task.item == null ? "" : this.props.task.item.body}
            placeholderTextColor='#852E4C'>
          </TextInput>
          <TouchableOpacity
            style={styles.openButton}
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <Text style={styles.textStyle}>Kategori Seç</Text>
          </TouchableOpacity>
          <View style={styles.focusButtonContainer}>
            <TouchableOpacity style={styles.focusButton}>
              <Text style={styles.focusButtonText}>Hedefe Kitlen</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }else{
      return (
        <View style={styles.container}>
          <TextInput
            style={styles.taskHeaderInput}
            placeholder="İşin Başlığı"
            value={this.props.task.item == null ? "" : this.props.task.item.title}
            placeholderTextColor='#852E4C'>
          </TextInput>
          <TextInput
            style={styles.taskInfoInput}
            placeholder="İşin Tanımı"
            value={this.props.task.item == null ? "" : this.props.task.item.body}
            placeholderTextColor='#852E4C'>
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
                display="calendar"
                onChange={this.onChange}
              />
            )}
          </View>
          <View style={styles.focusButtonContainer}>
            <TouchableOpacity style={styles.focusButton}>
              <Text style={styles.focusButtonText}>Hedefe Kitlen</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
    }
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  onChange = (event, selectedDate) => this.setState({ dateValue: selectedDate });
  showDate = () => this.setState({ pickerMode: "date", show: true, })
  showTime = () => this.setState({ pickerMode: "time", show: true, });
  render() {
    const { show, dateValue, pickerMode, modalVisible} = this.state
    return ( 
      <View style={styles.background}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
      alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Image style={styles.closeIcon} source={require('../../images/arrow.png')} />
              </TouchableOpacity>
              <View style={styles.radioButtonsContainer}>
                <TouchableOpacity style={styles.radioButtons} />
                <TouchableOpacity style={styles.radioButtons} />
                <TouchableOpacity style={styles.radioButtons} />
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.header}>
          <Text style={styles.headerText}>Merhaba Murat.{"\n"}Birine iş kitlemek için harika bir gün!</Text>
        </View>
        <this.Deneme/>
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
  header: {
    flex: 0.3,
    height: PhoneHeight * 0.30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  headerText: {
    fontSize: responsiveSize(19),
    color: "#852e4c",
    fontWeight: "bold"
  },
  taskHeaderInput: {
    borderWidth: 2,
    width: PhoneWidth * 0.85,
    height: PhoneHeight * 0.07,
    borderColor: "#852e4c",
    borderRadius: 8,
    textAlign: "center",
    fontSize: responsiveSize(15),
    alignSelf: "center",
  },
  taskInfoInput: {
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
  dateButton: {
    width: PhoneWidth * 0.38,
    borderWidth: 2,
    height: PhoneHeight * 0.057,
    borderRadius: 8,
    borderColor: "#852e4c",
    marginLeft: 16,
  },
  dateButtonText: {
    textAlign: "center",
    color: "#852e4c",
    fontSize: responsiveSize(15),
    marginTop: 5
  },
  timeButton: {
    width: PhoneWidth * 0.38,
    borderWidth: 2,
    height: PhoneHeight * 0.057,
    borderRadius: 8,
    borderColor: "#852e4c",
    marginRight: 16
  },
  timeButtonText: {
    textAlign: "center",
    color: "#852e4c",
    fontSize: responsiveSize(15),
    marginTop: 5
  },
  focusButtonContainer: {
    marginTop: 20,
    paddingTop: 20
  },
  focusButton: {
    width: PhoneWidth * 0.85,
    borderWidth: 2,
    height: PhoneHeight * 0.057,
    borderColor: "#852e4c",
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "#852e4c"
  },
  focusButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: responsiveSize(15),
    marginTop: 4
  },
  calendar: {
    textAlign: "center",
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
  },
  openButton: {
    borderRadius: 8,
    marginTop: 20,
    width: PhoneWidth * 0.38,
    borderWidth: 2,
    height: PhoneHeight * 0.057,
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: "#852E4C"
},
textStyle: {
    color: "#852E4C",
    textAlign: "center",
    fontSize: responsiveSize(15),
},
centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'flex-end',
    borderWidth: 0
},
modalView: {
    backgroundColor: "pink",
    padding: 35,
    alignItems: "flex-start",
    borderWidth: 0,
    borderColor: '#852E4C',
    width: PhoneWidth,
    height: PhoneHeight * 0.3,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
},
closeButton:{
    borderWidth: 0,
    width: PhoneWidth * 0.05,
    height: PhoneHeight * 0.02,
    alignSelf: 'flex-end'
},
closeIcon:{
    width: responsiveSize(15),
    height: responsiveSize(15),
},
radioButtons:{
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width: PhoneWidth * 0.05,
    height: PhoneHeight * 0.03,
    backgroundColor:'#fff',
    borderRadius:50,
    marginTop: 10
},
radioButtonsContainer:{
    flexDirection: "column"
}
});