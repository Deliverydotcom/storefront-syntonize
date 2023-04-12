import React, { useContext, useEffect } from "react";
import { Animated, Button, Text, View } from "react-native";
import { homeStyles } from "../theme";
import { AuthContext } from "../context";
import { BottomNavigation } from "../components";
import { SideDrawermenu } from "../navigator/SideDrawerMenu";
import { useFade } from "../hooks";

export const OrdersHistory = () => {
  const { user, token, logOut } = useContext(AuthContext);

  const fadeAnim = useFade();
  const styles = homeStyles(fadeAnim);

  return (
    <>
      <Animated.View style={styles.container}>
        <Text style={styles.miniText}>OrdersHistory orders</Text>
        <Button title="logout" color="#5856D6" onPress={logOut} />
        <Text>{JSON.stringify(user, null, 5)}</Text>
      </Animated.View>
    </>
  );
};
