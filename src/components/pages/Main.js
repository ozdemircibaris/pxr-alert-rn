import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, Button, TouchableOpacity, ScrollView} from 'react-native';
// import Header from '../leftBar/Header';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { color } from 'react-native-reanimated';
import { PhoneWidth, PhoneHeight } from '../config/env';
// import { TouchableOpacity } from 'react-native-gesture-handler';


const mission = [
  { id: "1", title: "Çöp At", body: "Ofisten çıkmadan önce tüm çöpleri at", color: "#ffaaff" },
  { id: "1", title: "Temizlik", body: "Yarın toplu temizlik yapılacak.", color: "#ffff7f" },
  { id: "1", title: "Hatırlatma", body: "Birlikte yapılacak işi unutma.!!", color: "#55ffff" },
  { id: "1", title: "Randevu", body: "Birazdan müşteri görüşmesi var. Unutma!", color: "#aaaaff" },
  { id: "1", title: "Bulaşıkları Yıka", body: "Ofise geldiğinde bulaşıkları yıkamayı unutma", color: "#aaff7f" },
  { id: "1", title: "İş", body: "Yarına yetiştirilecek iş var unutma.", color: "#ffaa7f" },
  { id: "1", title: "Toplantı", body: "Yarın saat 2:00' de toplantı var unutma unutturma.", color: "#d991d9" },
]


export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {


    return (

      <View style={styles.container}>
        <Text style={styles.containertext}>Merhaba Murat.</Text>
        <Text style={styles.containertext}>Sana kitlenenler burda</Text>


        <View style={styles.missionFirst}></View>
        <View style={styles.body}>
          <ScrollView>

            {mission.map(item => {
              return (
                <View style={styles.a} key={item.id}>
                  <View style={styles.hr}></View>
                  <View style={styles.circle} backgroundColor={item.color}></View>
                  <View style={styles.mission}>
                    <Text>{item.title}</Text>
                    <Text>{item.body}</Text>
                    <View style={styles.categoryColor} backgroundColor={item.color} ></View>
                  </View>
                </View>
              )
            })}




          </ScrollView>
        </View>
        <View style={styles.end}></View>
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity={.5}>

          <Text style={styles.TextStyle}> + </Text>

        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: 'center',
    // margin: 10,
    backgroundColor: '#ffffff',
    // alignItems: 'center'

  },
  missionFirst: {
    backgroundColor: 'cyan',
    width: PhoneWidth * 0.68,
    height: PhoneHeight * 0.2,
    borderColor: 'white',
    borderWidth: 1,
    top: 45,
    left: 72,
    borderRadius: 10
  },
  mission: {
    width: PhoneWidth * 0.565,
    height: PhoneHeight * 0.12,
    borderWidth: 1,
    borderColor: '#d8d8d8',
    left: 83,

  },
  containertext: {
    left: 40,
    fontWeight: 'bold',
    top: 10
  },
  // title: {
  //   color: 'white',
  //   left: 50,
  //   fontSize: 25,
  //   top: 6
  // },
  // text: {
  //   color: 'white',
  //   left: 30,
  //   top: 10,

  // },
  body: {
    backgroundColor: 'white',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    borderWidth: 0,
    width: PhoneWidth * 1,
    height: PhoneHeight * 0.459,
    top: 75,
    padding: 20
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },

  end: {
    flexDirection: 'row',
    width: PhoneWidth * 1,
    borderTopWidth: 1,
    borderTopColor: '#d8d8d8',
    justifyContent: 'center',
    // alignItems: '',
    top: 90
  },
  SubmitButtonStyle: {
    height: PhoneHeight * 0.072,
    width: PhoneWidth * 0.12,
    backgroundColor: '#4d6af9',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    left: 180,
    top: 65
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  categoryColor: {
    borderWidth: 0,
    height: PhoneHeight * 0.016,
    width: PhoneWidth * 0.027,
    // backgroundColor:'purple',
    borderRadius: 20,
    top: 5,
    left: 10
  },
  a: {
    flexDirection: 'row',
    // borderWidth:1,
    height: PhoneHeight * 0.132,
    borderWidth: 0
  },
  hr: {
    width: 0,
    height: PhoneHeight * 0.132,
    borderWidth: 1,
    left: 80,
    borderColor: '#d9d9d9',
    left: 60
  },
  circle: {
    borderWidth: 1,
    height: PhoneHeight * 0.02,
    width: PhoneWidth * 0.035,
    borderRadius: 20,
    borderColor: '#d8d8d8',
    left: 52,
    top: 35
  }
});

