import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class SignIn extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => Actions.jump("index")}>
                    <Text> SignIn </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
