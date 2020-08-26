import React, { Component } from 'react';
import { StyleSheet, View, Text, CheckBox, Image, Button, TouchableOpacity } from 'react-native';
// import Header from '../leftBar/Header';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { color } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
// import { TouchableOpacity } from 'react-native-gesture-handler';

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
]


export default class Main extends Component {
    constructor(props) {
        super(props);

    }


    // list = () => {
    //     return users.map(element => {
    //         return (
    //         <View style={styles.users} key={element.id}>
    //             <CheckBox style={styles.checkbox}
    //                 checkedIcon='dot-circle-o'
    //                 uncheckedIcon='circle-o'
    //                 title='checkbox 1'
    //                 checkedColor='red'
    //                 tintColors={{ true: 'white', false: 'black' }}
    //             // checked1={this.state.checked1}
    //             // onPress={() => this.setState({ checked1: !this.state.checked1 })}
    //             />
    //             <Text style={styles.usersName}>{element.info}</Text>
    //         </View>
    //         )
    //     });
    // }



    render() {


        return (

            <LinearGradient colors={['#7d00d8', '#7a00c6', '#b100bf']} style={styles.linearGradient}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headertext}>Merhaba Murat</Text>
                        <Text style={styles.headertext}> Bu şerefe kimlerin nail olacağını seç</Text>
                    </View>
                    <View style={styles.body}>
                        <ScrollView>

                            {/* {this.list()} */}


                            {users.map(item => {
                                return (
                                    <View style={styles.users} key={item.id}>
                                        <CheckBox style={styles.checkbox}
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='circle-o'
                                            title='checkbox 1'
                                            checkedColor='red'
                                            tintColors={{ true: 'white', false: 'black' }}
                                        // checked1={this.state.checked1}
                                        // onPress={() => this.setState({ checked1: !this.state.checked1 })}
                                        />
                                        <Text style={styles.usersName}>{item.info}</Text>
                                    </View>)
                            })}


                            
                        </ScrollView>
                    </View>
                    <View style={styles.end}>
                        <Button color="#4f1aff" title="KİTLEEE!"></Button>
                    </View>
                </View>
            </LinearGradient>

        );
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,


    },
    header: {
        borderWidth: 0,
        top: 70,


    },
    headertext: {
        fontSize: 17,
        color: 'white',
        left: 30,
    },
    body: {
        borderWidth: 0,
        width: 410,
        height: 310,
        top: 130,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 0

    },
    users: {
        borderWidth: 0,
        width: 400,
        height: 40,
        left: 30,
        flexDirection: 'row',
    },
    checkbox: {
        alignSelf: 'flex-start',
        left: 10,
    },
    usersName: {
        top: 8,
        left: 60,
        color: 'white'
    },
    end: {
        height: 40,
        width: 250,
        top: 160,
        left: 80,
        borderWidth: 0
    }
});