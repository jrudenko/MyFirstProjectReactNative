import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  regInputs: {
    display: "flex",
    position: "relative",
    height: "80%",
    minWidth: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  textPosition: {
    display: "flex",
    paddingBottom: 40,
  },

  input: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "#9acd32",
    borderRadius: 5,
    marginBottom: 10,
  },

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 300,
    height: 50,
    padding: 10,
    borderColor: "#2e8b57",
    borderRadius: 100,
    marginBottom: 10,
    backgroundColor: "#9acd32",
  },

  avatarPlace: {
    display: "flex",
    minHeight: 120,
    minWidth: 120,
    position: "absolute",
    top: -120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },

  add: {
    display: "flex",
    position: "absolute",
    minHeight: 25,
    minWidth: 25,
    borderRadius: 100,
    color: "blue",
    top: -50,
    right: "39%",
  },
});
