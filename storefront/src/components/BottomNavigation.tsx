import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, ManageHours, OrdersHistory, MenuEditor } from "../screens";
import Icon from "react-native-vector-icons/Ionicons";

import { colors } from "../theme";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        unmountOnBlur: true,
        headerShown: false,
        animationEnabled: true,
        animationTypeForReplace: "push",
        tabBarActiveTintColor: colors.redrosebold,
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          height: 60,
          borderTopColor: colors.redrose,
          backgroundColor: colors.redroselight,
          borderTopWidth: 4,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 0,
          margin: 0,
          padding: 0,
          display: "none",
        },
        tabBarIcon: (props) => {
          let iconName: any = null;
          switch (route.name) {
            case "Home":
              iconName = <Icon name="home-outline" size={25} />;
              break;

            case "MenuEditor":
              iconName = <Icon name="create-outline" size={25} />;
              break;

            case "ManageHours":
              iconName = <Icon name="time-outline" size={25} />;
              break;

            case "ProfileScreen":
              iconName = null;
              break;

            case "OrdersHistory":
              iconName = <Icon name="stopwatch" size={25} />;
              break;
          }
          return <Text style={{ color: props.color }}>{iconName}</Text>;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        options={{
          title: "",
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ title: "" }}
        name="MenuEditor"
        component={MenuEditor}
      />
      <Tab.Screen
        options={{ title: "" }}
        name="ManageHours"
        component={ManageHours}
      />
      <Tab.Screen
        options={{ title: "" }}
        name="OrdersHistory"
        component={OrdersHistory}
      />
    </Tab.Navigator>
  );
};
