import { Pressable, Text } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
import { useState } from "react";

// Import Unistyles configuration
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
      {mode === "default" ? (
        <WithSkiaWeb
          getComponent={() => import("./SkiaCanvas")}
          fallback={
            <Text style={{ textAlign: "center" }}>Loading Skia...</Text>
          }
        />
      ) : (
        <WithSkiaWeb
          getComponent={() => import("./SkiaCanvasWithUnistyles")}
          fallback={
            <Text style={{ textAlign: "center" }}>
              Loading Skia with Unistyles...
            </Text>
          }
        />
      )}
    </Pressable>
  );
}
