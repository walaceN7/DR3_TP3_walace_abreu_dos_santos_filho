import { useContext } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: theme.spacing.medium,
    },
    settingRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: theme.spacing.medium,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    label: { ...theme.typography.body, color: theme.colors.text },
    input: {
      ...theme.typography.body,
      borderWidth: 1,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.card,
      color: theme.colors.text,
      padding: theme.spacing.small,
      borderRadius: 8,
      width: "60%",
      textAlign: "right",
    },
  });

export default function SettingsScreen() {
  const { user, setUser } = useContext(UserContext);
  const theme = useContext(ThemeContext);
  const { toggleTheme } = theme;
  const styles = getStyles(theme);
  const isDarkMode = theme.isDark;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.settingRow}>
        <Text style={styles.label}>Nome de Exibição</Text>
        <TextInput
          style={styles.input}
          value={user.name}
          onChangeText={(newName) => setUser({ ...user, name: newName })}
          placeholderTextColor={theme.colors.subtleText}
        />
      </View>
      <View style={styles.settingRow}>
        <Text style={styles.label}>Modo Escuro</Text>
        <Switch
          trackColor={{ false: "#767577", true: theme.colors.accent }}
          thumbColor={isDarkMode ? theme.colors.accent : "#f4f3f4"}
          onValueChange={toggleTheme}
          value={isDarkMode}
        />
      </View>
    </SafeAreaView>
  );
}
