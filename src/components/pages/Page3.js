import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, Button, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Header from '../helpComponents/Header';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { color } from 'react-native-reanimated';
import { PhoneWidth, PhoneHeight,responsiveSize} from '../config/env';


const mission = [
  { id: "1", title: "Çöp At", body: "Ofisten çıkmadan önce tüm çöpleri at", color: "#ffa1ac" },
  { id: "2", title: "Temizlik", body: "Yarın toplu temizlik yapılacak.", color: "#ff78" },
  { id: "3", title: "Hatırlatma", body: "Birlikte yapılacak işi unutma.!!", color: "#a2d5f2" },
  { id: "4", title: "Randevu", body: "Birazdan müşteri görüşmesi var. Unutma!", color: "#c3aed6" },
  { id: "5", title: "Bulaşıkları Yıka", body: "Ofise geldiğinde bulaşıkları yıkamayı unutma", color: "#ade498" },
  { id: "6", title: "İş", body: "Yarına yetiştirilecek iş var unutma.", color: "#ffbb91" },
  { id: "7", title: "Toplantı", body: "Yarın saat 2:00' de toplantı var unutma unutturma.", color: "#ff847c" },
];

const Item = ({ title, body, color }) => (
  <View style={styles.missionBox} >
  
    <View style={styles.missionBodyBox} backgroundColor={color}>
      <View style={styles.headersBtn}><Text style={styles.titleTxt}>{title}</Text>
      <Text style={styles.infoTxt}>{body}</Text></View>
      
    </View>
  </View>
);
export default class Page3 extends Component {
  constructor(props) {
    super(props);
  }
  missionRenderItem= ({ item }) => (
    <Item title={item.title} color={item.color} body={item.body}/>
  );

render() {
  return (

   <View style={styles.container}>
       
      <View style={styles.body}>
      <Text style={styles.greetingtext}>Merhaba Murat.</Text>
        <Text style={styles.containertext}>Sana kitlenenler burda</Text>

          <ScrollView>
            <FlatList style = {styles.missions}
                data={mission}
                renderItem={this.missionRenderItem}
                keyExtractor={item => item.id}
              />
          </ScrollView>
      </View>
      <View style={styles.end}></View>
        <TouchableOpacity
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
    // backgroundColor:'pink',
   

  },infoTxt:{
    alignSelf:'center',
    paddingTop:'5%',
  },
  missionBodyBox: {
    width:PhoneWidth * 0.8,
    height: PhoneHeight * 0.15,
    borderWidth: 0,
    borderRadius:10,
    borderColor: '#d8d8d8',
  },missionBox:{
    justifyContent:'center',
    paddingBottom:'5%',
  }
  ,containertext: {
    fontSize:14,
    paddingBottom:9,
  }
  ,greetingtext:{
    fontSize:14,
    paddingTop:6,
  },
  titleTxt:{
    paddingTop:'10%',
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
    paddingTop:'8%'
  }
  
  
});

