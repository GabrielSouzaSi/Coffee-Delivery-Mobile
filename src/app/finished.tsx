import { Image, Text, View } from "react-native";
import { router } from "expo-router";

import { Button } from "@/components/button";

import Illustration from "@/assets/Illustration.png";

export default function Finished() {
    return (
        <View className="flex-1 justify-center items-center px-8">
            <Image source={Illustration} />
            <Text className="font-baloo2Bold text-yellow_dark text-2xl pt-6">Uhu! Pedido confirmado</Text>
            <Text className="font-robotoRegular text-gray-100 text-lg mx-16 text-center">Agora é só aguardar que logo o café chegará até você!</Text>
            <Button className="w-full bg-purple mt-10" onPress={() => router.navigate("/")}>
                <Button.Title className="font-robotoRegular font-bold text-white text-base py-4">IR PARA A HOME</Button.Title>
            </Button>
        </View>
    )
}