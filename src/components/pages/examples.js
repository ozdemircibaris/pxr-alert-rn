import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { emailChange, passwordChange } from '../../actions/exampleAction';
import { zsuInputChange } from '../../actions/zsuAction';
import { PhoneWidth, PhoneHeight } from '../config/env';

class Examples extends Component {
    onEmailChanged    = (value) => this.props.emailChange(value)
    onPasswordChanged = (value) => this.props.passwordChange(value)
    render() {
    const { emailValue, passwordValue, zsuInputValue } = this.props;
    console.log(this.props)
        return (
            <View style={styles.container}>
                <Text style={styles.topTitle}> Barbie App </Text>
                <View style={{ alignSelf: 'center',  justifyContent: 'center', flex: 1, }}>
                    <TextInput
                        style={styles.inputs}
                        onChangeText={this.onEmailChanged}
                        placeholder="email" />
                    <TextInput
                        style={styles.inputs}
                        secureTextEntry
                        onChangeText={(value) => this.props.zsuInputChange(value)}
                        placeholder="password" />

                    <TouchableOpacity
                        style={styles.signIn}>
                        <Text style={styles.buttonTitle}> Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topTitle: {
        fontSize: 25,
        marginTop: PhoneHeight * 0.05,
        textAlign: 'center'
    },
    inputs: {
        width: PhoneWidth * 0.7,
        height: PhoneHeight * 0.05,
        marginVertical: 10,
        borderBottomWidth: 0.6,
        borderColor: 'pink'
    },
    signIn: {
        marginTop: 10,
        width: PhoneWidth * 0.7,
        height: PhoneHeight * 0.05,
        backgroundColor: 'pink',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 17
    }
})

const mapStateToProps = (state) => {
    const { emailValue, passwordValue } = state.ExampleReducer;
    const { zsuInputValue } = state.ZSUReducer;
    return {
        emailValue,
        passwordValue,
        zsuInputValue
    }
}

export default connect(
    mapStateToProps,
    {
        emailChange,
        passwordChange,
        zsuInputChange
    }
)(Examples)