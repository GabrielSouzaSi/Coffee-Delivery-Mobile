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
                    <Button Icon={ArrowLeft} onClick={() => router.back()} size={24} />

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

                        <View className="flex-row mx-3 mb-3 gap-2">

                            <View className="flex-row border-purple_light border-2 gap-2 rounded-md" >
                                <Button className="p-2" Icon={Minus} weight="bold" />
                                <View className="w-5 justify-center items-center">
                                    <Text className="font-robotoRegular text-lg text-gray-100">1</Text>
                                </View>
                                <Button className="p-2" Icon={Plus} weight="bold" />
                            </View>

                            <Button Icon={Trash} weight="bold" className="bg-gray-600 py-2 px-3" />
                        </View>

                    </View>
                </View>

            </View>

            <View className="justify-end gap-3 bg-white">

                <View className="flex-row mt-5 mb-8 mx-8 justify-between">
                    <Text className="font-robotoRegular text-lg text-gray-400 self-center">
                        Valor total
                    </Text>
                    <Text className="font-baloo2Bold text-2xl top-1 text-gray-200 self-center">
                        R$9,90
                    </Text>
                </View>
                <View className="flex-row mx-8 mb-8">
                    <Button
                        title="CONFIRMAR PEDIDO"
                        className="p-4"
                        variant={true}
                        onClick={() => { }}
                    />
                </View>

            </View>
        </View>
    )
}