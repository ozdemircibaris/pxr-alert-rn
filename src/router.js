import React, { Component } from 'react';
import { Router, Stack, Scene, Drawer } from 'react-native-router-flux';
import SignIn from './components/authentication/signIn';
import SignUp from './components/authentication/signUp';
import SideBar from './components/helpComponents/sideBar';
import Main from './components/pages/Main';
import MyTasks from './components/pages/MyTasks';
import Users from './components/pages/Users';
import CreateTask from './components/pages/CreateTask';
import { connect } from 'react-redux';
​
  class RouterComp extends Component {
 render() {
    const { isMainLogin, isAuthLogin } = this.props;
      return (
            <Router>
            <Stack key="root" >
                <Stack initial={isAuthLogin}  key="auth" hideNavBar >
                    <Scene  hideNavBar key="signIn" component={SignIn} />
                    <Scene  hideNavBar key="signUp" component={SignUp} />
                </Stack>
                    <Scene
                        key="CreateTask"
                        component={CreateTask}
                        title="Yeni İş Kitle">
                    </Scene>
                    <Scene key="Users" component={Users} />
​
                        <Drawer
                            hideNavBar
                            contentComponent={SideBar}
                            initial={isMainLogin}>
                            <Scene hideNavBar key="signIn" component={SignIn} />
                            <Scene initial={isAuthLogin} key="Main" component={Main} />
                            <Scene initial={isAuthLogin} key="mytasks" component={MyTasks} />
                        </Drawer>
                </Stack>
            </Router>
        )
    }
}
​
​
const mapStateToProps = state => {
    const { isAuthLogin, isMainLogin } = state.authenticationReducer;
    return {
      isAuthLogin,
      isMainLogin
    }
  }
  export default connect(mapStateToProps, {})(RouterComp)