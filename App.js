import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'



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
