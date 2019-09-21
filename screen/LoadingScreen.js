import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator
} from "react-native";
import firebase from 'firebase';


export default class LoadingScreen extends Component{
    componentDidMount(){
        this.checkIfloggedIn();
    }
    
    checkIfloggedIn = () =>{
        firebase.auth().onAuthStateChanged(user => {
            if(user)
            {
                this.props.navigation.navigate('DashboardScreen');
            }else{
                this.props.navigation.navigate('LoginScreen');
            }
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large"/>
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