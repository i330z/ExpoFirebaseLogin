import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Expo from 'expo';

import LoginScreen from './screen/LoginScreen'
import LoadingScreen from './screen/LoadingScreen'
import DashboardScreen from './screen/DashboardScreen'


import * as firebase from 'firebase';
import { firebaseConfig } from './config' 
firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  render(){
    return (
      <AppNavigator />
    );
  }
}

// async function register(){
//   const { status: existingStatus } = await Permissions.getAsync(
//     Permissions.NOTIFICATIONS
//   );
//   console.log(existingStatus)
//   let token = await Notifications.getExpoPushTokenAsync();
//   console.log(token)
// }

// export default class App extends Component {

//   componentWillMount(){
//     register()
//   }

//   render(){
//     return (
//       <View>
//         <Text>hello</Text>
//       </View>
//     );
//   }
// }

const AppSwitchnavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen:LoginScreen,
  DashboardScreen:DashboardScreen
})


const AppNavigator = createAppContainer(AppSwitchnavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
  },
});
