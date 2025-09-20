import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { CandidaturasProvider } from "./src/context/CandidaturasContext";
import { ThemeContext, ThemeProvider } from "./src/context/ThemeContext";
import { UserProvider } from "./src/context/UserContext";
import AppNavigator from "./src/navigation/AppNavigator";

function AppContent() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <StatusBar style={theme.isDark ? "light" : "dark"} />
      <CandidaturasProvider>
        <AppNavigator />
      </CandidaturasProvider>
    </>
  );
}

export default function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </UserProvider>
  );
}
