import { useContext } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: theme.spacing.medium,
      backgroundColor: theme.colors.background,
    },
    title: {
      ...theme.typography.title,
      color: theme.colors.text,
      marginBottom: theme.spacing.small,
    },
    language: {
      ...theme.typography.caption,
      fontStyle: "italic",
      color: theme.colors.subtleText,
      marginBottom: theme.spacing.medium,
    },
    description: { ...theme.typography.body, color: theme.colors.text },
  });

export default function ProjetoDetailScreen({ route }) {
  const { project } = route.params;
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{project.name}</Text>
      <Text style={styles.language}>
        {project.language || "Linguagem não especificada"}
      </Text>
      <Text style={styles.description}>
        {project.description || "Este projeto não possui uma descrição."}
      </Text>
    </ScrollView>
  );
}
