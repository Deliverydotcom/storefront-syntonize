import React from "react";
import { Text, View, Platform } from "react-native";
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
