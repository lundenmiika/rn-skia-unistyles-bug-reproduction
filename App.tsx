import { Pressable } from "react-native";
import { StyleSheet } from "react-native-unistyles";

// Import Unistyles configuration
import { useState } from "react";
import SkiaCanvas from "./SkiaCanvas";
import SkiaCanvasWithUnistyles from "./SkiaCanvasWithUnistyles";
import "./unistyles";

export default function App() {
  const [mode, setMode] = useState<"default" | "unistyles">("default");
  return (
    <Pressable
      style={StyleSheet.absoluteFillObject}
      onPress={() =>
        setMode((currentMode) =>
          currentMode === "default" ? "unistyles" : "default"
        )
      }
    >
      {mode === "default" ? <SkiaCanvas /> : <SkiaCanvasWithUnistyles />}
    </Pressable>
  );
}
