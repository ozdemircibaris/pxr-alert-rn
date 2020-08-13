import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import SignIn from './components/authentication/signIn';
import SignUp from './components/authentication/signUp';
import Index from './components/pages';

export default class RouterComp extends Component {
    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar>
                    <Stack key="auth">
                        <Scene
                            key="signIn"
                            component={SignIn} />
                        <Scene
                            key="signUp"
                            component={SignUp} />
                    </Stack>
                    <Stack key="main">
                        <Scene
                            key="index"
                            component={Index} />
                    </Stack>
                </Stack>
            </Router>
        )
    }
}
