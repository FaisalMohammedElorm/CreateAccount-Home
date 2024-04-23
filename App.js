import { View, Text } from 'react-native';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import VerificationScreen from './screens/VerificationScreen';
import LoginScreen from './screens/LoginScreen';
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer  >
<Stack.Navigator initialRouteName="Welcome">
<Stack.Screen name = "Welcome" component={WelcomeScreen} options ={{headerShown: false}} />
<Stack.Screen name = "Verification" component={VerificationScreen} options ={{headerShown: false}} />
<Stack.Screen name = "Log In" component={LoginScreen} options ={{headerShown: false}} />
<Stack.Screen name = "Forgot Password" component={ForgotPassword} options ={{headerShown: false}} />
<Stack.Screen name = "Reset Password" component={ResetPassword} options ={{headerShown: false}} />



</Stack.Navigator>



    </NavigationContainer>
  )
}

export default App