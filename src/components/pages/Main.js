import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, Button, TouchableOpacity, ScrollView, FlatList,Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { color } from 'react-native-reanimated';
import { PhoneWidth, PhoneHeight, responsiveSize } from '../config/env';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import {deleteCard, listCard, listTasks, getTasks} from '../../actions/mainAction';
import {API_BASE} from '../config/env';
import createTaskReducer from '../../reducers/createTaskReducer';


export  class Main extends Component {
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
        
  componentWillMount() {
    this.props.getTasks(this.props.dateArray, this.props.minDate);
    this.props.listCard(this.props.userData.token, this.props.userData.data.id , this.props.mainCards)
    this.props.listTasks(this.props.userData.token, this.props.userData.data.id)
    console.log("a",this.props.minDate)}

  componentDidMount(){
    console.log("mission map", this.props.mainTasks)
  }
  modalRender = (item) =>{
    // console.log("bıktım",item.item.id)

    return(
      <View >
        <Text>{item.item.title}</Text>
        <Text> {item.item.subTitle} </Text>
        <Text>{moment(item.item.jobDate).format("llll")}</Text>
      </View>
    )
  }
  
 

  missionRenderItem = ({ item }) => {
    return(
      <View style={styles.taskBox} >
    <View style={styles.categoryColorView} >
      <View style={styles.hr}>
        <View style={styles.circle} backgroundColor={item.color}></View>
        <TouchableOpacity 
           onPress= {() => {this.setModalVisible()
                           this.setState({
                             item
                           })}}
           style={styles.deleteButton} >
      <Image style= {styles.iconImg} source={require('../../images/deleteIcon.png')}></Image>
      </TouchableOpacity>
      </View>
    </View>
    <TouchableOpacity 
      onPress={() => Actions.CreateTask({newTaskStatus: 'card', task: {item}})}
      style={styles.taskBodyBox}>
      <Text style={styles.taskItemTitle}>{item.title}</Text>
      <Text>{item.subTitle}</Text>
    </TouchableOpacity>
  </View>
    )
    };

  render() {
    const {minDate} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Merhaba {this.props.userData.data.fullName}</Text>
          <Text style={styles.containerText}>Sana kitlenenler burda</Text>
        </View> 
        {/* <View style={styles.currentTask}>
        <Text>{minDate[0].title}</Text>
          <Text> {minDate[0].subTitle} </Text>
          <Text>{moment(minDate[0].jobDate).format("llll")}</Text>
        </View> */}
        <View style={styles.currentTask}>
        <FlatList
            data={minDate}
            renderItem={this.modalRender}
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
                  this.props.deleteCard(this.state.item.id,this.props.userData.token);
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

        <View style={styles.body}>
          <FlatList
            data={this.props.cards}
            renderItem={this.missionRenderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={() => Actions.CreateTask({task: "", newTaskStatus: "newTask"})}
            style={styles.submitButton}
            activeOpacity={.5}>
              <Image style ={styles.TextStyle} source={require('../../images/plus.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    );
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
    marginTop: 5
  },
  containerText: {
    marginTop: 0,
    marginLeft: 20,
    fontSize: responsiveSize(14)
  },
  currentTask: {
    backgroundColor: 'pink',
    alignSelf: "center",
    width: PhoneWidth * 0.65,
    height: PhoneHeight * 0.20,
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
    borderWidth: 0.5,
    borderColor: '#d8d8d8',
    marginLeft: 20,
    marginTop:0,
  },
  categoryColorView: {
    marginLeft: 20,
  },
  hr: {
    width: 1,
    height: PhoneHeight * 0.132,
    borderWidth: 1,
    marginLeft: 20,
    borderColor: 'black',
    alignItems: "center",
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
  },
  submitButton: {
    height: PhoneHeight * 0.082,
    width: PhoneWidth * 0.15,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop:0
  },
  TextStyle: {
    alignSelf:'center',
    width: responsiveSize(45),
    height: responsiveSize(45),
    marginTop:20
  },
  taskItemTitle:{
    fontWeight: "bold"
  },
  deleteButton:{
    width: PhoneWidth * 0.04,
    height: PhoneHeight * 0.03,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    top: 10,
  },
  iconImg:{
    height: PhoneHeight * 0.027,
    width: PhoneWidth * 0.053,
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
  textStyle: {
    color: "white",
    fontSize: responsiveSize(15),
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    textAlign: "center",
    fontSize: responsiveSize(15)
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
)(Main)

