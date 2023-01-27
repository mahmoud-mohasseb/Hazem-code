import React from "react";
import Container from "./src/navigation/Container";
import { useFonts } from "expo-font";
import { LogBox } from "react-native";

// redux
import { Provider } from "react-redux";

// redux-persist
import { persistor, store } from "./src/store/store";
import { PersistGate } from "redux-persist/integration/react";

// Ignore log notification by message:
LogBox.ignoreLogs(["Warning: ..."]);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

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
      <PersistGate loading={null} persistor={persistor}>
        <Container />
      </PersistGate>
    </Provider>
  );
};

export default App;
