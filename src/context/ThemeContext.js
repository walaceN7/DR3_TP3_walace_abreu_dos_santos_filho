import { createContext, useState } from "react";
import { theme as appTheme } from "../theme/theme";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    setThemeMode((currentMode) => (currentMode === "light" ? "dark" : "light"));
  };

  const theme = {
    isDark: themeMode === "dark",
    colors: themeMode === "dark" ? appTheme.darkColors : appTheme.lightColors,
    typography: appTheme.typography,
    spacing: appTheme.spacing,
    toggleTheme: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
