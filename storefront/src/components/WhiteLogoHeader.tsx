import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import LogoDelivery from "../assets/img/logo-delivery.svg";

export const WhiteLogoHeader = () => {
  return (
    <View style={{ alignItems: "center", flexDirection: "row" }}>
      {Platform.OS === "web" ? (
        <img src="../assets/img/logo-delivery.svg" height={101} width={101} />
      ) : (
        <LogoDelivery height={35} width={35} fill={"#666666"} />
      )}

      <Text
        style={{
          fontSize: 20,
          color: "white",
          marginTop: 6,
          marginLeft: 8,
        }}
      >
        StoreFront
      </Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   text: {
//     color: "white",
//     fontSize: 42,
//     lineHeight: 84,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "#000000c0",
//   },
// });
