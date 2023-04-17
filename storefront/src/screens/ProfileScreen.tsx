import React, { useContext } from "react";
import { Animated, Button, Text } from "react-native";
import { homeStyles } from "../theme";
import { AuthContext } from "../context";
import { useFade } from "../hooks";

export const ProfileScreen = () => {
  const { user, token, logOut } = useContext(AuthContext);
  const fadeAnim = useFade();
  const styles = homeStyles(fadeAnim);
  return (
    <Animated.View style={styles.container}>
      <Text style={styles.miniText}>PROFILE</Text>
      <Button title="logout" color="#5856D6" onPress={logOut} />
      <Text>{JSON.stringify(user, null, 5)}</Text>
    </Animated.View>
  );
};
