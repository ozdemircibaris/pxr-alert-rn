import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { selectedUser } from '../../actions/usersAction';
import { PhoneHeight, responsiveSize, } from '../config/env';


class UsersRenderItem extends Component {
    render() {
        const { item } = this.props;
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => this.props.selectedUser(item.id)}
                style={[styles.checkBox, { backgroundColor: item.selected == true ?"#445c8b":'#2a2124'}]} />
            <Text style= {styles.usersName}> {item.fullName} </Text>
        </View>
     )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: responsiveSize(3),
        alignItems: 'center',
        paddingLeft: "10%",
        height: PhoneHeight * 0.05,
        borderWidth:0
    },
    checkBox: {
        width: responsiveSize(18),
        height: responsiveSize(18),
        borderRadius: 30,
    },
    usersName: {
        color: "black",
        fontSize: responsiveSize(15),
        marginLeft: 5
    },
});

const mapStateToProps = (state) => {
    const { selectedId, usersId, count, selectedUsers } = state.usersReducer;
    return {
        selectedId,
        usersId,
        count,
        selectedUsers
    }
}
export default connect(
    mapStateToProps,
    {
         selectedUser
    }
)(UsersRenderItem)