import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: "center",
    height: 600,
    marginBottom: 50,
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 600,
    marginBottom: 50,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtext: {
    alignItems: "center",

    fontSize: 15,
    textAlign: "center",
    color: "white",
    paddingTop: 15,
    marginBottom: 20,
  },
  label: { marginTop: 25, color: "white", fontWeight: "bold" },
  inputField: {
    backgroundColor: "white",
    color: "#333333",
    fontSize: 15,
    padding: 12,
    marginTop: 30,
    borderRadius: 5,
  },
  inputFieldIOS: {
    borderBottomWidth: 0,
    backgroundColor: "white",
    color: "#333333",
    fontSize: 15,
    padding: 12,
    marginTop: 30,
    borderRadius: 5,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    //alignSelf: 'stretch',
    borderWidth: 2,
    borderColor: "#009295",
    backgroundColor: "#009295",
    paddingVertical: 10,
    paddingHorizontal: 120,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },

  forgotContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  forgotText: {
    color: "#8E7180",
    fontWeight: "bold",
  },
});
