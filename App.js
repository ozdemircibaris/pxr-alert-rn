import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RouterComp from './src/router';
import OneSignal from 'react-native-onesignal'; // Import package from node modules


export default class App extends Component {
  constructor(properties) {
    super(properties);
    //Remove this method to stop OneSignal Debugging
    OneSignal.setLogLevel(6, 0)

    // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
    OneSignal.init("85709f52-b07d-4e2b-8a75-6703178bb15a", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
    OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.

    // The promptForPushNotifications function code will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step below)
    OneSignal.promptForPushNotificationsWithUserResponse(this.myiOSPromptCallback);

     OneSignal.addEventListener('received', this.onReceived);
     OneSignal.addEventListener('opened', this.onOpened);
     OneSignal.addEventListener('ids', this.onIds);
  }
  componentWillMount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
    // this.requestUserPermission()
    // this.requestUserPermissionNotifiee()
    //   messaging()
    //   .getToken()
    //   .then((token) => {
    //     console.log("token", token)
    //   messaging().onNotificationOpenedApp(remoteMessage => {
    //   console.log(
    //     'Notification caused app to open from background state:',
    //     remoteMessage.notification,
    //   );
    //   // navigation.navigate(remoteMessage.data.type);
    // });

    // // Check whether an initial notification is available
    // messaging()
    //   .getInitialNotification()
    //   .then(remoteMessage => {
    //     if (remoteMessage) {
    //       console.log('Notification caused app to open from quit state:', remoteMessage.notification, );
    //     }
    //   })
    // })
    // messaging().setBackgroundMessageHandler(this.requestUserPermissionNotifiee)
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  myiOSPromptCallback(permission){
  // do something with permission value
  }
  // async requestUserPermission() {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }
  // }

  // async requestUserPermissionNotifiee() {
  //   const settings = await notifee.requestPermission();

  //   if (settings.authorizationStatus >= IOSAuthorizationStatus.AUTHORIZED) {
  //     console.log('Permission settings:', settings);
  //   } else {
  //     console.log('User declined permissions');
  //   }
  //   // settings.sound('sound2.mp3 ')
  //   notifee.createChannel({
  //     name: "custom",
  //     id: 'custom-sound',
  //     title: 'Channel with custom sound',
  //     sound: 'sound2',
  //   });
  //   // notifee.displayNotification({
  //   //   body: 'Custom sound',
  //   //   ios: {
  //   //     // iOS ringtone name
  //   //     sound: "./src/sounds/sound2.mp3"
  //   //     // iOS resource (.wav, aiff, .caf)
  //   //     // sound: 'local.wav',
  //   //   },
  //   // });
  // }
  render() {
    return (<RouterComp />)
  }
}
