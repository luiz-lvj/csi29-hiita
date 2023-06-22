/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login/index';
import Home from './pages/Home/index';
import Signup from './pages/Signup/index';
import Exercises from './pages/Exercise';
import Profile from './pages/Profile';


const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={ {headerShown: false} } />
        <Stack.Screen name="Home" component={Home} options={ {headerShown: false} } />
        <Stack.Screen name="Signup" component={Signup} options={ {headerShown: false} } />
        <Stack.Screen name="Exercises" component={Exercises} options={ {headerShown: false} } />
        <Stack.Screen name="Profile" component={Profile} options={ {headerShown: false} } />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


export default App;
