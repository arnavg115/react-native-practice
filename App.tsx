import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import Home from './screens/Home';
import Info from './screens/Info';
export default function App() {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{title:"Hello from the DS"}}/>
            <Stack.Screen name="info" component={Info}/>
        </Stack.Navigator>
    </NavigationContainer>
  );    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
