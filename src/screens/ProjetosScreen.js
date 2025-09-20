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
    itemName: {
      ...theme.typography.body,
      fontWeight: "bold",
      color: theme.colors.text,
    },
    itemLanguage: {
      ...theme.typography.caption,
      color: theme.colors.subtleText,
      marginTop: 4,
    },
  });

export default function ProjetosScreen({ navigation }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${user.github_user}/repos`
        );
        if (!response.ok)
          throw new Error("Falha ao buscar os dados do GitHub.");
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        Alert.alert("Erro", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, [user.github_user]);

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
        data={repos}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProjectDetails", { project: item })
            }
          >
            <Card>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemLanguage}>{item.language || "N/A"}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
