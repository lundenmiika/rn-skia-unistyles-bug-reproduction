## Bug Report: Unistyles Styles Not Applying to Animated Text on Web

### Description

When using the `react-native-unistyles` library to style `Animated.Text` (or other Animated) components, the styles defined in the `react-native-unistyles` stylesheet do not apply when running the application in a web browser. In this example, the styles work correctly on iOS. On the web, the text spins as expected, but the text styling (e.g., color, font size) from the `unistyles` stylesheet is not applied. On iOS, the text spins and the styling is applied correctly, resulting in a red spinning text.

### Steps to Reproduce

1. Set up a React Native project with `react-native-reanimated` and `react-native-unistyles`.
2. Define styles using `react-native-unistyles`.
3. Apply the styles to an `Animated.Text` component.
4. Run the application in a web browser and on an iOS device.

### Expected Behavior

The styles defined in the `unistyles` stylesheet should be applied to the `Animated.Text` component on both web and iOS platforms.

### Actual Behavior

- **Web**: The text spins, but the styles from the `unistyles` stylesheet are not applied.
- **iOS**: The text spins and the styles from the `unistyles` stylesheet are applied correctly (e.g., red spinning text).

### Example Code

```tsx
import { Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { useState, useEffect } from "react";
import "./unistyles";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from "react-native-reanimated";

export default function App() {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 2000,
        easing: Easing.linear,
      }),
      -1
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.textStyles, animatedStyle]}>
        Hello
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyles: {
    fontSize: 20,
    color: "red",
  },
});
```

### Environment

- **React Native**: 0.76.7
- **react-native-reanimated**: 3.17.1
- **react-native-unistyles**: 3.0.0-nightly-20250318
- **Platform**: Web, iOS
