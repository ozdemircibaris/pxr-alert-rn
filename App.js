import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import ReduxThunk from 'redux-thunk';
import rootReducer from './src/reducers/rootReducer';
import RouterComp from './src/router';
import OneSignal from 'react-native-onesignal'; // Import package from node modules
import {AsyncStorage } from 'react-native';
import { PhoneHeight } from './src/components/config/env';
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
    const phoneToken = JSON.stringify(device.userId);
    AsyncStorage.setItem("device",phoneToken )
    console.log('Device info: ', phoneToken);
  }
  render() {
    const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk))
    const persisStore = persistStore(store)
    return (
      <Provider store={store}>
        <PersistGate persistor={persisStore} loading={null}>
          <RouterComp />
        </PersistGate>
      </Provider>
    )
  }
}
