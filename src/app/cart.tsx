import { useEffect, useState } from "react";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ArrowLeft, Minus, Plus, Trash } from "phosphor-react-native";

import { Button } from "@/components/button";

import irlandes from "@/assets/coffees/irlandes.png";

export default function Cart() {
    return (
        <View className="flex-1">

            <View className="bg-white p-8">

                <View className="relative flex-row items-center">
                    <Button onPress={() => router.back()}>
                        <Button.Icon Icon={ArrowLeft} size={24} />
                    </Button>

                    <Text className="absolute left-1/2 -translate-x-1/2 top-1 font-baloo2Bold text-2xl text-gray-200">
                        Carrinho
                    </Text>
                </View>

            </View>

            <View className="flex-1">

                <View
                    className="flex-row px-8  py-4 gap-2 border-gray-700 border-2 bg-white"
                >
                    <View className="flex-col justify-center">
                        <Image source={irlandes} className="w-20 h-20" resizeMode="contain" />
                    </View>

                    <View className="flex-col flex-1">

                        <View className="flex-row justify-between mx-3 mb-3">
                            <View className="">
                                <Text className="font-robotoRegular text-lg text-gray-200">
                                    Irlandês
                                </Text>
                                <Text className="font-robotoRegular text-base text-gray-400">
                                    227ml
                                </Text>
                            </View>
                            <Text className="font-baloo2Bold top-1 text-lg text-gray-100">
                                R$9,90
                            </Text>
                        </View>

                        <View className="flex-row mx-3 mb-3 gap-4">

                            <View className="flex-row border-purple_light border-2 gap-2 rounded-md" >
                                <Button className="p-2">
                                    <Button.Icon Icon={Minus} />
                                </Button>
                                <View className="w-5 justify-center items-center">
                                    <Text className="font-robotoRegular text-lg text-gray-100">1</Text>
                                </View>
                                <Button className="p-2">
                                    <Button.Icon Icon={Plus} />
                                </Button>
                            </View>
                            
                            <Button className="bg-gray-600 py-2 px-3">
                                <Button.Icon Icon={Trash} />
                            </Button>

                        </View>

                    </View>
                </View>

            </View>

            <View className="justify-end gap-4 bg-white">

                <View className="flex-row mt-4 mx-8 justify-between">
                    <Text className="font-robotoRegular text-lg text-gray-400 self-center">
                        Valor total
                    </Text>
                    <Text className="font-baloo2Bold text-2xl top-1 text-gray-200 self-center">
                        R$9,90
                    </Text>
                </View>
                <View className="flex-row mx-8 mb-8">
                    {/* <Button
                        title="CONFIRMAR PEDIDO"
                        className="p-4"
                        variant={true}
                        onPress={() => router.navigate("/finished")}
                    /> */}
                    <Button className="flex-1 bg-yellow_dark" onPress={() => router.navigate("/finished")}>
                        <Button.Title className="font-robotoRegular font-bold text-white text-base py-4">CONFIRMAR PEDIDO</Button.Title>
                    </Button>
                </View>

            </View>
        </View>
    )
}