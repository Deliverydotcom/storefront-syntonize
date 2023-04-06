import { StyleSheet } from "react-native";

export const colors = {
  primary: "#1e81b0",
  secondary: "#eeeee4",
  tertiary: "#eab676",
  fourth: "#063970",
  fiveth: "#873e23",
  sixeth: "#FF6F00",
  seventh: "#abdbe3",
  eighth: "#333333",
  nineth: "#eee4e9",
  tenth: "#E8E6E0",
};

export const appStyles = StyleSheet.create({
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: 25,
    marginVertical: 25,
  },
  row: {
    flexDirection: "row",
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
  },

  "1col": {
    flex: 1,
  },
  "2col": {
    flex: 2,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  "3col": {
    backgroundColor: "orange",

    flex: 3,
  },
  "4col": {
    flex: 4,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 50,
    marginHorizontal: 30,
  },
  menuButton: {
    marginVertical: 5,

    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  menuItem: {
    fontSize: 17,
    paddingLeft: 10,
  },
});
