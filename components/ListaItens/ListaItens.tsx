import { CircleCheckBig, CircleDashed, Trash2 } from "lucide-react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function ListaItens() {
  const [active, setActive] = useState("presentes");

  function alterarActiveParaPresentes() {
    setActive("presentes");
  }

  function alterarActiveParaComprados() {
    setActive("comprados");
  }

  return (
    <View style={styles.container}>
      {/* Filtro */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.buttonTopBar}
          onPress={alterarActiveParaPresentes}
        >
          <CircleDashed color={active === "presentes" ? "#007bff" : "#777"} />
          <Text style={{ color: active === "presentes" ? "#007bff" : "#777" }}>
            Presentes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonTopBar}
          onPress={alterarActiveParaComprados}
        >
          <CircleCheckBig color={active === "comprados" ? "#007bff" : "#777"} />
          <Text style={{ color: active === "comprados" ? "#007bff" : "#777" }}>
            Comprados
          </Text>
        </TouchableOpacity>
        <Text style={{ marginLeft: "auto", color: "#777" }}>Limpar</Text>
      </View>

      {/* Lista de itens*/}

      <View style={styles.containerItem}>
        <TouchableOpacity style={styles.buttonTopBar}>
          <Text>Biscoito</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Trash2 color={"#777"} strokeWidth={1} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
