import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
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

    fontSize: 16,
    textAlign: "center",
    color: "white",
    paddingTop: 15,
    marginBottom: 20,
  },
  label: { marginTop: 25, color: "white", fontWeight: "bold" },
  inputField: { color: "white", fontSize: 20, marginTop: 30 },
  inputFieldIOS: {
    color: "white",
    fontSize: 20,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    //alignSelf: 'stretch',
    borderWidth: 2,
    //borderColor: 'white',
    backgroundColor: "#21130d",
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
    color: "rgba(255,255,255,0.8)",
    fontWeight: "bold",
  },
});
