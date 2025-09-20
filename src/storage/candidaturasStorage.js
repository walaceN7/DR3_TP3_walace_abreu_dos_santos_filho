import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@candidaturas_data";

const initialCandidaturas = [
  {
    id: "1",
    vaga: "Desenvolvedor React Native Pleno",
    empresa: "Tech Solutions",
    status: "Em análise",
  },
  {
    id: "2",
    vaga: "Engenheiro de Software Frontend",
    empresa: "Inova Corp",
    status: "Aplicado",
  },
  {
    id: "3",
    vaga: "Frontend Developer",
    empresa: "Startup XYZ",
    status: "Entrevista agendada",
  },
];

export async function getCandidaturas() {
  try {
    const storedData = await AsyncStorage.getItem(STORAGE_KEY);
    if (storedData !== null) {
      return JSON.parse(storedData);
    } else {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(initialCandidaturas)
      );
      return initialCandidaturas;
    }
  } catch (e) {
    console.error("Erro ao buscar candidaturas:", e);
    return [];
  }
}

export async function saveCandidaturas(candidaturas) {
  try {
    const jsonValue = JSON.stringify(candidaturas);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    console.error("Erro ao salvar candidaturas:", e);
  }
}
