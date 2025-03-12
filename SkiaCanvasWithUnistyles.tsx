import {
  Canvas,
  Circle,
  Group,
  Text,
  Skia,
  matchFont,
  FontStyle,
} from "@shopify/react-native-skia";
import { Platform } from "react-native";
import { StyleSheet, withUnistyles } from "react-native-unistyles";

const CanvasWithUnistyles = withUnistyles(Canvas);

const familyName = Platform.select({ ios: "Helvetica", default: "serif" });
const fontSize = 32;
// Get the system font manager
const fontMgr = Skia.FontMgr.System();
// Matching a font
const typeface =
  Platform.OS === "web"
    ? undefined
    : fontMgr.matchFamilyStyle(familyName, FontStyle.Bold);
const font = Skia.Font(typeface, fontSize);

export const SkiaCanvasWithUnistyles = () => {
  // Create a font using the default system font
  if (!font) return null;

  return (
    <>
      <CanvasWithUnistyles style={styles.canvas}>
        <Circle cx={150} cy={150} r={50} color="cyan" />
        <Circle cx={200} cy={150} r={50} color="magenta" />
        <Circle cx={175} cy={200} r={50} color="yellow" />

        <Text x={80} y={80} text="Unistyles Canvas" font={font} color="black" />
      </CanvasWithUnistyles>
    </>
  );
};
export default SkiaCanvasWithUnistyles;

const styles = StyleSheet.create({
  canvas: {
    backgroundColor: "cyan",
    ...StyleSheet.absoluteFillObject,
  },
});
