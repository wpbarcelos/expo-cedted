import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 8,
  },
  label: {},
  input: {
    backgroundColor: "#fff",
    borderRadius: 4,
    height: 40,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  button: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    gap: 4,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});
