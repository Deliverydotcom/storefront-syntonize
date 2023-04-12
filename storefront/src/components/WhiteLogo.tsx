import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Svg from "react-native-svg";

export const WhiteLogo = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Svg height="101" width="101" viewBox="0 0 100 100"></Svg>

      <Text style={{ fontSize: 25, color: "white" }}>StoreFront</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
