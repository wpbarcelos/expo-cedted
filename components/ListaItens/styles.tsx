import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    marginTop: 10,
    paddingTop: 30,
    paddingHorizontal: 12,
  },
  topBar: {
    flexDirection: "row",
    gap: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: "#ccc",
  },
  buttonTopBar: { flexDirection: "row", gap: 10 },
  containerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    borderBottomWidth: 1,
    paddingBottom: 16,
    paddingTop: 16,
    borderBottomColor: "#ccc",
  },
});
