/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login/index';
import Home from './pages/Home/index';
import Signup from './pages/Signup/index';
import Exercises from './pages/Exercise';
import Profile from './pages/Profile';


const Stack = createNativeStackNavigator();

function App(){

  const [userType, setUserType] = useState("student");

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Login" options={ {headerShown: false} }>
          {props => <Login {...props} userType={userType} setUserType={setUserType} />}
        </Stack.Screen>


        <Stack.Screen name="Home" options={ {headerShown: false} } >
          {props => <Home {...props} userType={userType} />}
        </Stack.Screen>


        <Stack.Screen name="Signup" options={ {headerShown: false} } >
          {props => <Signup {...props} userType={userType} />}
        </Stack.Screen>


        <Stack.Screen name="Exercises" options={ {headerShown: false} }>
          {props => <Exercises {...props} userType={userType} />}
        </Stack.Screen>
        <Stack.Screen name="Profile" options={ {headerShown: false} } >
          {props => <Profile {...props} userType={userType} />}
        </Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
  );
}


export default App;
