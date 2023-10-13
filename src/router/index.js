import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home";

import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
      <NavigationContainer >
        <StatusBar/>
        <Stack.Navigator screenOptions={{headerShown:false}} >
          <Stack.Screen  name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
