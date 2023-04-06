import { StyleSheet } from "react-native";
import { colors } from "./appTheme";

export const homeStyles = (fadeAnim: any) =>
  StyleSheet.create({
    container: {
      fontFamily: "OpenSans-Light",
      fontSize: 14,
      flex: 1,
      paddingHorizontal: 30,
      justifyContent: "center",
      alignItems: "center",
      opacity: fadeAnim,
    },
    miniText: {
      color: colors.eighth,
      fontSize: 10,
      fontFamily: "OpenSans-Regular",
    },
    textforIcons: {
      color: colors.eighth,
      fontSize: 12,
      fontFamily: "OpenSans-Regular",
    },
    testDataSettings: {
      color: colors.eighth,
      fontSize: 12,
      fontFamily: "OpenSans-Regular",
    },
    textNumber: {
      color: "white",
      fontSize: 15,
      fontFamily: "OpenSans-Regular",
    },
    textNumberBlue: {
      color: colors.primary,
      fontSize: 15,
      fontFamily: "OpenSans-Regular",
    },
    backgroundOrange: {
      backgroundColor: colors.sixeth,
    },
    backgroundLater: {
      backgroundColor: colors.seventh,
    },
    backgroundDataSettings: {
      backgroundColor: colors.nineth,
    },
    backgroundSound: {
      backgroundColor: colors.tenth,
    },
    bigNumber: {
      alignItems: "center",
      color: "white",
      fontSize: 30,
      fontFamily: "OpenSans-Bold",
    },
    bigNumberBlue: {
      alignItems: "center",
      color: colors.primary,
      fontSize: 30,
      fontFamily: "OpenSans-Bold",
    },

    heightRow: { height: 200 },
    row: {
      flex: 1,
      backgroundColor: "blue",
      height: 200,
      flexDirection: "row",
      flexWrap: "wrap",
      // alignItems: "flex-start", // if you want to fill rows left to right
    },
    col1: {
      backgroundColor: "red",
      width: "100%", // is 50% of container width
    },
    col2: {
      width: "50%", // is 50% of container width
    },
  });
