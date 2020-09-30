import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, Button, TouchableOpacity, ScrollView, FlatList,Modal } from 'react-native';
import Header from '../helpComponents/Header';
import Sidebar from '../helpComponents/sideBar'
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { color } from 'react-native-reanimated';
import { PhoneWidth, PhoneHeight,responsiveSize} from '../config/env';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import {getData, deleteTask} from '../../actions/MyTasksAction';

 export class MyTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idValue:"",
      deleteModal: false,

    }
  }


  setModalVisible = (visible) => {
    this.setState({ deleteModal: visible });
  }
  
  missionRenderItem= ({ item }) => { 
    console.log(item)
    return(
      <View style={styles.missionBox} >
  
      <View style={styles.missionBodyBox} backgroundColor={item.taskCategoriesModel.color}>
      
      <TouchableOpacity 
           onPress= {() => {this.setModalVisible()
                           this.setState({
                             item
                           })}}
           style={styles.deleteButton} >
      
      </TouchableOpacity>

  <View style={styles.headersBtn}><Text style={styles.titleTxt}>{item.title}</Text>
   <Text style={styles.infoTxt}>{item.subTitle}</Text>
   <Text style={styles.infoTxt}>{moment(item.jobDate).format("llll")}</Text>
   </View>
 
        
      </View>
    </View>
    )
    };

  componentWillMount(){ 
    this.props.getData(this.props.userData.token, this.props.userData.data.id);
    
  }
  
render() {
 
 
  return (
   <View style={styles.container}>
      <View style={styles.body}>
      <Text style={styles.greetingtext}>Merhaba {this.props.userData.data.fullName}</Text>
        <Text style={styles.containertext}>Sana kitlenenler burda</Text>
            <FlatList style = {styles.missions}
                data={this.props.myTasks}
                renderItem={this.missionRenderItem}
                keyExtractor={item => item.id}
              />
      </View>
      <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.deleteModal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Silmek istediğinize emin misiniz ?</Text>
              <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.deleteModalButton}
                onPress={() => {
                  // sildikten sonra modalı kapatır
                  this.props.deleteTask(this.state.item,this.props.userData.token);
                  this.setModalVisible(false);
                }}
              >
                <Text style={styles.textStyle}>Evet</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  // silmeden modalı kapatır
                  this.setModalVisible(false);
                }}
              >
                <Text style={styles.textStyle}>Hayır</Text> 
               
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal> 

      <View style={styles.end}></View>

        <TouchableOpacity
          onPress={() => Actions.CreateTask({task: "", newTaskStatus: "newTask"})}
          style={styles.SubmitButtonStyle}
          activeOpacity={.5}>
          <Image style ={styles.TextStyle} source={require('../../images/plus.png')}/>
        </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#ffffff',
    alignItems:'center',
    justifyContent:'center'
  },
  headersBtn:{

  },
  infoTxt:{
    alignSelf:'center',
    paddingTop:'6%',
  },
  missionBodyBox: {
    width:PhoneWidth * 0.8,
    height: PhoneHeight * 0.15,
    borderWidth: 0,
    borderRadius:10,
    borderColor: '#d8d8d8',
  },
  missionBox:{
    justifyContent:'center',
    paddingBottom:'5%',
  }
  ,containertext: {
    fontSize:14,
    paddingBottom:9,
  }
  ,greetingtext:{
    fontSize:14,
    paddingTop:15,
  },
  titleTxt:{
    paddingTop:'5%',
    alignSelf:'center',
    fontWeight:'bold'
  }
  ,body: {
    backgroundColor: 'white',
    width:PhoneWidth * 0.9,
    height: PhoneHeight * 0.8,
    alignSelf:'center',
    justifyContent:'center',
    justifyContent:'space-between',
    borderWidth:0
  },
  TextStyle: {
    alignSelf:'center',
    width: responsiveSize(50), //buton size ı için responsive kullandık 
    height: responsiveSize(50),
    marginTop:0
  },missionBox:{
    alignItems:'center',
    padding:10
  },
  SubmitButtonStyle:{
    paddingTop:'1%'
  },
  // deleteButton: {
  //   borderWidth: 1,
  //   width: PhoneWidth * 0.05,
  //   height: PhoneHeight * 0.02,
  //   alignSelf: 'flex-end',
  //   backgroundColor: 'black',
  //   borderRadius: 5
  // },
  iconImg:{
    height: PhoneHeight * 0.027,
    width: PhoneWidth * 0.053,
  },
  modalView: {
    width: PhoneWidth * 0.85,
    height: PhoneHeight * 0.25,
    margin: 20,
    backgroundColor: "#e1d9e2",
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  modalText: {
    textAlign: "center",
    fontSize: responsiveSize(15)
  },
  modalButtons:{
    alignSelf:'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: PhoneWidth * 0.7,
    height: PhoneHeight *0.05,
    borderWidth: 0,
  },
  deleteModalButton: {
    justifyContent:'center',
    backgroundColor: "#7b344c",
    borderRadius: 10,
    width: PhoneWidth * 0.25,
    height: PhoneHeight * 0.06
  },
  textStyle: {
    alignSelf:'center',
    width: responsiveSize(45),
    height: responsiveSize(45),
    marginTop:20
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  closeButton: {
    justifyContent:'center',
    backgroundColor: "#7b344c",
    borderRadius: 10,
    width: PhoneWidth * 0.25,
    height: PhoneHeight * 0.06
  },
});
const mapStateToProps = (state) => {
  const {  emailValue, passwordValue ,idValue,userData} = state.authenticationReducer;
  const { myTasks } = state.MyTasksReducer;
  const {tasks} = state.usersReducer;
  return {
      emailValue,
      passwordValue,
      idValue,
      userData,
      myTasks,
      tasks
  }
}
export default connect(
  mapStateToProps,
  {
  getData,
  deleteTask
  }
)(MyTasks)
