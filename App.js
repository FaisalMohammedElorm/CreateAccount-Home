import { View, Text } from 'react-native';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer  >
<Stack.Navigator initialRouteName="Welcome">
<Stack.Screen name = "Welcome" component={WelcomeScreen} options ={{headerShown: false}} />



</Stack.Navigator>



    </NavigationContainer>
  )
}

export default App