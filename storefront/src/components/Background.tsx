import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

export const Background = () => {
  return (
    <View
      style={{
        position: "absolute",
        backgroundColor: "black",
        top: -450,
        width: 700,
        height: 700,
        //transform: [{rotate: '-70deg'}],
      }}
    >
      <ImageBackground
        source={require("./img/background.png")}
        style={styles.image}
      ></ImageBackground>
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
