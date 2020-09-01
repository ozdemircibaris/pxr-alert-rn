import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, Button, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { color } from 'react-native-reanimated';
import { PhoneWidth, PhoneHeight, responsiveSize } from '../config/env';

const mission = [
  { id: "1", title: "Çöp At", body: "Ofisten çıkmadan önce tüm çöpleri at", color: "#FFA1AC" },
  { id: "1", title: "Temizlik", body: "Yarın toplu temizlik yapılacak.", color: "#ff78" },
  { id: "1", title: "Hatırlatma", body: "Birlikte yapılacak işi unutma.!!", color: "#A2D5F2" },
  { id: "1", title: "Randevu", body: "Birazdan müşteri görüşmesi var. Unutma!", color: "#C3AED6" },
  { id: "1", title: "Bulaşıkları Yıka", body: "Ofise geldiğinde bulaşıkları yıkamayı unutma", color: "#ADE498" },
  { id: "1", title: "İş", body: "Yarına yetiştirilecek iş var unutma.", color: "#FFBB91" },
  { id: "1", title: "Toplantı", body: "Yarın saat 2:00' de toplantı var unutma unutturma.", color: "#FF847C" },
];

const Item = ({ title, body, color }) => (
  <View style={styles.taskBox} >
    <View style={styles.categoryColorView}>
      <View style={styles.hr}>
        <View style={styles.circle} backgroundColor={color}></View>
      </View>
    </View>
    <TouchableOpacity style={styles.taskBodyBox}>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </TouchableOpacity>
  </View>
);

export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  missionRenderItem = ({ item }) => (
    <Item title={item.title} body={item.body} color={item.color} />
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Merhaba Murat.</Text>
          <Text style={styles.containerText}>Sana kitlenenler burda</Text>
        </View>
        <View style={styles.currentTask}></View>
        <View style={styles.body}>
          <ScrollView>
            <FlatList
              data={mission}
              renderItem={this.missionRenderItem}
              keyExtractor={item => item.id}
            />
          </ScrollView>
        </View>
        <View style={styles.buttonView}>
          <View style={styles.end}>
          <TouchableOpacity
            style={styles.submitButton}
            activeOpacity={.5}>
          </TouchableOpacity>
          </View>  
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
    marginTop: 20,
    marginLeft: 20,
    fontSize: responsiveSize(15)
  },
  greetingContainer: {
    marginTop: 20
  },
  containerText: {
    marginTop: 5,
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
    height: PhoneHeight * 0.50,
    paddingLeft: 20,
    borderWidth:0
  },
  taskBox: {
    flex: 0,
    flexDirection: 'row',
    height: PhoneHeight * 0.13,
    width: PhoneWidth * 0.75,
    marginLeft: 20
  },
  taskBodyBox: {
    width: PhoneWidth * 0.57,
    height: PhoneHeight * 0.10,
    borderWidth: 1,
    borderColor: '#d8d8d8',
    marginLeft: 20,
    marginTop: 0
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
    marginTop:6,
    borderWidth: 0,
    height: 0
  },
  end: {
    flexDirection: 'row',
    width: PhoneWidth ,
    borderTopWidth: 1,
    borderTopColor: 'black',
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center'
  },
  submitButton: {
    height: PhoneHeight * 0.072,
    width: PhoneWidth * 0.12,
    backgroundColor: '#4d6af9',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    
  },
});

