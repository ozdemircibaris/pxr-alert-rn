import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RouterComp from './src/router';
import messaging from '@react-native-firebase/messaging';

export default class App extends Component {
  componentWillMount() {
    this.requestUserPermission()
      messaging()
      .getToken()
      .then((token) => {
        console.log("token", token)
      messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      navigation.navigate(remoteMessage.data.type);
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Notification caused app to open from quit state:', remoteMessage.notification, );
        }
      })
    })
  }
  async requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  render() {
    return <RouterComp />
  }
}