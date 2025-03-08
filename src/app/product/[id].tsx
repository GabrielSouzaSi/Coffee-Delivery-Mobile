import { useRouter } from "expo-router";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { ArrowLeft, ShoppingCart } from "phosphor-react-native";
import { colors } from "@/styles/colors";

export default function Product() {
    const router = useRouter();
    return (
        <View className="flex-1">

            <View className="bg-gray-100">

                <View className="justify-between flex-row mx-8 mt-5 mb-8">
                    <TouchableOpacity className="items-center" onPress={() => router.back()}>
                        <ArrowLeft size={20} color={colors.purple} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.navigate("/product/1")}>
                        <ShoppingCart size={20} weight="fill" color={colors.yellow_dark} />
                    </TouchableOpacity>
                </View>

                <View className="flex-row justify-between items-center mx-8">
                    <View className="flex-col">
                        <View className="flex-row">
                            <Text className="rounded-full font-robotoBold text-[10px] text-white px-4 py-2 bg-gray-200">
                                ESPECIAL
                            </Text>
                        </View>
                        <Text className="font-baloo2Bold text-2xl text-white my-4">
                            Islandês
                        </Text>
                    </View>
                    <Text className="font-baloo2Bold text-2xl text-yellow_dark mt-4">
                        R$ 9,90
                    </Text>
                </View>

                <Text className="rounded-full font-robotoRegular text-base text-white mx-8 py-2 mb-4">
                    Bebida a base de café, uísque irlandês, açúcar e chantilly
                </Text>

                <View className="items-center -mb-20">
                    <Image source={require("@/assets/smoke.png")} style={{ zIndex: 2 }} />
                </View>
                <View className="items-center -mb-16">
                    <Image source={require("@/assets/coffee.png")} style={{ zIndex: 1 }} />
                </View>
            </View>

            <View className="flex-1 justify-end mx-8">

                <Text>
                    Selecione o tamanho:
                </Text>
                <View className="flex-row justify-between">
                    <Button title="114ml" />
                    <Button title="140ml" />
                    <Button title="247ml" />
                </View>
                <View className="flex-row justify-between p-4 rounded-md bg-gray-700">
                    <Button title="-" />
                    <Button title="1" />
                    <Button title="+" />
                    <Button title="ADICIONAR" />
                </View>
            </View>
        </View>
    )
}