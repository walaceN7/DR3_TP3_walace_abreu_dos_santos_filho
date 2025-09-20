import { useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { ThemeContext } from "../context/ThemeContext";
import { theme as appTheme } from "../theme/theme";

const getStyles = (colors) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
  });

export default function WebViewScreen({ route }) {
  const { url } = route.params;
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme.colors);

  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: url }} />
    </SafeAreaView>
  );
}
