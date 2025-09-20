import { useContext } from "react";
import { View } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { theme as appTheme } from "../theme/theme";

export default function Card({ children, style }) {
  const theme = useContext(ThemeContext);
  const cardStyle = {
    backgroundColor: theme.colors.card,
    borderRadius: 12,
    padding: theme.spacing.medium,
    marginVertical: theme.spacing.small,
    ...(theme.isDark === false && {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    }),
    ...(theme.isDark === true && {
      borderWidth: 1,
      borderColor: theme.colors.border,
    }),
  };
  return <View style={[cardStyle, style]}>{children}</View>;
}
