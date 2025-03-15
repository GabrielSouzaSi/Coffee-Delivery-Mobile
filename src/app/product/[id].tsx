import { useEffect, useState } from "react";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "phosphor-react-native";

import { Select } from "@/components/select";

import { Button } from "@/components/button";
import { colors } from "@/styles/colors";

export default function Product() {

    const [buttonSelected, setButtonSelected] = useState(null);
    const [counter, setCounter] = useState(1)
    const [shopCartCounter, setShopCartCounter] = useState(0)

    const options = ["114ml", "140ml", "227ml"];

    const handleButton = (index: number) => {
        setButtonSelected(index);
    };

    const handleCounter = (n: number) => {
        n === 0 || n === 10 ? null : setCounter(n);
    }

    return (
        <View className="flex-1 bg-white">

            <View className="bg-gray-100">

                <View className="justify-between flex-row mx-8 mt-5 mb-8">
                    <Button onPress={() => router.back()}>
                        <Button.Icon Icon={ArrowLeft} />
                    </Button>

                    <TouchableOpacity onPress={() => router.navigate("/cart")}>
                        {shopCartCounter > 0 ? (<View className="w-5 h-5 justify-center items-center rounded-full bg-purple ml-5 -mb-1">
                            <Text className="p-1 font-robotoRegular text-white text-[8px]">{shopCartCounter}</Text>
                        </View>): <View className="w-5 h-5 ml-5 -mb-1" />}
                            <ShoppingCart size={20} color={colors.purple} weight="fill" />
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

                <Text className="rounded-full font-robotoRegular text-lg text-white mx-8 py-2 mb-4">
                    Bebida a base de café, uísque irlandês, açúcar e chantilly
                </Text>

                <View className="items-center -mb-20">
                    <Image source={require("@/assets/smoke.png")} style={{ zIndex: 2 }} />
                </View>
                <View className="items-center -mb-16">
                    <Image source={require("@/assets/coffee.png")} style={{ zIndex: 1 }} />
                </View>
            </View>

            <View className="flex-1 justify-end mx-8 gap-3">

                <Text className="font-robotoRegular text-lg text-gray-400">
                    Selecione o tamanho:
                </Text>
                <View className="flex-row justify-between gap-4">
                    {options.map((item, index) => (
                        <Select key={item} selected={buttonSelected === index} title={item} onClick={() => handleButton(index)} />
                    ))}
                </View>
                <View className="flex-row justify-between rounded-md bg-gray-700 my-4 p-3">
                    <Button className="p-3" onPress={() => handleCounter(counter - 1)}>
                        <Button.Icon Icon={Minus} />
                    </Button>
                    <View className="w-6 justify-center items-center">
                        <Text className="font-robotoRegular text-lg text-gray-100">{counter}</Text>
                    </View>
                    <Button className="p-3" onPress={() => handleCounter(counter + 1)}>
                        <Button.Icon Icon={Plus} />
                    </Button>
                    <Button className="flex-1 bg-purple ml-5" onPress={() => setShopCartCounter(shopCartCounter + counter)}>
                        <Button.Title className="font-robotoRegular font-bold text-white text-base py-4">ADICIONAR</Button.Title>
                    </Button>
                </View>
            </View>
        </View>
    )
}