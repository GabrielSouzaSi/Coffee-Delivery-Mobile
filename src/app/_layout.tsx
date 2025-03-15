import "@/styles/global.css";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";

import { useFonts, Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { useFonts as fontUseRoboto, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

// Impede o splash screen de sumir automaticamente
SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontLoadedBaloo2] = useFonts({
    Baloo2_700Bold,
  });

  const [fontLoadedRoboto] = fontUseRoboto({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      if (fontLoadedBaloo2 && fontLoadedRoboto) {
        setAppIsReady(true);
      }
    }

    prepare();
  }, [fontLoadedBaloo2, fontLoadedRoboto]);

  // Garante que o Splash Screen só desapareça após o layout estar pronto
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null; // Não renderiza nada enquanto as fontes não carregam
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="product/[id]" />
        <Stack.Screen name="cart" />
      </Stack>
    </GestureHandlerRootView>
  );
}

export default function RootLayout() {
  return <RootLayoutNav />;
}
