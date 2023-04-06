import { StyleSheet } from "react-native";

export const colors = {
  backgapp: "#090B21",
  backgapplight: "#26294f",
  primary: "#090B21",
  secondary: "#6AF3AA",
  bluelight: "#6AF3E4",
  greylight: "#E4E5E7",
  greenbold: "#5FAF84",
  sixeth: "#FF6F00",
  seventh: "#abdbe3",
  eighth: "#333333",
  nineth: "#1580b0",
  tenth: "#E8E6E0",
  darklight: "#666666",
};

export const appStyles = StyleSheet.create({
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: "100%",
    backgroundColor: colors.backgapp,
  },
  row: {
    flexDirection: "row",
  },
  card: {
    backgroundColor: "white",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 10,
  },

  cardbottom: {
    backgroundColor: "white",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    border: 0,
  },
  cardtop: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
    paddingVertical: 20,
    backgroundColor: colors.bluelight,
  },

  "1col": {
    flex: 1,
  },
  "1mcol": { flex: 1, minWidth: 70 },
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
    color: "white",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  menuItem: {
    fontSize: 17,
    color: "white",
    paddingLeft: 10,
  },
  menuIcon: {
    color: "white",
  },
});
