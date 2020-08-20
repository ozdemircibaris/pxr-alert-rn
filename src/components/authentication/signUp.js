import React, { Component } from 'react';
import { Text, View ,StyleSheet,Image, ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

export default class SignIn extends Component {
    render() {
        return (
          <LinearGradient colors={['#5701d4', '#5b00bf', '#9300c0']} style={styles.linearGradient}>
                 <View >
                </View>
            </LinearGradient>  
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
         paddingLeft: 15,
         paddingRight: 15,
         borderRadius: 5
       },
  });