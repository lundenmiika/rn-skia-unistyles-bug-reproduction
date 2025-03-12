# React Native Skia + Unistyles Bug Reproduction

This repository demonstrates a bug where Unistyles styling doesn't affect React Native Skia canvas styling on web platforms, while it works correctly on iOS.

## The Issue

When using Unistyles StyleSheet to style a React Native Skia Canvas component with `withUnistyles` or without, the styles are not applied correctly on web platform, but work as expected on iOS (Android not tested). When using regular React Native StyleSheet, the styles work correctly on both platforms.

The issue appears to be that on web, the Unistyles-wrapped Canvas receives default React Native web styles instead of any of the styles that are applied.

## How to Run

1. Clone this repository:

   ```
   git clone https://github.com/lundenmiika/rn-skia-unistyles-bug-reproduction.git
   cd rn-skia-unistyles-bug-reproduction
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the Expo development server:

   ```
   npm run start
   ```

4. Press 'w' to open in web browser or 'i' to open in iOS simulator

## How to See the Bug

1. When the app opens, you'll see a red canvas with circles (using regular StyleSheet)
2. Click/tap anywhere on the screen to toggle to the Unistyles version (cyan background)
3. On iOS: The canvas fills the entire screen in both modes and background switch from red to cyan works correctly
4. On Web: Only the regular StyleSheet version fills the screen with correct color transitions; the Unistyles version appears with default size and background switch from red to cyan does not work. Inspecting shows that none of the styles are applied to enclosing div

## Code Explanation

The app toggles between two components:

- `SkiaCanvas.tsx`: Uses regular React Native StyleSheet (works on both platforms)
- `SkiaCanvasWithUnistyles.tsx`: Uses Unistyles (works on iOS, fails on web)

Both components use identical styling with `StyleSheet.absoluteFillObject`.

## Environment

- react-native-unistyles: 3.0.0-beta.8
- @shopify/react-native-skia: 1.5.0
- react-native: 0.76.7
- react-native-web: 0.19.13
- expo: 52.0.37
