import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Header } from "./components/Header";
import Form from "./components/Form/Form";
import { CircleCheckBig, CircleDashed, Trash2 } from "lucide-react";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Form />
      <View
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 10,
          paddingTop: 30,
          paddingHorizontal: 12,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            borderBottomWidth: 1,
            paddingBottom: 10,
            borderBottomColor: "#ccc",
          }}
        >
          <TouchableOpacity style={{ flexDirection: "row", gap: 10 }}>
            <CircleDashed color={"#007bff"} />
            <Text style={{ color: "#007bff" }}>Presentes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: "row", gap: 10 }}>
            <CircleCheckBig color={"#777"} />
            <Text style={{ color: "#777" }}>Comprados</Text>
          </TouchableOpacity>
          <Text style={{ marginLeft: "auto", color: "#777" }}>Limpar</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            borderBottomWidth: 1,
            paddingBottom: 16,
            paddingTop: 16,
            borderBottomColor: "#ccc",
          }}
        >
          <TouchableOpacity style={{ flexDirection: "row", gap: 10 }}>
            <Text>Biscoito</Text>
          </TouchableOpacity>

          <View style={{ marginLeft: "auto" }}>
            <Trash2 color={"#777"} strokeWidth={1} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bcbec8",
  },
});
