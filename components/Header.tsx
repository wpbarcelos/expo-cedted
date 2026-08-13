import { StyleSheet, Text, View } from "react-native";
import { ShoppingCart } from "lucide-react";

export const Header = () => {
  return (
    <View style={style.container}>
      <ShoppingCart size={22} color={"#007bff"} strokeWidth={3} />
      <Text style={style.title}>comprar</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    height: 100,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    color: "#007bff",
    fontWeight: "bold",
  },
});
