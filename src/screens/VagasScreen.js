import { useContext } from "react";
import { Button, FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";
import { CandidaturasContext } from "../context/CandidaturasContext";
import { ThemeContext } from "../context/ThemeContext";
import { VAGAS_DISPONIVEIS } from "../data/vagasData";

const getStyles = (theme) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.background },
    listContent: { padding: theme.spacing.medium },
    header: {
      ...theme.typography.subtitle,
      color: theme.colors.text,
      marginBottom: theme.spacing.small,
      textAlign: "center",
    },
    itemVaga: {
      ...theme.typography.body,
      fontWeight: "bold",
      color: theme.colors.text,
    },
    itemEmpresa: {
      ...theme.typography.caption,
      color: theme.colors.subtleText,
      marginVertical: 4,
    },
  });

export default function VagasScreen() {
  const { adicionarCandidatura } = useContext(CandidaturasContext);
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={VAGAS_DISPONIVEIS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <Text style={styles.header}>Vagas Disponíveis</Text>
        }
        renderItem={({ item }) => (
          <Card>
            <Text style={styles.itemVaga}>{item.vaga}</Text>
            <Text style={styles.itemEmpresa}>{item.empresa}</Text>
            <Button
              title="Candidatar-se"
              onPress={() => adicionarCandidatura(item)}
              color={theme.colors.primary}
            />
          </Card>
        )}
      />
    </SafeAreaView>
  );
}
