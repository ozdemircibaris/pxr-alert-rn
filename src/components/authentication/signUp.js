import React, { Component } from 'react';
import { Button,Text, TextInput,View ,StyleSheet,Image, ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';


export default class SignIn extends Component {
    render() {
      
        return (
          <LinearGradient  colors={['#5701d4', '#5b00bf', '#9300c0']} style={styles.linearGradient}>
            <Image style={styles.colorfulCircle ,{width:75,height:75}}
            source={require('../pages/color-circle.png')}>
            </Image>

            <TextInput style={styles.input}
                        placeholder='AD SOYAD'
                        autoCapitalize="none"
                        placeholderTextColor='white'
                        onChangeText={val => this.onChangeText('username', val)}/>
            <TextInput style={styles.input}
                        placeholder='E-POSTA'
                        autoCapitalize="none"
                        placeholderTextColor='white'
                        onChangeText={val => this.onChangeText('username', val)}/>
            <TextInput style={styles.input}
                        placeholder='ŞİFRE'
                        autoCapitalize="none"
                        placeholderTextColor='white'
                        onChangeText={val => this.onChangeText('username', val)}/>
            <TextInput style={styles.input}
                        placeholder='ŞİFRE TEKRAR'
                        autoCapitalize="none"
                        placeholderTextColor='white'
                        onChangeText={val => this.onChangeText('username', val)}/>  
                <View style={[{ width: "67%", margin: 10,}]}>
                    <Button style={{ height: 40, width: 95}}
                        title='kayıt ol' 
                        color="#00d1db"/>                       
                </View>
                <Text>Hesabın varsa burda ne işin var?
                    <Text style={styles.login} onPress={()=> Actions.goToLogin()}> Giriş yap</Text>
                </Text>
            </LinearGradient>  
        )
    }
}

const styles = StyleSheet.create({
    linearGradient:{
         flex: 1,
         paddingLeft: 15,
         paddingRight: 15,
         justifyContent:"center",
         alignItems:"center"
        },
    input: {
        margin: 15,
        padding: 5,
        color: 'white',
        fontSize: 13,
        fontWeight: '500',
        textAlign:"center",
        borderColor:"#00d1db",
        borderWidth:2,
        marginBottom:2,
        borderRadius:8
        },
    button:{
          justifyContent:"center",
          alignItems:"center"
        },
    divText:{
          color:"black",
          fontWeight:"bold",
          fontSize:20
        },
    header:{
          flex:1,
          fontSize:40,
          fontWeight:"bold"    
        },
    login:{
          color:"#00d1db"
        },
    colorfulCircle:{
          flex:1,
          alignItems:"center",
          justifyContent:"center"
        }
  });