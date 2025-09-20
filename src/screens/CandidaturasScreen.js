import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";
import { CandidaturasContext } from "../context/CandidaturasContext";
import { ThemeContext } from "../context/ThemeContext";

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
    badge: {
      alignSelf: "flex-start",
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 12,
      marginTop: 8,
    },
    badgeText: { color: "white", fontSize: 12, fontWeight: "bold" },
    emptyText: {
      ...theme.typography.body,
      color: theme.colors.subtleText,
      textAlign: "center",
      marginTop: theme.spacing.large,
    },
  });

export default function CandidaturasScreen() {
  const { candidaturas } = useContext(CandidaturasContext);
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  const StatusBadge = ({ status }) => {
    const statusColors = {
      "Em análise": "#f0ad4e",
      Aplicado: theme.colors.primary,
      Rejeitado: "#d9534f",
      "Entrevista agendada": theme.colors.accent,
    };
    return (
      <View
        style={[
          styles.badge,
          { backgroundColor: statusColors[status] || theme.colors.subtleText },
        ]}
      >
        <Text style={styles.badgeText}>{status}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={candidaturas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <Text style={styles.header}>Minhas Candidaturas</Text>
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Você ainda não se candidatou a nenhuma vaga.
          </Text>
        }
        renderItem={({ item }) => (
          <Card>
            <Text style={styles.itemVaga}>{item.vaga}</Text>
            <Text style={styles.itemEmpresa}>{item.empresa}</Text>
            <StatusBadge status={item.status} />
          </Card>
        )}
      />
    </SafeAreaView>
  );
}
