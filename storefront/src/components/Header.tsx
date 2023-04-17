import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { WhiteLogoHeader } from "./WhiteLogoHeader";
import { DrawerActions } from "@react-navigation/native";

type Props = {
  title: string;
  navigation: any;
};

export const Header = ({ title, navigation }: Props) => {
  return (
    <View style={styles.headerStyle}>
      <View style={{ justifyContent: "center" }}>
        <Text
          style={{ color: "white" }}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Icon name="menu-outline" size={25} />
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "white" }}>
          <WhiteLogoHeader />
        </Text>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text
          style={{ color: "white" }}
          onPress={() => navigation.navigate("ProfileScreen", { name: "Jane" })}
        >
          <Icon name="person-outline" size={20} />
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: "center",
    height: 70,
    flexDirection: "row",
    paddingRight: 15,
    paddingTop: 25,
    paddingLeft: 15,
    backgroundColor: "#8EA8A6",
  },
});
