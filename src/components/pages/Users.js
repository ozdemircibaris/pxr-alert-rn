import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { PhoneWidth, PhoneHeight, responsiveSize } from '../config/env';
import axios from 'axios';
import UsersRenderItem from '../helpComponents/usersRenderItem';
import { connect } from 'react-redux';
import { selectUsers } from '../../actions/usersAction';
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            color: "white",
        };
    }

    componentDidMount() {
     axios.get("http://pxralert.ozdemircibaris.xyz/api/v1/users/")
        .then((res) => {
            // console.log("res :", res.data.data)
            res.data.data.map((item) => {
                item.selected = "false"
            })
            this.setState({
                users: res.data.data,
            })
            // console.log("array :", this.state.users)
        })
        .catch((error) => {
            console.log("error :", error)
        })
    }
    createTask =() => {
     const {title, body, date, cat_id} = this.props;
        axios({
            method: "POST",
            url: `http:pxralert.ozdemircibaris.xyz/api/v1/tasks`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.props.userData[0].token} ` 
            },
                data: {cat_id: cat_id, title: title, subTitle: body, jobDate: date, user_id: "22"}     
            }).then((result) => {
                console.log("resultttt" , result.data)
                if(result.data.status == "success"){
                console.log("Başarılı")
                
                }
            }).catch((err) => {
                console.log('errorrrruurr', err.response)
                alert('başarısız')
            })
    }

    render() {
        console.log("id users:", this.props.usersId ) 
        return (
          <View style={styles.container}>
              <View style={styles.header}>
                  <Text style={styles.headertext}>Merhaba Murat</Text>
                  <Text style={styles.headertext}> Bu şerefe kimlerin nail olacağını seç</Text>
              </View>
              <View style={styles.body}>
                  <FlatList
                      data={this.state.users}
                      renderItem={({item}) => <UsersRenderItem item= {item}/>}
                      keyExtractor={item => item.id}  
                  />
                  <TouchableOpacity 
                            style={styles.button}
                            onPress={() => this.createTask()} >
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
        width: 25,
        height: 25,
        borderWidth: 0,
        // borderColor: '#852e4c',
    },
    checkboxView: {
        borderWidth: 2,
        width: PhoneWidth * 0.06,
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
    const { usersId } = state.usersReducer;
    const {userData} = state.authenticationReducer;
    return {

        usersId,
        userData
    }
}
export default connect(
    mapStateToProps,
    {
        selectUsers,
    }
)(Users)