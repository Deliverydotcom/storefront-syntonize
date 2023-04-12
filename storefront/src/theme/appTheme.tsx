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
  redrose: "#CA506E",
  redrosebold: "#c4123e",
  redroselight: "#CE7F9C",
};

export const appStyles = StyleSheet.create({
  app: {
    flex: 4,
    height: 600,
  },
  linearGradient: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    minHeight: 600,
  },

  whiteLine: {
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1,
  },
  greyLine: { borderBottomColor: "#BCB9BC", height: 1, borderBottomWidth: 1 },

  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
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
    backgroundColor: "transparent",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    border: 0,
  },
  cardtop: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginRight: 4,
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
