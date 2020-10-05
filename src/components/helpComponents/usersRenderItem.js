import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { selectedUser } from '../../actions/usersAction';
import { responsiveSize, } from '../config/env';


class UsersRenderItem extends Component {
    render() {
        const { item } = this.props;
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => this.props.selectedUser(item.id)}
                style={[styles.checkBox, { backgroundColor: item.selected == true ?"green":'red'}]} />
            <Text> {item.fullName} </Text>
        </View>
     )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center'
    },
    checkBox: {
        width: responsiveSize(20),
        height: responsiveSize(20),
        borderRadius: 10,
        marginRight: 5
    }
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