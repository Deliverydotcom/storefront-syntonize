import React, { useContext, useEffect, useRef } from "react";
import { Button, Text, View } from "react-native";
import { homeStyles } from "../theme";
import { AuthContext } from "../context";
import { BottomNavigation } from "../components";
import { SideDrawermenu } from "../navigator/SideDrawerMenu";
import { Animated } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { useFocusEffect } from "@react-navigation/native";
import { useFade } from "../hooks";

export const HelpScreen = () => {
  const { user, token, logOut } = useContext(AuthContext);

  const fadeAnim = useFade();
  const styles = homeStyles(fadeAnim);

  return (
    <>
      <Animated.View style={styles.container}>
        <Text style={styles.textNumber}>HelpScreen orders</Text>
        <Button title="logout" color="#5856D6" onPress={logOut} />
        <Text>{JSON.stringify(user, null, 5)}</Text>
      </Animated.View>
    </>
  );
};
