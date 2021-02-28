import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"


export default class Info extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Text>Hello from Info</Text>
            </View>
        )
    }

}