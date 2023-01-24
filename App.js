import React, { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Container from "./src/navigation/Container";
import store from "./src/store/store";
import { View } from "react-native";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

const App = () => {
  const [loaded] = useFonts({
    "Arsalan-font": require("./assets/fonts/Arsalan.ttf"),
    "Inter-Black-Bold": require("./assets/fonts/IBMPlexSansArabic-Bold.ttf"),
    "Inter-Black-Light": require("./assets/fonts/IBMPlexSansArabic-Light.ttf"),
    "Inter-Black-Medium": require("./assets/fonts/IBMPlexSansArabic-Medium.ttf"),
    "Noto-Sans-Arabic": require("./assets/fonts/NotoSansArabic-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};

export default App;
