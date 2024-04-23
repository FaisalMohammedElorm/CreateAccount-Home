
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import NotificationScreen from './src/screens/NotificationScreen';




const Stack = createNativeStackNavigator();



const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="notification"
          component={NotificationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
