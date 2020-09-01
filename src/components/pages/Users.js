import React, { Component } from 'react';
import { StyleSheet, View, Text, CheckBox, Image, Button, TouchableOpacity, ScrollView, FlatList } from 'react-native';
// import Header from '../leftBar/Header';
import { Actions } from 'react-native-router-flux';
import { color } from 'react-native-reanimated';
import { PhoneWidth, PhoneHeight, responsiveSize } from '../config/env';

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
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>KİTLEEE!</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20
    },
    header: {
        flex: 0.3,
        marginTop: 20,
        flexDirection: "column",
        marginLeft: 10,
        marginBottom: 15
    },
    headertext: {
        fontSize: responsiveSize(16),
        color: '#852e4c',
    },
    body: {
        borderWidth: 0,
        width: responsiveSize(295),
        height: responsiveSize(322),
        padding: 0,
        marginTop: 20,
    },
    users: {
        borderWidth: 0,
        width: responsiveSize(290),
        height: responsiveSize(37),
        flexDirection: 'row',
    },
    checkbox: {
       marginLeft: 20
    },
    usersName: {
        marginTop: 5,
        color: 'black',
        fontSize: responsiveSize(15)
    },
    button:{
        borderWidth: 0,
        height: responsiveSize(35),
        width: responsiveSize(190),
        top: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#852e4c'
    },
    btnText:{
        color: 'white',
        fontSize: responsiveSize(17)
    }
});