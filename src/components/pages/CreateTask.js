import React, { Component } from 'react';
import { Platform, Text, TextInput, View, TouchableOpacity, StyleSheet, Image, Modal,FlatList, ScrollView, Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';
import moment from 'moment'
import 'moment/locale/tr';
import DateTimePicker from '@react-native-community/datetimepicker';
import { PhoneHeight, PhoneWidth, responsiveSize } from '../config/env';
import { connect } from 'react-redux';
import { getCategories, newCard } from '../../actions/createTaskAction'

class CreateTask extends Component {
  state={
    dateModalVisible: false,
    isVisible : false,
    date: new Date(),
    mode: "date",
    show: false,
    modalVisible: false,
    cat_id: "",
    selectedRadio: false,
    // categories: [],
    androidMode : "date",
    title: "",
    body: "",
    cat_title: "Kategori Seç"
  };

  // get category 
  componentDidMount(){
    this.props.getCategories(this.props.userData.token)
  }
 
  //  ***FONKSIYONLAR***
  dateTimePicking = () => {
    
    const { show, dateValue, pickerMode, dateModalVisible, title, body, cat_id, date } = this.state
    if (this.props.newTaskStatus == 'newTask') { // + butonuna basÄ±nca calÄ±sacak olan kÄ±sÄ±m 
      return (
       <ScrollView style={styles.container}>
          <TextInput
            style={styles.taskHeaderInput}
            placeholder="İşin Adı"
            multiline
            onChangeText={(text) => {
              this.setState({
                title: text
              })
            }}>
          </TextInput>
          <TextInput
            style={styles.taskInfoInput}
            placeholder="İşin Tanımı"
            multiline
            onChangeText={(value) => {
              this.setState({
                body: value
              })
            }}>
          </TextInput>
          <TouchableOpacity
            style={styles.openButton}
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <Text style={styles.textStyle}>{this.state.cat_title}</Text>
          </TouchableOpacity>
      
          <View style={styles.calendar}>
          {

              <TouchableOpacity style={styles.dateButton}  onPress={() => {
                 //selinden gelen 
                 if(Platform.OS == "ios"){
                  this.showTimepicker(true);
                }else if(Platform.OS != "ios"){
                   this.showAndroidDatepicker();
                  // this.showTimepicker(false);
                }
               
              }}>
                  <Text style={styles.dateButtonText}>Tarih & Saat</Text>
                </TouchableOpacity>
        
          }
          </View>
          <View style={styles.focusButtonContainer}>
            <TouchableOpacity style={styles.focusButton} 
                              onPress = {() => {
                                if(cat_id != "" && title != "" && body != "" && date != ""){
                                  Actions.Users({title: title, body: body, cat_id: cat_id, date: date})
                                }else{
                                  Alert.alert("Uyarı","Boş alan bırakılamaz.")
                                }
                              }}>
              <Text style={styles.focusButtonText}>Hedefe Kitlen</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    )
    } else if(this.props.newTaskStatus == 'newCard'){ //sidebardan gelen yeni kart ekle sayfasında calÄ±scak kÄ±sÄ±m 
      return (
        <ScrollView style={styles.container}>
          <TextInput
            style={styles.taskHeaderInput}
            placeholder="İşin Başlığı"
            multiline
            onChangeText={(text) => {
              this.setState({
                title: text
              })
            }}>
          </TextInput>
          <TextInput
            style={styles.taskInfoInput}
            placeholder="İşin Tanımı"
            multiline 
            onChangeText={(value) => {
              this.setState({
                body: value
              })
            }}>
          </TextInput>
          <TouchableOpacity
            style={styles.openButton}
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <Text style={styles.textStyle}>{this.state.cat_title}</Text>
          </TouchableOpacity>
          <View style={styles.focusButtonContainer}>
            <TouchableOpacity style={styles.focusButton}
                              onPress={() => {
                                if(cat_id != "" && title != "" && body != ""){
                                  this.props.newCard(cat_id, title, body, this.props.userData.data.id, this.props.userData.token)
                               }else{
                                Alert.alert("Uyarı","Boş alan bırakılamaz")
                              }
                                }} >
              <Text style={styles.focusButtonText}>Hedefe Kitlen</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )
    }else{ //anaSayfadaki kartlara basÄ±lÄ±nca cÄ±kacak olan kÄ±sÄ±m 
      return (
        <ScrollView style={styles.container}>
          <View style={styles.taskHeaderView}>
           <Text style={styles.taskHeaderTxt}>{this.props.task.item == null ? "detay bulunamadÄ±" : this.props.task.item.title}</Text>
          </View>
          <View style={styles.taskInfoView}>
            <Text style={styles.taskInfoTxt}>{this.props.task.item == null ? "detay b ulunamadÄ±" : this.props.task.item.subTitle}</Text>
          </View>
          <View style={styles.calendar}>
            <TouchableOpacity style={styles.dateButton} onPress={() => {
                //selinden gelen 
                if(Platform.OS == "ios"){
                  this.showTimepicker(true);
                }else if(Platform.OS != "ios"){
                   this.showAndroidDatepicker();
                }
               
              }}>
              <Text style={styles.dateButtonText}>Tarih & Saat</Text>
            </TouchableOpacity>
           
          </View>
          <View style={styles.focusButtonContainer}>
            <TouchableOpacity style={styles.focusButton} 
                              onPress = {() => {
                                if(cat_id != "" && title != "" && body != "" && date != ""){
                                  Actions.Users({cat_id: this.props.task.item.cat_id, title: this.props.task.item.title, body: this.props.task.item.subTitle, date: date})
                                }else{
                                  Alert.alert("Uyarı","Boş alan bırakılamaz")
                                }
                              }}>
              <Text style={styles.focusButtonText}>Hedefe Kitlen </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    )
    }
  }

  getDateTime = () =>{
    // this.showMode("time")
    const { show, dateValue, pickerMode, dateModalVisible, androidMode } = this.state
    if(Platform.OS == "ios"){
      // console.log("nereye bu giriÅŸ");
      return(
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
                    <Text style={styles.dateModalText}>Ne zamanana kitlersin? </Text>
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
            // timeZoneOffsetInMinutes={0}
          />
        )}
      </TouchableOpacity>
          <TouchableOpacity
                style={styles.modalApplyBtn} //hide modal button
                onPress={() => {
                  this.showTimepicker(!dateModalVisible);
                }}>
                <Text style={styles.dateTextStyle}>Kitle artık</Text>
          </TouchableOpacity>
          <TouchableOpacity
                style={styles.modalCloseBtn} //hide modal button
                onPress={() => {
                  this.showTimepicker(!dateModalVisible);
                }}>
                <Text style={styles.dateTextStyle}>Vazgeç</Text>
          </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )
    }else{
      return(
        <TouchableOpacity style={ styles.date}>
              {this.state.show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={this.state.date}
            locale="tr"
            mode={androidMode}
            is24Hour={true}
            display="default"
            onChange={this.onChange}
          />
        )}
      </TouchableOpacity>
      )
    }
    
  }

  // radio button kategori listeleme
  categoriesRenderItem = ({item}) => {
    return(
      <View style={styles.radioButtonsContainer}>
        <View style={styles.radioButtonsInContainer}>
            <TouchableOpacity
              onPress={(cat_id) => this.setState({
                cat_id: item.id,
                selectedRadio: true,
                modalVisible: false,
                cat_title: item.title
              })
              }
              style= {{borderWidth:4,
                borderColor:'rgba(0,0,0,0.2)',
                alignItems:'center',
                justifyContent:'center',
                width: PhoneWidth * 0.05,
                height: PhoneHeight * 0.03,
                borderRadius:50,
                marginTop: 10,
                backgroundColor: ( this.state.cat_id == item.id) ? "#445c8b" : "white",
            
                }}/>
          <Text style={styles.radioButtonTitle} >{item.title}</Text>
          </View>
        </View>
    )
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
 onChange = (event, selectedDate) => {
  currentDate = selectedDate || this.state.date;
  if(Platform.OS == "ios"){
    this.setState({ show: Platform.OS === 'ios', date: currentDate })
    console.log("deneme ios" , moment(currentDate).format('LTS'));
  }else{
    if(this.state.androidMode == "date"){
      this.setState({  date: currentDate })
    console.log("android" , )
    this.showAndroidTimepicker();
    }else{
      // this.state.aDate.concat(currentDate);
      this.setState({  date: currentDate,
                       show: false})
      console.log("else :" ,moment(currentDate).format('LTS'));
    }
  }
  console.log("onchange")
  console.log("date :",this.state.aDate)
};
  showMode = (currentMode) => {
    this.setState({ show: true, mode: currentMode })
 };
showTimepicker = (visible) => {
     this.showMode("date")
     this.setState({ dateModalVisible: visible });
 };
 // For ANDROID
 showModeAndroid = (currentMode) => {
  this.setState({ show: true })
  console.log("showmode")
};
showAndroidDatepicker = () => {
  this.setState({
    androidMode: "date"
  })
   this.showModeAndroid();
   console.log("showdatepicker")
};
showAndroidTimepicker = () => {
this.setState({
  androidMode: "time"
})
this.showModeAndroid(true);
console.log("showtimepicker")
};
  render() {
    const { show, dateValue, pickerMode, modalVisible, dateModalVisible, categories, title, body} = this.state
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
                style={styles.closeButtonWithoutSaving}
                onPress={() => {
                  this.setState({
                    modalVisible: false
                  });
                }}
              >
                <Image style={styles.dontSaveClose} source={require('../../images/arrow.png')} />
              </TouchableOpacity>
              <FlatList // listing category
                data={this.props.categories}
                renderItem={this.categoriesRenderItem}
                keyExtractor={item => item.id}
                />
            </View>
          </View>
        </Modal>
        <this.getDateTime/>

        <View style={styles.header}>
          <Text style={styles.headerText}>Merhaba, {this.props.userData.data.fullName}{"\n"}Birine iş kitlemek için harika bir gün!</Text>
        </View>
        <this.dateTimePicking/>
      </View>  
    )
    }
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingLeft: responsiveSize(15),
    paddingRight: responsiveSize(15),
  },
  header: {
    flex: 0.2,    
    height: PhoneHeight * 0.30,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: responsiveSize(19),
    color: "#445c8b",
    fontWeight: "bold"
  },
  taskHeaderInput: {
    borderWidth: 1.5,
    width: PhoneWidth * 0.85,
    height: PhoneHeight * 0.07,
    borderColor: "#445c8b",
    borderRadius: 8,
    textAlign: "center",
    fontSize: responsiveSize(13),
    alignSelf: "center",
  },
  taskInfoInput: {
    borderWidth: 1.5,
    width: PhoneWidth * 0.85,
    height: PhoneHeight * 0.25,
    borderColor: "#445c8b",
    borderRadius: 8,
    fontSize: responsiveSize(14),
    marginTop: 20,
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "top"
    },
  taskHeaderView:{
    borderWidth: 1.5,
    width: PhoneWidth * 0.85,
    height: PhoneHeight * 0.07,
    borderColor: "#445c8b",
    borderRadius: 8,
    alignSelf: "center",
  },
  taskHeaderTxt:{
    textAlign: "center",
    fontSize: responsiveSize(15),
    width: PhoneWidth * 0.85,
    height: PhoneHeight * 0.07,
    
  },
  taskInfoView: {
    borderWidth: 2,
    width: PhoneWidth * 0.85,
    height: PhoneHeight * 0.25,
    borderColor: "#445c8b",
    borderRadius: 8,
    textAlign: "center",
    fontSize: responsiveSize(15),
    marginTop: 20,
    alignSelf: "center",
  },
  taskInfoTxt:{
    textAlign: "center",
    fontSize: responsiveSize(15),
    marginTop: 20,
    alignSelf: "center",

  },
  dateButton: {
    width: PhoneWidth * 0.38,
    borderWidth: 1.5,
    height: PhoneHeight * 0.057,
    borderRadius: 8,
    borderColor: "#445c8b",
    alignSelf: 'center',
    justifyContent:'center',
  },
  dateButtonText: {
    textAlign: "center",
    color: "#445c8b",
    fontSize: responsiveSize(13),  
  },
  timeButton: {
    width: PhoneWidth * 0.38,
    borderWidth: 2,
    height: PhoneHeight * 0.057,
    borderRadius: 8,
    borderColor: "#445c8b",
    marginRight: 16
  },
  timeButtonText: {
    textAlign: "center",
    color: "#445c8b",
    fontSize: responsiveSize(15),
    marginTop: 5
  },
  focusButtonContainer: {
    paddingTop: responsiveSize(10)
  },
  focusButton: {
    width: PhoneWidth * 0.85,
    borderWidth: 2,
    height: PhoneHeight * 0.057,
    borderColor: "#445c8b",
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "#445c8b",
    justifyContent:'center'
  },
  focusButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: responsiveSize(15),
    textAlign: "center"
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
    borderWidth: 1.5,
    height: PhoneHeight * 0.057,
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: "#445c8b"
},
textStyle: {
    color: "#445c8b",
    textAlign: "center",
    fontSize: responsiveSize(13)
},
centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'flex-end',
    borderWidth: 0
},
modalView: {
    backgroundColor: "white",
    padding: 35,
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: '#445c8b',
    width: PhoneWidth,
    height: PhoneHeight * 0.3,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
},
closeButtonWithoutSaving:{
    width: PhoneWidth * 0.08,
    height: PhoneHeight * 0.03,
    alignSelf: "flex-end"
},
dontSaveClose:{
  width: PhoneWidth * 0.05,
  height: PhoneHeight * 0.03,
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
modalApplyBtn: {
  backgroundColor:'white',
  borderRadius: 10,
  width:PhoneWidth*0.4,
  height:PhoneHeight*0.04,
  flexDirection:'row',
  justifyContent:'center',
  marginTop:2,
},
modalCloseBtn:{
  backgroundColor:'white',
  borderRadius: 10,
  width:PhoneWidth*0.4,
  height:PhoneHeight*0.04,
  flexDirection:'row',
  justifyContent:'center',
  marginTop:8,
},
dateTextStyle: {
  fontSize:17,  
  color: "black",
  alignSelf:'center'
},
dateModalText: {
  width:PhoneWidth*0.8,
  height:PhoneHeight*0.06,
  paddingTop:-10,
  fontSize:17,
  textAlign:'center'
},
date:{
  width:PhoneWidth*0.7
},radioButtons:{
  borderWidth:4,
  borderColor:'rgba(0,0,0,0.2)',
  alignItems:'center',
  justifyContent:'center',
  width: PhoneWidth * 0.05,
  height: PhoneHeight * 0.03,
  borderRadius:50,
  marginTop: 10,
},
radioButtonsContainer:{
  flexDirection: "column",
  width: PhoneWidth
},
radioButtonsInContainer:{
flexDirection: "row",
width: PhoneWidth * 0.75,
},
radioButtonTitle:{
marginTop: 8.5,
fontSize: responsiveSize(15),
marginLeft: 5
}
});
const mapStateToProps = (state) => {
  const {  emailValue, passwordValue ,idValue, userData} = state.authenticationReducer;
  const { categories } = state.createTaskReducer;
  return {
      emailValue,
      passwordValue,
      idValue,
      userData,
      categories
  }
}
export default connect(
  mapStateToProps,
  {
    getCategories,
    newCard
  
  }
)(CreateTask)