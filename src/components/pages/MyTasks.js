import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { PhoneWidth, PhoneHeight,responsiveSize} from '../config/env';
import { connect } from 'react-redux';
import moment from 'moment';
import {getData, deleteTask} from '../../actions/MyTasksAction';

 export class MyTasks extends Component {
  constructor(props) {
    super(props);
  }
  missionRenderItem= ({ item }) => { 
    return(
      <View style= {styles.missionBox} >
        <ScrollView style= {styles.missionBodyBox} backgroundColor={item.taskCategoriesModel.color}>
          <View style= {styles.headersBtn}>
            <Text style= {styles.taskTitleText}>{item.title}</Text>
            <Text style= {styles.taskInfoText}>{item.subTitle}</Text>
            <Text style= {styles.taskInfoText}>{moment(item.jobDate).format("llll")}</Text>
          </View>   
        </ScrollView>
      </View>
    )
   };
  componentWillMount(){ 
    this.props.getData(this.props.userData.token, this.props.userData.data.id);
  }
render() {
  return (
   <View style= {styles.container}>
      <View style= {styles.body}>
       <Text style= {styles.greetingText}>Merhaba,
        <Text style= {styles.userNameText}> {this.props.userData.data.fullName}</Text> </Text>
       <Text style= {styles.greetingSubText}>Sana kitlenenler burda.</Text>
            <FlatList style= {styles.missions}
                data= {this.props.myTasks}
                renderItem= {this.missionRenderItem}
                keyExtractor= {item => item.id}
              />
      </View>
        <TouchableOpacity
          onPress= {() => Actions.CreateTask({task: "", newTaskStatus: "newTask"})}
          style= {styles.submitButtonStyle}
          activeOpacity= {.5}>
          <Image style = {styles.plusIcon} source={require('../../images/add.png')}/>
        </TouchableOpacity>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  },
  greetingText: {
    fontSize: responsiveSize(15),
    paddingTop: responsiveSize(15),
  },  
  userNameText: {
    fontWeight: "bold"
  },
  greetingSubText: {
    fontSize: responsiveSize(15),
    paddingBottom: responsiveSize(7)
  },
  body: {
    backgroundColor: "white",
    width: PhoneWidth * 0.9,
    height: PhoneHeight * 0.8,
    alignSelf: "center",
    justifyContent: "center",
    justifyContent: "space-around"
  },
  taskTitleText: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: responsiveSize(14),
    margin: responsiveSize(7)
  },
  taskInfoText: {
    alignSelf: "center",
    fontSize: responsiveSize(12),
      marginLeft: responsiveSize(7),
      marginRight: responsiveSize(7)
  },
  missionBodyBox: {
    width:PhoneWidth * 0.8,
    height: PhoneHeight * 0.15,
    borderRadius: 10,
    alignSelf: "center"
  },
  missionBox: {
    padding: responsiveSize(7)
  },
  plusIcon: {
    alignSelf: "center",
    width: responsiveSize(45), 
    height: responsiveSize(45),
    marginBottom: responsiveSize(8)
  },
});
const mapStateToProps = (state) => {
  const { userData} = state.authenticationReducer;
  const { myTasks } = state.MyTasksReducer;
  return {
      userData,
      myTasks
  }
}
export default connect(
  mapStateToProps,
  {
  getData,
  deleteTask
  }
)(MyTasks)
