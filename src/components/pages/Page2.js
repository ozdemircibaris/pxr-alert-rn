import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Page2 extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <View>
            <View style = {styles.container}>
                <Text style = {styles.title}> Kart Ekle </Text>
            </View>
        </View>        
      );
  }
}

const styles = StyleSheet.create({
       
});