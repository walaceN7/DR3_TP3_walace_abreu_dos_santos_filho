import { useContext } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing.large,
      backgroundColor: theme.colors.background,
    },
    avatar: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: theme.spacing.large,
      borderWidth: 3,
      borderColor: theme.colors.primary,
    },
    name: {
      ...theme.typography.title,
      color: theme.colors.text,
    },
    bio: {
      ...theme.typography.body,
      color: theme.colors.subtleText,
      textAlign: "center",
      marginVertical: theme.spacing.medium,
    },
  });

export default function HomeScreen({ navigation }) {
  const { user } = useContext(UserContext);
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
      <Button
        title="Ver Perfil Completo"
        onPress={() => navigation.navigate("Profile")}
        color={theme.colors.primary}
      />
    </View>
  );
}
