import React from "react";
import { Image, StyleSheet, Text, View, Platform } from "react-native";
import Svg from "react-native-svg";
import LogoDelivery from "../assets/img/logo-delivery.svg";

export const WhiteLogo = () => {
  return (
    <View style={{ alignItems: "center" }}>
      {Platform.OS === "web" ? (
        <img src="../assets/img/logo-delivery.svg" height={90} width={90} />
      ) : (
        <LogoDelivery height={90} width={90} fill={"#666666"} />
      )}

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
