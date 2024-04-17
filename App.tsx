import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import RouteStack from "./src/route.stack";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <RouteStack />
    </NavigationContainer>
  );
}
