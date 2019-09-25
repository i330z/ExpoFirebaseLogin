import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import firebase from 'firebase';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

export default class DashboardScreen extends Component{

    registerForPushNotificationsAsync = async() => {
        const { status: existingStatus } = await Permissions.getAsync(
          Permissions.NOTIFICATIONS
        );
        let finalStatus = existingStatus;
      
        // only ask if permissions have not already been determined, because
        // iOS won't necessarily prompt the user a second time.
        if (existingStatus !== 'granted') {
          // Android remote notification permissions are granted during the app
          // install, so this will only ask on iOS
          const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
          finalStatus = status;
        }
      
        // Stop here if the user did not grant permissions
        if (finalStatus !== 'granted') {
          return;
        }
      
        try{
        // Get the token that uniquely identifies this device
        let token = await Notifications.getExpoPushTokenAsync();
        console.log(token);
        // POST the token to your backend server from where you can retrieve it to send push notifications.
        firebase.database().ref('users/'+ this.currentUser.uid+'/push_token').set(token)
        }
        catch(error){
            console.log(error)
        }
      };

    async componentDidMount(){
        this.currentUser = await firebase.auth().currentUser;
        await this.registerForPushNotificationsAsync();
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>DashboardScreen</Text>
                <Button title="Sign Out" onPress={() => firebase.auth().signOut()} />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
});