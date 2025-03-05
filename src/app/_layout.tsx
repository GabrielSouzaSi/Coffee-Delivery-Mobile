import "@/styles/global.css";
import { Stack } from "expo-router";
import { StatusBar, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import * as SplashScreen from "expo-splash-screen";

import { useFonts, Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { useFonts as fontUseRoboto, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontLoadedBaloo2] = useFonts({
        Baloo2_700Bold
    })
    const [fontLoadedRoboto] = fontUseRoboto({
        Roboto_400Regular,
        Roboto_700Bold
    })

    if (fontLoadedBaloo2 && fontLoadedRoboto) {
        SplashScreen.hideAsync();
    }

    return (
        <GestureHandlerRootView>
            <View className="flex-1 bg-gray-800">
                <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                {fontLoadedBaloo2 && fontLoadedRoboto && (<Stack screenOptions={{ headerShown: false }} />)}
            </View>
        </GestureHandlerRootView>
    )
}