import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../context";
import {
  HomeScreen,
  ProtectedScreen,
  LoadingScreen,
  ProfileScreen,
  ConfigScreen,
  PromoteScreen,
  HelpScreen,
} from "../screens";
import { SideDrawermenu } from "./SideDrawerMenu";
import { BottomNavigation } from "../components";
import { Platform } from "react-native";
import { LoginScreen } from "../screens/LoginScreen";
import { ForgotCredentials } from "../screens/ForgotCredentials";

const Stack = createStackNavigator();

export const Navigator = () => {
  const { status } = useContext(AuthContext);
  console.log(status);
  if (Platform.OS !== "web" && status === "checking") return <LoadingScreen />;

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#eab676" },
        }}
      >
        {status !== "authenticated" ? (
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen
              name="forgotcredentials"
              component={ForgotCredentials}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="SideDrawermenu" component={SideDrawermenu} />
            <Stack.Screen
              name="BottomNavigation"
              component={BottomNavigation}
            />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
              options={{
                animationEnabled: true,
                animationTypeForReplace: "push",
              }}
              name="ProfileScreen"
              component={ProfileScreen}
            />
            <Stack.Screen name="HelpScreen" component={HelpScreen} />
            <Stack.Screen name="PromoteScreen" component={PromoteScreen} />
            <Stack.Screen name="ConfigScreen" component={ConfigScreen} />
          </>
        )}
      </Stack.Navigator>
    </>
  );
};
