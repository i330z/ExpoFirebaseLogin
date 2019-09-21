import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";


export default class DashboardScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>DashboardScreen</Text>
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