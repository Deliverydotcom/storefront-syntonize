import React, { useContext, useEffect } from "react";
import { Animated, Button, Text, View } from "react-native";
import { appStyles, homeStyles } from "../theme";
import { AuthContext } from "../context";
import { BottomNavigation, Header } from "../components";
import { SideDrawermenu } from "../navigator/SideDrawerMenu";
import { useFade } from "../hooks";
import LinearGradient from "react-native-linear-gradient";

export const PendingOrders = () => {
  const { user, token, logOut } = useContext(AuthContext);

  const fadeAnim = useFade();
  const styles = homeStyles(fadeAnim);

  return (
    <>
      <Animated.View style={appStyles.app}>
        <LinearGradient
          colors={["#8EA8A6", "#9EB1A8", "#FFFFFF"]}
          style={appStyles.linearGradient}
        >
          {/* <Header title="tit" navigation={"/"} /> */}
          <Text style={styles.miniText}>Pending orders</Text>
          <Button title="logout" color="#5856D6" onPress={logOut} />
          <Text>{JSON.stringify(user, null, 5)}</Text>
        </LinearGradient>
      </Animated.View>
    </>
  );
};
