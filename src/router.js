import React, { Component } from 'react';
import { Router, Stack, Scene, Drawer } from 'react-native-router-flux';
import SignIn from './components/authentication/signIn';
import SignUp from './components/authentication/signUp';
import SideBar from './components/helpComponents/sideBar';
import Main from './components/pages/Main';
import Page2 from './components/pages/Page2';
import Page3 from './components/pages/Page3';
import Users from './components/pages/Users';
import CreateTask from './components/pages/CreateTask';

export default class RouterComp extends Component {
 render() {
      return (
            <Router>
                <Stack key="root" hideNavBar >
                    <Stack  key="auth" >
<<<<<<< HEAD
                        <Scene 
=======
                        <Scene hideNavBar
>>>>>>> 9c5fb88634490b052f04bc0cbeca802a96cfce5a
                            key="signIn"
                            component={SignIn}
                        />
                        <Scene hideNavBar      
                            key="signUp"
                            component={SignUp} 
        
                        />
                    </Stack>
<<<<<<< HEAD
                    <Stack initial key="main" hideNavBar>
                        <Drawer drawerWidth={250} contentComponent={SideBar}>        
                                <Scene initial key="Main" component={Main}/>
                                <Scene key="page2" component={Page2}/>
                                <Scene key="page3" component={Page3}/>
=======
                    <Stack  key="main" hideNavBar>
                        <Drawer  drawerWidth={250} contentComponent={SideBar}>        
                                <Scene  key="Main" component={Main}/>
                                <Scene  key="page2" component={Page2}/>
                                <Scene  key="page3" component={Page3}/>
                    <Stack  initial key="main" hideNavBar>
                        <Drawer  drawerWidth={250} contentComponent={SideBar}>
                           
                                <Scene initial key="Main" component={Main}   />
                                <Scene key="page2" component={Page2}  />
                                <Scene  key="page3" component={Page3}  />
                          
>>>>>>> 9c5fb88634490b052f04bc0cbeca802a96cfce5a
                        </Drawer>
                    </Stack>    

                    <Scene key="goToLogin"
                        component={SignIn}
                        title="Giriş Yap">       
                    </Scene>
                    <Scene key="goToSignUp"
                        component={SignUp}
                        title="Üye ol">       
                    </Scene>
                    <Scene 
                        key="CreateTask"
                        component={CreateTask}
                        title="Yeni İş Kitle">
                    </Scene>
                    <Scene initial key="Users" component={Users} />
                </Stack>
            </Router>
        )
    }
}