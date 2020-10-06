
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import { PhoneWidth, PhoneHeight, responsiveSize } from '../config/env';
import UsersRenderItem from '../helpComponents/usersRenderItem';
import { connect } from 'react-redux';
import { selectUsers, createTask, listUsers } from '../../actions/usersAction';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "white",
        };
    }
    componentDidMount() {
        this.props.listUsers(this.props.userData.token)
    }

    render() {
        console.log("id users:", this.props.selectedUsers )
        const {title, body, date, cat_id, selectedUsers} = this.props;
        return (
          <View style={styles.container}>
              <View style={styles.header}>
                  <Text style={styles.headertext}>Merhaba,
                  <Text style= {styles.userNameText}>{this.props.userData.data.fullName}</Text>
                  </Text>
                  <Text style={styles.headertext}>Bu şerefe kimlerin nail olacağını seç</Text>
              </View>
              <View style={styles.body}>
                  <FlatList
                      data={this.props.users}
                      renderItem={({item}) => <UsersRenderItem item= {item}/>}
                      keyExtractor={item => item.id.toString()}
                  />
              </View>
              <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.createTask(title, body, date, cat_id, selectedUsers, this.props.userData.token)} >
                      <Text style={styles.btnText}>KİTLEEE!</Text>
                  </TouchableOpacity>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 0.3,
        marginTop: 20,
        flexDirection: "column",
        margin: 15
    },
    headertext: {
        fontSize: responsiveSize(16),
        color: "#445c8b",
        marginLeft: 10
    },
    body: {   
        marginTop: 20,
        width: PhoneWidth,
        height: PhoneHeight * 0.6,
    },
    button: {
        borderWidth: 0,
        width: PhoneWidth * 0.5,
        height: PhoneHeight * 0.05,
        top: 30,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#445c8b"
    },
    btnText: {
        color: "white",
        fontSize: responsiveSize(17)
    },
    tick: {
        marginLeft: 4
    },
    userNameText:{
        fontWeight: "bold"
      }
});
const mapStateToProps = (state) => {
    const { usersId, users, selectedUsers} = state.usersReducer;
    const {userData} = state.authenticationReducer;
    return {
        usersId,
        userData,
        users,
        selectedUsers
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