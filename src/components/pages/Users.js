import React, { Component } from 'react';
import { StyleSheet, View, Text, CheckBox, Image, Button, TouchableOpacity } from 'react-native';
// import Header from '../leftBar/Header';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { color } from 'react-native-reanimated';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {


        return (

            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.users}>
                        <CheckBox style={styles.checkbox}/>
                        <Text style={styles.usersName}>Do you like React Native?</Text>
                    </View>
                    <View style={styles.users}>
                        <CheckBox style={styles.checkbox}/>
                        <Text style={styles.usersName}>Do you like React Native?</Text>
                    </View>
                    <View style={styles.users}>
                        <CheckBox style={styles.checkbox}/>
                        <Text style={styles.usersName}>Do you like React Native?</Text>
                    </View>
                    <View style={styles.users}>
                        <CheckBox style={styles.checkbox}/>
                        <Text style={styles.usersName}>Do you like React Native?</Text>
                    </View>
                    <View style={styles.users}>
                        <CheckBox style={styles.checkbox}/>
                        <Text style={styles.usersName}>Do you like React Native?</Text>
                    </View>
                    <View style={styles.users}>
                        <CheckBox style={styles.checkbox}/>
                        <Text style={styles.usersName}>Do you like React Native?</Text>
                    </View>
                </View>
                <Button title="KİTLEEE!"></Button>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    body: {
        borderWidth: 1,
        width: 410,
        height: 350,
        top: 150,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding:0
        
    },
    users: {
        borderWidth: 1,
        width: 400,
        height: 40,
        left: 5,
        top: 0,
        flexDirection: 'row',
    },
    checkbox:{
        alignSelf: 'flex-start',
        left: 10,
    },
    usersName:{
        top:8,
        left: 60
    }
});