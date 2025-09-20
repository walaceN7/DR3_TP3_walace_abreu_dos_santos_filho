import { useContext } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";
import { ThemeContext } from "../context/ThemeContext";

const skills = [
  { id: "1", name: "React Native & Expo" },
  { id: "2", name: "JavaScript (ES6+) & TypeScript" },
  { id: "3", name: "Node.js & Express" },
  { id: "4", name: "Gerenciamento de Estado (Context API)" },
  { id: "5", name: "Consumo de APIs REST" },
];
const certifications = [{ id: "c1", name: "Certified JavaScript Developer" }];

const getStyles = (theme) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.background },
    listContent: { padding: theme.spacing.medium },
    header: {
      ...theme.typography.subtitle,
      color: theme.colors.text,
      marginBottom: theme.spacing.small,
    },
    itemText: { ...theme.typography.body, color: theme.colors.text },
  });

export default function QualificacoesScreen() {
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={skills}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <Text style={styles.header}>Habilidades Principais</Text>
        }
        renderItem={({ item }) => (
          <Card>
            <Text style={styles.itemText}>{item.name}</Text>
          </Card>
        )}
        ListFooterComponent={
          <>
            <Text style={[styles.header, { marginTop: theme.spacing.large }]}>
              Certificações
            </Text>
            {certifications.map((cert) => (
              <Card key={cert.id}>
                <Text style={styles.itemText}>{cert.name}</Text>
              </Card>
            ))}
          </>
        }
      />
    </SafeAreaView>
  );
}
