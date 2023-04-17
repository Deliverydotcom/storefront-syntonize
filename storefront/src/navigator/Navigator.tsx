import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../context";
import {
  HomeScreen,
  LoadingScreen,
  ProfileScreen,
  ConfigScreen,
  PromoteScreen,
  HelpScreen,
  MenuEditor,
} from "../screens";
import { SideDrawermenu } from "./SideDrawerMenu";

import { Platform } from "react-native";
import { LoginScreen } from "../screens/LoginScreen";
import { ForgotCredentials } from "../screens/ForgotCredentials";
import { colors } from "../theme";
import { BottomNavigation } from "../components/BottomNavigation";

const Stack = createStackNavigator();

export const Navigator = () => {
  const { status } = useContext(AuthContext);
  console.log(status);
  // if (Platform.OS !== "web" && status === "checking") return <LoadingScreen />;
  // if (status === "checking") return <LoadingScreen />;

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: colors.backgapp },
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
            <Stack.Screen name="MenuEditor" component={MenuEditor} />
          </>
        )}
      </Stack.Navigator>
    </>
  );
};
