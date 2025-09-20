import { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Card from "../components/Card";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const getStyles = (theme) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.background },
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    listContent: {
      paddingHorizontal: theme.spacing.medium,
      paddingBottom: theme.spacing.medium,
    },
    itemTitle: {
      ...theme.typography.body,
      fontWeight: "bold",
      color: theme.colors.text,
    },
    itemSummary: {
      ...theme.typography.caption,
      color: theme.colors.subtleText,
      marginTop: 4,
    },
    emptyText: {
      ...theme.typography.body,
      color: theme.colors.subtleText,
      textAlign: "center",
      marginTop: theme.spacing.large,
    },
  });

export default function ArtigosScreen({ navigation }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://dev.to/api/articles?username=${user.devto_user}`
        );
        if (!response.ok)
          throw new Error("Falha ao buscar os dados da API Dev.to.");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        Alert.alert("Erro", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [user.devto_user]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum artigo encontrado.</Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("WebView", { url: item.url })}
          >
            <Card>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemSummary}>{item.description}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
