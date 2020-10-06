import React, { Component } from 'react';
import {Image} from 'react-native';
import { Router, Stack, Scene, Drawer } from 'react-native-router-flux';
import SignIn from './components/authentication/signIn';
import SignUp from './components/authentication/signUp';
import SideBar from './components/helpComponents/sideBar';
import Main from './components/pages/Main';
import MyTasks from './components/pages/MyTasks';
import Users from './components/pages/Users';
import CreateTask from './components/pages/CreateTask';
import { connect } from 'react-redux';
import {responsiveSize} from './components/config/env';

  class RouterComp extends Component {

 render() {
    const DrawerIcon = (<Image style={{width: responsiveSize(20), height: responsiveSize(20)}} source={require('./images/menu.png')} />)
    const { isMainLogin, isAuthLogin } = this.props;
      return (
        <Router>
            <Stack key="root" hideNavBar >
                <Stack initial= {isAuthLogin} key="auth" hideNavBar >
                    <Scene 
                        hideNavBar 
                        key="signIn" 
                        component={SignIn} />
                    <Scene 
                        hideNavBar 
                        key="signUp" 
                        component={SignUp} />
                </Stack>
                <Stack key= "main">
                <Scene
                    key="CreateTask"
                    component={CreateTask}
                    title="Yeni İş Kitle">
                </Scene>
                <Scene 
                    key="Users" 
                    component={Users}
                    title= "Kitlenecekler" />
                <Drawer
                    tapToClose={true}
                    hideNavBar
                    drawerIcon= {DrawerIcon}
                    contentComponent={SideBar}
                    initial={isMainLogin}>
                    <Scene hideNavBar 
                            key="signIn"
                            component={SignIn} />
                    <Scene title= "Anasayfa" 
                            key="Main" 
                            component={Main}/>
                    <Scene title= "Bana Gelen Görevler" 
                            key="mytasks" 
                            component={MyTasks}/>
                </Drawer>
                </Stack>      
             </Stack>
        </Router>
        )
    }
}
const mapStateToProps = state => {
    const { isAuthLogin, isMainLogin } = state.authenticationReducer;
    return {
      isAuthLogin,
      isMainLogin
    }
  }
  export default connect(mapStateToProps, {})(RouterComp)