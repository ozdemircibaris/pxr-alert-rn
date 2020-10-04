import React, { Component } from 'react';
import { Router, Stack, Scene, Drawer } from 'react-native-router-flux';
import SignIn from './components/authentication/signIn';
import SignUp from './components/authentication/signUp';
import SideBar from './components/helpComponents/sideBar';
import Main from './components/pages/Main';
import MyTasks from './components/pages/MyTasks';
import Users from './components/pages/Users';
import CreateTask from './components/pages/CreateTask';
import { Header } from 'react-native/Libraries/NewAppScreen';


export default class RouterComp extends Component {
 render() {
      return (
            <Router>
            <Stack  key="auth" >
                <Stack  initial key="root" hideNavBar >
                    <Scene  initial hideNavBar key="signIn" component={SignIn} />
                    <Scene  hideNavBar key="signUp" component={SignUp} />
                </Stack>
                    <Scene 
                        key="CreateTask"
                        component={CreateTask}
                        title="Yeni İş Kitle">
                    </Scene>
                    <Scene key="Users" component={Users}  />

                    <Stack  key="main"  hideNavBar  >
                        <Drawer contentComponent={SideBar} >
                        <Scene  initial hideNavBar key="signIn" component={SignIn} />
                            <Scene key="Main" component={Main} />
                            <Scene key="mytasks" component={MyTasks}   />
                        </Drawer>  
                    </Stack>
                </Stack>
            </Router>
        )
    }
}