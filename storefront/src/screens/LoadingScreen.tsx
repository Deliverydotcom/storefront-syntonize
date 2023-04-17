import React from "react";
import { ActivityIndicator, View } from "react-native";
//import LogoDeliveryLoop from "../assets/img/logo-delivery-loop.svg";
import LogoDeliveryLoop from "../assets/img/logo-delivery-loop.js";

export const LoadingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LogoDeliveryLoop />

      <ActivityIndicator size={200} color="black" />
    </View>
  );
};
