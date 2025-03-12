import { StyleSheet } from "react-native-unistyles";

// Define theme types
const lightTheme = {
  colors: {
    background: "#FFFFFF",
    text: "#000000",
    primary: "#3498db",
  },
};

const darkTheme = {
  colors: {
    background: "#121212",
    text: "#FFFFFF",
    primary: "#2980b9",
  },
};

// Create themes
const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};

// Define breakpoints
const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = typeof appThemes;

// Register with Unistyles
StyleSheet.configure({
  settings: {
    initialTheme: "light",
  },
  breakpoints,
  themes: appThemes,
});

// Export types for TypeScript support
declare module "react-native-unistyles" {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}
