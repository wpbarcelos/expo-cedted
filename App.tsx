import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import ListaItens from "./components/ListaItens/ListaItens";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Form />
      <ListaItens />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bcbec8",
  },
});
