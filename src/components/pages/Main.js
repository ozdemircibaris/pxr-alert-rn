import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, FlatList,Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { PhoneWidth, PhoneHeight, responsiveSize } from '../config/env';
import { connect } from 'react-redux';
import moment from 'moment';
import {deleteCard, listCard, listTasks, getTasks} from '../../actions/mainAction';
import createTaskReducer from '../../reducers/createTaskReducer';
import { Header } from 'react-native/Libraries/NewAppScreen';
import MissionRenderItem from '../helpComponents/missionRenderItem';

export  class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.idValue,
      data: this.props.userData,
      deleteModal: false,
      item: "",
    }
  }

  setModalVisible = (visible) => {
    this.setState({ deleteModal: visible });
  }

  componentWillMount() {
    this.props.getTasks(this.props.dateArray, this.props.minDate, this.props.userData.data.id, this.props.userData.token);
    this.props.listCard(this.props.userData.token, this.props.userData.data.id , this.props.mainCards)
  }
 
  render() {
    const {taskDate} = this.props;
    console.log("taskDate", taskDate)
    return (
      <View style={styles.container}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Merhaba,
            <Text style= {styles.userNameText}>{this.props.userData.data.fullName}</Text></Text>
          <Text style={styles.containerText}>Sana kitlenenler burda.</Text>
        </View> 
        {
          taskDate 
          ? 
          <ScrollView style={styles.currentTask} backgroundColor= {taskDate != undefined ? taskDate.taskCategoriesModel.color : null}>
        <Text style={styles.jobTitle}>{taskDate != undefined ? taskDate.title : null}</Text>
          <Text style={styles.subTitle}> {taskDate != undefined ? taskDate.subTitle : null} </Text>
          <Text style={styles.jobDate}>{taskDate != undefined ? moment(taskDate.jobDate).format("llll") : null}</Text>
        </ScrollView> 
        :
        <ScrollView style={styles.currentTask} >
        <Text style={{...styles.subTitle, fontWeight: "bold", color: "#2a2124"}}>Kitlenmiş bir işiniz bulunmamaktadır.</Text>
          
        </ScrollView>
        }
        
        <View style={styles.body}>
          <FlatList
            data={this.props.mainCards}
            renderItem={({item}) => <MissionRenderItem item={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={() => Actions.CreateTask({task: "", newTaskStatus: "newTask"})}
            style={styles.submitButton}
            activeOpacity={.5}>
              <Image style ={styles.plusIcon} source={require('../../images/add.png')}/>
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
    borderWidth: 0
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
  const {idValue, userData} = state.authenticationReducer;
  const { mainCards, dateArray, minDate, taskDate} = state.mainReducer;
  const { cards } = state.createTaskReducer;
  return {
      idValue,
      userData,
      mainCards,
      dateArray,
      minDate,
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
