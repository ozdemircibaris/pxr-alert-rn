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
    dateModalVisible: false,
    isVisible : false,
    date: new Date(1598051730000),
    mode: "date",
    show: false,
    modalVisible: false
  };
  Deneme = () => {
    const { show, dateValue, pickerMode, dateModalVisible } = this.state
    if (this.props.newTaskStatus == 'newTask') { // + butonuna basınca calısacak olan kısım 
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
            <TouchableOpacity style={styles.dateButton}  onPress={() => {
            this.showTimepicker(true);
          }}>
              <Text style={styles.dateButtonText}>Tarih & Saat</Text>
            </TouchableOpacity>
           
            {/* {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={dateValue}
                mode={pickerMode}
                is24Hour={true}
                display="calendar"
                onChange={this.onChange}
              />
            )} */}
          </View>
          <View style={styles.focusButtonContainer}>
            <TouchableOpacity style={styles.focusButton}>
              <Text style={styles.focusButtonText}>Hedefe Kitlen</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
    } else if(this.props.newTaskStatus == 'newCard'){ //sidebardan gelen yeni kart ekle sayfasında calıscak kısım 
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
    }else{ //anaSayfadaki kartlara basılınca cıkacak olan kısım 
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
            <TouchableOpacity style={styles.dateButton} onPress={() => {
                this.showTimepicker(!dateModalVisible);
              }}>
              <Text style={styles.dateButtonText}>Tarih && Saat</Text>
            </TouchableOpacity>
            {/* {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={dateValue}
                mode={pickerMode}
              
                is24Hour={true}
                display="calendar"
                onChange={this.onChange}
              />
            )} */}
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
  onChange = (event, selectedDate) => {
    currentDate = selectedDate || this.state.date;
    this.setState({ show: Platform.OS === 'ios', date: currentDate })

 };
 setdateModalVisible = (visible) => {
     this.setState({ dateModalVisible: visible });
   }

  showMode = (currentMode) => {
    this.setState({ show: true, mode: currentMode })
 };

  showDatepicker = () => {
     this.showMode("date")
 };

  showTimepicker = (visible) => {
     this.showMode("time")
     this.setState({ dateModalVisible: visible });
     console.log("mode :", this.showMode)
 };
  render() {
    const { show, dateValue, pickerMode, modalVisible, dateModalVisible} = this.state
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
        <Modal
              animationType="slide"
              transparent={true}
              visible={dateModalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={styles.dateCenteredView}>
                <View style={styles.dateModalView}>
                  <Text style={styles.dateModalText}>Ne zamanana kitlersin ? </Text>

    <TouchableOpacity style={ styles.date}>
            {this.state.show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={this.state.date}
          locale="tr"
          mode={"datetime"}
          is24Hour={true}
          display="default"
          onChange={this.onChange}
        />
      )}
    </TouchableOpacity>

        <TouchableOpacity
              style={styles.modalCloseBtn} //hide modal button 
              onPress={() => {
                this.showTimepicker(!dateModalVisible);
              }}>
            
              <Text style={styles.dateTextStyle}>Boşveer</Text>
        </TouchableOpacity>
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
    alignSelf:'center',
    justifyContent:'center',
  },
  dateButtonText: {
    textAlign: "center",
    color: "#852e4c",
    fontSize: responsiveSize(15),  
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
    backgroundColor: "#852e4c",
    justifyContent:'center'
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
    justifyContent: "center",
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
},
// ininside of the date time modal
dateCenteredView: {
  flex: 1,
  justifyContent:'flex-end'
},
dateModalView: {
  alignItems:'center',
  paddingTop:'20%',
  backgroundColor: "#e3d8e3",
  borderRadius: 40,
  width:PhoneWidth*1,
  height: PhoneHeight*0.6,
  marginTop:2,
  
},
modalCloseBtn: {
  backgroundColor:'white',
  borderRadius: 10,
  width:PhoneWidth*0.4,
  height:PhoneHeight*0.04,
  flexDirection:'row',
  justifyContent:'center',
  marginTop:2,
  
},
dateTextStyle: {
  fontSize:20,  
  color: "black",
  fontWeight:'bold',
  alignSelf:'center'
},
dateModalText: {
  width:PhoneWidth*0.8,
  height:PhoneHeight*0.06,
  fontWeight:'bold',
  paddingTop:-10,
  fontSize:20,
  textAlign:'center'
  
},
date:{
  width:PhoneWidth*0.7
}
});