import "@/styles/global.css";
import { Stack } from "expo-router"
import { StatusBar, View } from "react-native"

export default function RootLayout() {
    return (
        <View className="flex-1">
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Stack screenOptions={{ headerShown: false }} />
        </View>

    )
}