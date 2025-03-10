import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "phosphor-react-native";

import { Select } from "@/components/select";

import { Button } from "@/components/button";

export default function Product() {

    const [buttonSelected, setButtonSelected] = useState(null);
    const [counter, setCounter] = useState(1)
    const [shopCartCounter, setShopCartCounter] = useState(0)

    const options = ["114ml", "140ml", "227ml"];

    const router = useRouter();

    const handleButton = (index: number) => {
        setButtonSelected(index);
    };

    return (
        <View className="flex-1 bg-white">

            <View className="bg-gray-100">

                <View className="justify-between flex-row mx-8 mt-5 mb-8">
                    <Button Icon={ArrowLeft} onClick={() => router.back()} />
                    <TouchableOpacity onPress={() => { }}>
                        {shopCartCounter > 0 ? (<View className="w-5 h-5 justify-center items-center rounded-full bg-purple ml-8 -mb-1">
                            <Text className="p-1 font-robotoRegular text-white text-[8px]">{shopCartCounter}</Text>
                        </View>) : <View className="w-5 h-5 -mb-1" />}
                        <Button Icon={ShoppingCart} weight="fill" />
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
                <View className="flex-row justify-between rounded-md bg-gray-700 my-4 p-2 gap-4">
                    <Button className="ml-4" Icon={Minus} onClick={() => setCounter(counter - 1)} weight="bold" />
                    <View className="w-5 justify-center items-center">
                        <Text className="font-robotoRegular text-lg text-gray-100">{counter}</Text>
                    </View>
                    <Button Icon={Plus} onClick={() => setCounter(counter + 1)} weight="bold" />
                    <Button 
                        title="ADICIONAR"
                        className="ml-2 p-3"
                        variant={true} 
                        onClick={() => setShopCartCounter(shopCartCounter + counter)}
                        />
                </View>
            </View>
        </View>
    )
}