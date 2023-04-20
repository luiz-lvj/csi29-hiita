/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Home from './components/Home';


const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={ {headerShown: false} } />
        <Stack.Screen name="Home" component={Home} options={ {headerShown: false} } />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


export default App;
