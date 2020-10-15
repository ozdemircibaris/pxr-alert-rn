import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { PhoneWidth, PhoneHeight, responsiveSize } from '../config/env';
import { connect } from 'react-redux';
import { fullNameChange, emailChange, passwordChange, signInClicked } from '../../actions/authenticationAction';

export class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  onEmailChanged = (value) => this.props.emailChange(value)
  onPasswordChanged = (value) => this.props.passwordChange(value)
  onSignIn = () => this.props.signInClicked(this.props.emailValue, this.props.passwordValue, this.props.idValue)

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={require('../../images/pxrr.png')} />
          <View style={styles.inputsContainer}>
            <TextInput
              style={styles.input}
              onChangeText={(value) => this.props.emailChange(value)}
              placeholder='E-POSTA'
              value={this.props.emailValue}
              placeholderTextColor='black'
            />
            <TextInput
              secureTextEntry
              style={styles.input}
              onChangeText={(value) => this.props.passwordChange(value)}
              value={this.props.passwordValue}
              placeholder='ŞİFRE'
              placeholderTextColor='black'
            />
            <View>
              <TouchableOpacity style={styles.loginBtn}
                onPress={() => this.onSignIn()}>
                <Text style={styles.loginTxt}>Giriş Yap</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: PhoneHeight * 0.01 }}>
              <Text style={styles.noAccountTxt}>Hesabın yok di mi?</Text>
              <TouchableOpacity onPress={() => Actions.signUp()}>
                <Text style={styles.signUpTxt} > Üye Ol! </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '25%'
  },
  inputsContainer:{
    borderWidth: 0,
    marginTop: PhoneHeight * 0.08
  },
  txt: {
    fontSize: responsiveSize(20),
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    marginTop: 24,
    paddingTop: 30
  },
  icon: {
    width: responsiveSize(100),
    height: responsiveSize(100),
    marginTop: 20,
    alignSelf: 'center',
    resizeMode: "contain",
  },
  loginBtn: {
    backgroundColor: '#2a2124',
    height: PhoneHeight * 0.05,
    width: PhoneWidth * 0.5,
    marginTop: '5%',
    alignSelf: 'center',
    justifyContent: "center"
  },
  inputsBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15%',
  },
  input: {
    margin: 10,
    textAlign: 'center',
    borderWidth: 1.5,
    height: PhoneHeight * 0.05,
    width: PhoneWidth * 0.7,
    borderColor: '#445c8b',
    borderRadius: 8,
    fontSize: responsiveSize(10),
    borderWidth: 2,
  }, 
  loginTxt: {
    color: 'white',
    alignSelf: 'center'
  }, 
  noAccountTxt: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: responsiveSize(13),
  },
  signUpTxt: {
    color: '#445c8b',
    fontSize: responsiveSize(13),
  }
});

const mapStateToProps = (state) => {
  const { emailValue, passwordValue, idValue } = state.authenticationReducer;
  return {
    emailValue,
    passwordValue,
    idValue
  }
}
export default connect(
  mapStateToProps,
  {
    fullNameChange,
    emailChange,
    passwordChange,
    signInClicked
  }
)(SignIn)