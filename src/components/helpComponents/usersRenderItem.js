import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { responsiveSize, PhoneWidth, PhoneHeight } from '../config/env';
import { set } from 'react-native-reanimated';
import axios from 'axios';
import { connect } from 'react-redux';
import { selectUsers } from '../../actions/usersAction';

class UsersRenderItem extends Component {

    select = (item) => this.props.selectUsers( item, this.props.selectedId , this.props.count)

    render() {
        const { item } = this.props;
    return (
        <View style={styles.users} >
          <View style={styles.checkboxView} >
              <TouchableOpacity style={{
                  width: 21,
                  height: 22,
                  borderWidth: 0,
                  backgroundColor: (item.selected == "true") ? "green" : "white"
                  }}
                  onPress={() => this.select(item)} >

              </TouchableOpacity>
          </View>
          <Text style={styles.usersName}>{item.fullName}</Text>
        </View>
     )
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
    checkboxView: {
        borderWidth: 2,
        width: PhoneWidth * 0.06,
        height: PhoneHeight * 0.028,
        height: PhoneHeight * 0.038,
        marginTop: 8
    },
    usersName: {
        marginTop: 8,
        color: 'black',
        fontSize: responsiveSize(15),
        marginLeft: 20
    },
    button: {
        borderWidth: 0,
        height: responsiveSize(35),
        width: responsiveSize(190),
        top: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#852e4c'
    },
    btnText: {
        color: 'white',
        fontSize: responsiveSize(17)
    },
    tick: {
        marginLeft: 4
    }
});

const mapStateToProps = (state) => {
    const { selectedId, usersId, count} = state.usersReducer;
    return {
        selectedId,
        usersId,
        count
    }
}
export default connect(
    mapStateToProps,
    {
        selectUsers,
    }
)(UsersRenderItem)