import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"


export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:0
        }
    }
    increment(){
        var name = this.state.name;
        name +=1
        this.setState({
            name:name
        })
    }
    render(){
        return(
            <View>
                <Text>Hello from Home</Text>
                <Button title="Go to Info Section" onPress={()=>this.props.navigation.navigate("info")}/>
                <Button title = {"Number: "+this.state.name} onPress={()=>this.increment()}/>
            </View>
        )
    }

}