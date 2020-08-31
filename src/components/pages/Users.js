import React, { Component } from 'react';
import { StyleSheet, View, Text, CheckBox, Image, Button, TouchableOpacity, ScrollView, FlatList } from 'react-native';
// import Header from '../leftBar/Header';
import { Actions } from 'react-native-router-flux';
import { color } from 'react-native-reanimated';
import { PhoneWidth, PhoneHeight } from '../config/env';


const users = [
    { id: "1", info: "Murat Erdoğan" },
    { id: "2", info: "Seyithan Erdoğan" },
    { id: "3", info: "Barış Özdemirci" },
    { id: "4", info: "Sühacan Uluer" },
    { id: "5", info: "Emir Akkurt" },
    { id: "6", info: "Hüseyin Mercanlı" },
    { id: "7", info: "İlayda Arslan" },
    { id: "8", info: "Umut Güler" },
    { id: "9", info: "Berat Üçgül" },
    { id: "10", info: "Zeynep Altıparmak" }
];

const Item = ({ info }) => (
    <View style={styles.users} >
        <CheckBox style={styles.checkbox}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            title='checkbox 1'
            checkedColor='red'
            tintColors={{ true: 'black', false: 'black' }}
        // checked1={this.state.checked1}
        // onPress={() => this.setState({ checked1: !this.state.checked1 })}
        />
        <Text style={styles.usersName}>{info}</Text>
    </View>
);


export default class Main extends Component {
    constructor(props) {
        super(props);

    }
    usersRenderItem = ({item}) => {
        console.log(item);
        return <Item info={item.info} />
    }



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headertext}>Merhaba Murat</Text>
                    <Text style={styles.headertext}> Bu şerefe kimlerin nail olacağını seç</Text>
                </View>
                <View style={styles.body}>
                    <ScrollView>

                        <FlatList
                            data={users}
                            renderItem={this.usersRenderItem}
                            keyExtractor={item => item.id}
                        />



                    </ScrollView>
                </View>
                <TouchableOpacity
                    style={styles.end}
                    activeOpacity={.5}>

                    <Text style={styles.buttonText}> KİTLEEE! </Text>

                </TouchableOpacity>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    header: {
        borderWidth: 0,
        top: 70,
    },
    headertext: {
        fontSize: 17,
        color: 'black',
        left: 30,
    },
    body: {
        borderWidth: 0,
        width: PhoneWidth * 1,
        height: PhoneHeight * 0.47,
        top: 150,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: 0

    },
    users: {
        borderWidth: 0,
        width: PhoneWidth * 1,
        height: PhoneHeight * 0.0587,
        left: 5,
        top: 0,
        flexDirection: 'row',
    },
    checkbox: {
        alignSelf: 'flex-start',
        left: 10,
    },
    usersName: {
        top: 8,
        left: 60,
        color: 'black'
    },
    end: {
        height: PhoneHeight * 0.057,
        width: PhoneWidth * 0.55,
        top: 200,
        left: 90,
        backgroundColor: '#694ece',
        borderWidth: 0
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
        left: 70,
        top: 5
    }
});