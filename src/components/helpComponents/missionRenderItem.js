import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ScrollView, FlatList, Modal, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {deleteCard, listCard, listTasks, getTasks} from '../../actions/mainAction';
import { Actions } from 'react-native-router-flux';
import { PhoneHeight, PhoneWidth, responsiveSize } from '../config/env';

class MissionRenderItem extends Component {
    constructor(props){
        super(props);
        this.state = {
          id: this.props.idValue,
          data: this.props.userData,
          missionDate: [],
          minDate: [],
          deleteModal: false,
          item: "",
          currentTask: [this.props.minDate[0]]
        }
      }

      setModalVisible = (visible) => {
        this.setState({ deleteModal: visible });
      }
    render() {
        const { item } = this.props;
        return (
            <View style={styles.taskBox} >
                <Modal
          animationType="fade"
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
                  this.props.deleteCard(this.state.item.id, this.props.userData.token, this.state.item);
                  this.setModalVisible(false);
                }}>
                <Text style={styles.yesnoTextStyle}>Evet</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  // silmeden modalı kapatır
                  this.setModalVisible(false);
                }}
              >
                <Text style={styles.yesnoTextStyle}>Hayır</Text> 
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
       <View style={styles.categoryColorView} >
       {/* <View style={styles.hr} /> */}
        <View style={styles.circle}
              backgroundColor={item.taskCategoriesModel != undefined ? item.taskCategoriesModel.color : null}></View>
        <TouchableOpacity
           onPress= {() => {
            this.setModalVisible()
            this.setState({ item })
            }}
           style={styles.deleteButton} >
      <Image style= {styles.iconImg} source={require('../../images/deleteIcon.png')}></Image>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      onPress={() => Actions.CreateTask({newTaskStatus: 'card', task: {item}})}
      style={styles.taskBodyBox}>
        <View style={styles.taskItemTitle}>
        <Text >{item.title}</Text>
      <Text style={ styles.cardSubtitleText}>{item.subTitle}</Text>
        </View>
    </TouchableOpacity>
  </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    greetingText: {
      marginLeft: 20,
      fontSize: responsiveSize(15)
    },
    greetingContainer: {
      marginTop: responsiveSize(10)
    },
    containerText: {
      marginTop: 0,
      marginLeft: 20,
      fontSize: responsiveSize(15)
    },
    currentTask: {
      alignSelf: "center",
      width: PhoneWidth * 0.87,
      height: PhoneHeight * 0.10,
      borderRadius: 10,
      marginTop: 20
    },
    body: {
      marginTop: 20,
      height: PhoneHeight * 0.45,
      paddingLeft: 20,
      borderWidth:0
    },
    taskBox: {
      flex: 0,
      flexDirection: 'row',
      height: PhoneHeight * 0.13,
      width: PhoneWidth * 0.75,
      marginLeft: 20,
    },
    taskBodyBox: {
      width: PhoneWidth * 0.57,
      height: PhoneHeight * 0.10,
      borderWidth: 1,
      borderColor: '#d8d8d8',
      marginLeft: 20
    },
    categoryColorView: {
      marginLeft: 20,
      // borderWidth: 1,
    },
    hr: {
      width: 1,
      height: PhoneHeight * 0.132,
      borderWidth: 1,
      marginLeft: 20,
      borderColor: 'black',
      alignItems: "center",
      zIndex: 1,
      borderColor: '#d9d9d9'
    },
    circle: {
      borderWidth: 1,
      height: PhoneHeight * 0.02,
      width: PhoneWidth * 0.035,
      borderRadius: 20,
      borderColor: '#d8d8d8',
      left: 0,
      alignSelf: "center"
    },
    buttonView:{
      alignItems: 'center',
      marginBottom: responsiveSize(8)
    },
    submitButton: {
      height: PhoneHeight * 0.082,
      width: PhoneWidth * 0.15,
      borderRadius: 30,
      borderWidth: 1,
      borderColor: '#fff'
    },
    plusIcon: {
      alignSelf:'center',
      width: responsiveSize(45),
      height: responsiveSize(45)
    },
    taskItemTitle:{
      fontWeight: "bold",
      margin: 8
    },
    deleteButton:{
      width: PhoneWidth * 0.05,
      height: PhoneHeight * 0.04,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      top: 10,
      borderWidth: 0,
      zIndex: 99
    },
    iconImg:{
      height: responsiveSize(15),
      width: responsiveSize(15),
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
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
    modalButtons:{
      alignSelf:'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: PhoneWidth * 0.7,
      height: PhoneHeight *0.05,
      borderWidth: 0,
    },
    closeButton: {
      justifyContent:'center',
      backgroundColor: "#7b344c",
      borderRadius: 10,
      width: PhoneWidth * 0.25,
      height: PhoneHeight * 0.06
    },
    deleteModalButton: {
      justifyContent:'center',
      backgroundColor: "#7b344c",
      borderRadius: 10,
      width: PhoneWidth * 0.25,
      height: PhoneHeight * 0.06
    },
    yesnoTextStyle: {
      color: "white",
      fontSize: responsiveSize(15),
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      textAlign: "center",
      fontSize: responsiveSize(15)
    },
    jobTitle:{
      fontWeight: 'bold',
      fontSize: responsiveSize(20),
      alignSelf:'center',
      color:'black',
      marginTop: 13,
      marginBottom: 5
    },
    subTitle:{
      fontSize: responsiveSize(17),
      alignSelf:'center',
      color:'black'
    },
    jobDate:{
      fontSize: responsiveSize(15),
      color:'black',
      alignSelf:'center'
    },
    userNameText:{
      fontWeight: "bold"
    }
  });

  const mapStateToProps = (state) => {
    const {  emailValue, passwordValue ,idValue, userData} = state.authenticationReducer;
    const { mainCards, mainTasks, dateArray, minDate, mission, tasks, missionDate , taskDate} = state.mainReducer;
    const { cards } = state.createTaskReducer;
    return {
        emailValue,
        passwordValue,
        idValue,
        userData,
        mainCards,
        mainTasks,
        dateArray,
        minDate,
        mission,
        tasks,
        missionDate,
        cards,
        taskDate
    }
  }
  
  export default connect(
    mapStateToProps,
    {
      deleteCard,
      listCard,
      listTasks,
      getTasks
    }
  )(MissionRenderItem)
  