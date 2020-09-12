import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, Button, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { color } from 'react-native-reanimated';
import { PhoneWidth, PhoneHeight, responsiveSize } from '../config/env';
import { connect } from 'react-redux';

const mission = [
  { id: "1", title: "Hüseyin ve Murat Abiye Kahve", body: "Sabah gelince hüseyin ve murat abiye kahve yapılacak", color: "#FFA1AC" },
  { id: "2", title: "Temizlik", body: "Yarın toplu temizlik yapılacak!", color: "#ff78" },
  { id: "3", title: "Hatırlatma", body: "Birlikte yapılacak işi unutma!", color: "#A2D5F2" },
  { id: "4", title: "Randevu", body: "Birazdan müşteri görüşmesi var. Unutma!", color: "#C3AED6" },
  { id: "5", title: "Bulaşıkları Yıka", body: "Ofise geldiğinde bulaşıkları yıkamayı unutma!", color: "#ADE498" },
  { id: "6", title: "İş", body: "Yarına yetiştirilecek iş var unutma!", color: "#FFBB91" },
  { id: "7", title: "Toplantı", body: "Yarın saat 2:00'de toplantı var unutma,unutturma!", color: "#FF847C" },
];

const Item = ({ title, body, color }) => (
  <View style={styles.taskBox} >
    <View style={styles.categoryColorView}>
      <View style={styles.hr}>
        <View style={styles.circle} backgroundColor={color}></View>
      </View>
    </View>
    <TouchableOpacity 
      onPress={() => Actions.CreateTask({newTaskStatus: 'own'})}
      style={styles.taskBodyBox}>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </TouchableOpacity>
  </View>
);

export  class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.idValue

    }
   
    
  }
  // missionRenderItem = ({ item }) => (
  //   <Item title={item.title} body={item.body} color={item.color} item={item}/>
  // );
  missionRenderItem = ({ item }) => {
    return(
      <View style={styles.taskBox} >
    <View style={styles.categoryColorView}>
      <View style={styles.hr}>
        <View style={styles.circle} backgroundColor={item.color}></View>
      </View>
    </View>
    <TouchableOpacity 
      onPress={() => Actions.CreateTask({newTaskStatus: 'card', task: {item}})}
      style={styles.taskBodyBox}>
      <Text style={styles.taskItemTitle}>{item.title}</Text>
      <Text>{item.body}</Text>
    </TouchableOpacity>
  </View>
    )
    };

  render() {
    
    // console.log(mission);
    return (
      <View style={styles.container}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Merhaba Murat.</Text>
          <Text style={styles.containerText}>Sana kitlenenler burda</Text>
        </View>
        <View style={styles.currentTask}></View>
        <View style={styles.body}>
          <FlatList
            data={mission}
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
  }
});
const mapStateToProps = (state) => {
  const {  emailValue, passwordValue ,idValue} = state.authenticationReducer;
  return {
      emailValue,
      passwordValue,
      idValue
  }
}

export default connect(
  mapStateToProps,
  {
    
  
  }
)(Main)

