import { createContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import {
  getCandidaturas,
  saveCandidaturas,
} from "../storage/candidaturasStorage";

export const CandidaturasContext = createContext();

export function CandidaturasProvider({ children }) {
  const [candidaturas, setCandidaturas] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await getCandidaturas();
      setCandidaturas(data);
    }
    loadData();
  }, []);

  useEffect(() => {
    saveCandidaturas(candidaturas);
  }, [candidaturas]);

  const adicionarCandidatura = (novaVaga) => {
    if (candidaturas.some((c) => c.id === novaVaga.id)) {
      Alert.alert("Atenção", "Você já se candidatou para esta vaga.");
      return;
    }

    const candidaturaNova = { ...novaVaga, status: "Aplicado" };
    setCandidaturas((estadoAnterior) => [...estadoAnterior, candidaturaNova]);
    Alert.alert("Sucesso", "Candidatura realizada com sucesso!");
  };

  return (
    <CandidaturasContext.Provider
      value={{ candidaturas, adicionarCandidatura }}
    >
      {children}
    </CandidaturasContext.Provider>
  );
}
