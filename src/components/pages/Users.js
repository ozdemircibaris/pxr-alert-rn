
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { PhoneWidth, PhoneHeight, responsiveSize } from '../config/env';
import UsersRenderItem from '../helpComponents/usersRenderItem';
import { connect } from 'react-redux';
import { selectUsers, createTask, listUsers } from '../../actions/usersAction';
import { Actions } from 'react-native-router-flux';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // users: [],
            color: "white",
        };
    }
    componentDidMount() {
        this.props.listUsers(this.props.userData.token)
       
    }
   
    render() {
        console.log("id users:", this.props.usersId ) 
        const {title, body, date, cat_id, usersId} = this.props;
        return (
          <View style={styles.container}>
              <View style={styles.header}>
                  <Text style={styles.headertext}>Merhaba Murat</Text>
                  <Text style={styles.headertext}> Bu şerefe kimlerin nail olacağını seç</Text>
              </View>
              <View style={styles.body}>
                  <FlatList
                      data={this.props.users}
                      renderItem={({item}) => <UsersRenderItem item= {item}/>}
                      keyExtractor={item => item.id}
                  />
                  <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.createTask(title, body, date, cat_id, usersId, this.props.userData.token)} >
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
        color: "#852E4C",
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
        flexDirection: "row",
    },
    checkbox: {
        width: 25,
        height: 25,
        borderWidth: 0,
        // borderColor: ‘#852E4C’,
    },
    checkboxView: {
        borderWidth: 2,
        width: PhoneWidth * 0.06,
        height: PhoneHeight * 0.038,
        marginTop: 8
    },
    usersName: {
        marginTop: 8,
        color: "black",
        fontSize: responsiveSize(15),
        marginLeft: 20
    },
    button: {
        borderWidth: 0,
        height: responsiveSize(35),
        width: responsiveSize(190),
        top: 30,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#852E4C"
    },
    btnText: {
        color: "white",
        fontSize: responsiveSize(17)
    },
    tick: {
        marginLeft: 4
    }
});
const mapStateToProps = (state) => {
    const { usersId, users } = state.usersReducer;
    const {userData} = state.authenticationReducer;
    return {
        usersId,
        userData,
        users
    }
}
export default connect(
    mapStateToProps,
    {
        selectUsers,
        createTask,
        listUsers
    }
)(Users)