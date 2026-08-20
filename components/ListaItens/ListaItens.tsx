import { CircleCheckBig, CircleDashed, Trash2 } from "lucide-react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { ProdutoItem } from "../../interfaces/ProdutoItem";
import ProdutoListaItem from "../ProdutoListaItem/ProdutoListaItem";

export const DATA: ProdutoItem[] = [
  {
    id: "1",
    nome: "Arroz (5kg)",
    comprado: true,
  },
  {
    id: "2",
    nome: "Feijão Preto (1kg)",
    comprado: false,
  },
  {
    id: "3",
    nome: "Macarrão Espaguete",
    comprado: true,
  },
  {
    id: "4",
    nome: "Óleo de Soja",
    comprado: false,
  },
  {
    id: "5",
    nome: "Açúcar Refinado",
    comprado: false,
  },
  {
    id: "4",
    nome: "Óleo de Soja",
    comprado: false,
  },
  {
    id: "5",
    nome: "Açúcar Refinado",
    comprado: false,
  },
];

export default function ListaItens() {
  const [active, setActive] = useState("presentes");

  const [produtos, setProdutos] = useState<ProdutoItem[]>([]);

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
      <FlatList<ProdutoItem>
        data={DATA}
        showsVerticalScrollIndicator={false}
        renderItem={(linha) => <ProdutoListaItem produto={linha.item} />}
      />
    </View>
  );
}
