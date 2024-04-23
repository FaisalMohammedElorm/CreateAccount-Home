
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homeScreen from "./src/screens/homeScreen";
import notificationScreen from "./src/screens/notificationScreen";




const Stack = createNativeStackNavigator();



const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={homeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="notification"
          component={notificationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
