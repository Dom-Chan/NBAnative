import { Text, View, SafeAreaView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NBAProvider } from "./context/NBAContext";
import HomeScreen from "./screens/HomeScreen";
import TeamScreen from "./screens/TeamScreen";
import { useContext } from "react";
import NBAContext from "./context/NBAContext";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NBAProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Team"
            component={TeamScreen}
            options={{
              headerShown: false,
              title: "Free Agents"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NBAProvider>
  );
}




