import "@/styles/global.css";
import { router, Stack } from "expo-router";
import { StatusBar, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import * as SplashScreen from "expo-splash-screen";

import { useFonts, Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { useFonts as fontUseRoboto, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
    const [fontLoadedBaloo2] = useFonts({
        Baloo2_700Bold
    })
    const [fontLoadedRoboto] = fontUseRoboto({
        Roboto_400Regular,
        Roboto_700Bold
    })

    useEffect(() => {
        if(fontLoadedBaloo2 && fontLoadedRoboto){
            SplashScreen.hideAsync();
        }
    }, [fontLoadedBaloo2, fontLoadedRoboto])

    return (
        <GestureHandlerRootView>
            <View className="flex-1 bg-gray-800">
                <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                <Stack screenOptions={{ headerShown: false }} >
                    <Stack.Screen name="index" />
                    <Stack.Screen name="product/[id]" />
                    <Stack.Screen name="cart" />
                </Stack>
            </View>
        </GestureHandlerRootView>
    )
}

export default function RootLayout() {
    return <RootLayoutNav />
}