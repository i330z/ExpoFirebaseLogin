import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

import * as Google from 'expo-google-app-auth';

export default class LoginScreen extends Component{

     signInWithGoogleAsync = async() => {
        try {
          const result = await Google.logInAsync({
            behavior:'expo-google-sign-in',
            androidClientId: '837553397474-edbvil9d2p3e9p1a2633ucoed4iup3uq.apps.googleusercontent.com',

            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      }


    render(){
        return(
            <View style={styles.container}>
                <Button title="SignIn with Google" onPress={()=>this.signInWithGoogleAsync()} />
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