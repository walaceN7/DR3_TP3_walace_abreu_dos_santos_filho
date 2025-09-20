import { useContext } from "react";
import {
  Alert,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: theme.colors.background,
      padding: theme.spacing.medium,
    },
    header: { alignItems: "center", marginBottom: theme.spacing.large },
    avatar: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginBottom: theme.spacing.medium,
    },
    name: { ...theme.typography.title, color: theme.colors.text },
    sectionTitle: {
      ...theme.typography.subtitle,
      color: theme.colors.text,
      marginTop: theme.spacing.large,
      marginBottom: theme.spacing.small,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
      paddingBottom: theme.spacing.small,
    },
    text: { ...theme.typography.body, color: theme.colors.subtleText },
    linkText: {
      ...theme.typography.body,
      color: theme.colors.primary,
      textDecorationLine: "underline",
    },
    contactRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: theme.spacing.small,
    },
  });

export default function ProfileScreen() {
  const { user } = useContext(UserContext);
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  const handleLinkPress = async (url, type) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert("Erro", `Não foi possível abrir o link do ${type}.`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <Text style={styles.sectionTitle}>Sobre Mim</Text>
      <Text style={styles.text}>{user.bio}</Text>
      <Text style={styles.sectionTitle}>Contato</Text>
      <View style={styles.contactRow}>
        <Text style={styles.text}>Email: </Text>
        <TouchableOpacity
          onPress={() => handleLinkPress(`mailto:${user.email}`, "email")}
        >
          <Text style={styles.linkText}>{user.email}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contactRow}>
        <Text style={styles.text}>LinkedIn: </Text>
        <TouchableOpacity
          onPress={() => handleLinkPress(user.linkedin, "LinkedIn")}
        >
          <Text style={styles.linkText}>Abrir Perfil</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
