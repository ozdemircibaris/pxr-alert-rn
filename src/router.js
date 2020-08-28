import React, { Component } from 'react';
import { Router, Stack, Scene, Drawer } from 'react-native-router-flux';
import SignIn from './components/authentication/signIn';
import SignUp from './components/authentication/signUp';
import SideBar from './components/leftBar/sideBar';
import Main from './components/pages/Main';
import Page2 from './components/pages/Page2';
import Page3 from './components/pages/Page3';
import Users from './components/pages/Users';
import NewDuty from './components/pages/NewDuty';
import CreateTask from './components/pages/CreateTask';



export default class RouterComp extends Component {
    render() {
        return (
            <Router>
                <Stack  key="root" hideNavBar >
                    <Stack key="auth" >
                        <Scene 
                            key="signIn"
                            component={SignIn}
                             
                            />
                        <Scene
                            key="signUp"
                            component={SignUp}
                        /></Stack>
                    <Stack key="main" initial >
                        <Drawer   drawerWidth={250} contentComponent={SideBar}>
                            <Scene  key="DrawerMenu"  initial>
                                <Scene  key="Main" component={Main}   />
                                <Scene key="page2" component={Page2}  />
                                <Scene key="page3" component={Page3}  />
                            </Scene>
                        </Drawer>
                    </Stack>
                    <Scene key="goToLogin"
                        component={SignIn}
                        title="Giriş Yap">
                            
                    </Scene>
                    <Scene 
                        key="CreateTask"
                        component={CreateTask}
                        title="Yeni İş Kitle">
                    </Scene>
                    <Scene key="Users" component={Users} />
                </Stack>
            </Router>
        )
    }
}
