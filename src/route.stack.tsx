import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import Detail from "./screens/Detail";
import Home from "./screens/Home";

type AppRoutes = {
  home: undefined;
  detail: {
    id: string;
  };
};

export type AppStackNavigationRoutesProps =
  NativeStackNavigationProp<AppRoutes>;

const Stack = createNativeStackNavigator<AppRoutes>();

const RouteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="detail" component={Detail} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RouteStack;
