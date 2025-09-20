import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import "react-native-gesture-handler";

import { ThemeContext } from "../context/ThemeContext";

import ArtigosScreen from "../screens/ArtigosScreen";
import CandidaturasScreen from "../screens/CandidaturasScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProjetoDetailScreen from "../screens/ProjetoDetailScreen";
import ProjetosScreen from "../screens/ProjetosScreen";
import QualificacoesScreen from "../screens/QualificacoesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import VagasScreen from "../screens/VagasScreen";
import WebViewScreen from "../screens/WebViewScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  const theme = useContext(ThemeContext);
  const { colors } = theme;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.subtleText,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName = "alert-circle-outline";
          if (route.name === "Home") iconName = "home-outline";
          else if (route.name === "Vagas") iconName = "search-outline";
          else if (route.name === "Candidaturas")
            iconName = "document-text-outline";
          else if (route.name === "Projetos") iconName = "folder-open-outline";
          else if (route.name === "Qualificações") iconName = "ribbon-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Qualificações" component={QualificacoesScreen} />
      <Tab.Screen name="Projetos" component={ProjetosScreen} />
      <Tab.Screen name="Vagas" component={VagasScreen} />
      <Tab.Screen name="Candidaturas" component={CandidaturasScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const theme = useContext(ThemeContext);
  const { colors, isDark } = theme;

  const navigationTheme = {
    dark: isDark,
    colors: {
      primary: colors.primary,
      background: colors.background,
      card: colors.card,
      text: colors.text,
      border: colors.border,
      notification: colors.accent,
    },
    fonts: {
      regular: {
        fontFamily: "System",
        fontWeight: "400",
      },
      medium: {
        fontFamily: "System",
        fontWeight: "500",
      },
      bold: {
        fontFamily: "System",
        fontWeight: "700",
      },
      heavy: {
        fontFamily: "System",
        fontWeight: "900",
      },
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator
        screenOptions={{
          headerBackTitle: "Voltar",
          headerStyle: {
            backgroundColor: colors.card,
            shadowColor: "transparent",
          },
          headerTintColor: colors.primary,
        }}
      >
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={({ navigation }) => ({
            title: "Bio do Desenvolvedor",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Settings")}
                style={{ marginRight: 15 }}
              >
                <Ionicons
                  name="settings-outline"
                  size={24}
                  color={colors.primary}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Perfil Completo" }}
        />
        <Stack.Screen
          name="ProjectDetails"
          component={ProjetoDetailScreen}
          options={{ title: "Detalhes do Projeto" }}
        />
        <Stack.Screen
          name="Artigos"
          component={ArtigosScreen}
          options={{ title: "Artigos e Publicações" }}
        />
        <Stack.Screen name="WebView" component={WebViewScreen} />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: "Configurações" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
