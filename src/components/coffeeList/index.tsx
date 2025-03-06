import { Image, Text, View } from "react-native";

import expresso from "@/assets/coffees/expresso.png";
import americano from "@/assets/coffees/americano.png";
import cremoso from "@/assets/coffees/expressocremoso.png";
import latte from "@/assets/coffees/latte.png";
import gelado from "@/assets/coffees/cafegelado.png";
import capuccino from "@/assets/coffees/capuccino.png";
import mocaccino from "@/assets/coffees/mocaccino.png";
import quente from "@/assets/coffees/chocolatequente.png";
import cubano from "@/assets/coffees/cubano.png";
import havaiano from "@/assets/coffees/havaiano.png";
import arabe from "@/assets/coffees/arabe.png";
import irlandes from "@/assets/coffees/irlandes.png";

type COFFEE = {
    id: string;
    image: any;
    tag: string,
    title: string;
    description: string;
    price: string;
}

type CATEGORIE = {
    name: string;
    list: COFFEE[]
}

export function CoffeeList() {

    const coffeeCategories: CATEGORIE[] = [
        {
            name: "Tradicionais",
            list: [
                {
                    id: "1",
                    image: expresso,
                    tag: "TRADICIONAL",
                    title: "Expresso Tradicional",
                    description: "O tradicional café com água quente e grãos moídos",
                    price: "9,90"
                },
                {
                    id: "2",
                    image: americano,
                    tag: "TRADICIONAL",
                    title: "Expresso Americano",
                    description: "Expresso diluído, menos intenso que o tradicional",
                    price: "9,90"
                },
                {
                    id: "3",
                    image: cremoso,
                    tag: "TRADICIONAL",
                    title: "Expresso Cremoso",
                    description: "Café espresso tradicional com espuma cremosa",
                    price: "9,90"
                },
                {
                    id: "4",
                    image: latte,
                    tag: "TRADICIONAL",
                    title: "Latte",
                    description: "Café expresso com o dobro de leite e espuma cremosa",
                    price: "9,90"
                },
                {
                    id: "5",
                    image: gelado,
                    tag: "TRADICIONAL",
                    title: "Expresso Gelado",
                    description: "Bebida preparada com café expresso e cubos de gelo",
                    price: "9,90"
                }
            ]
        },
        {
            name: "Doces",
            list: [
                {
                    id: "6",
                    image: capuccino,
                    tag: "DOCES",
                    title: "Capuccino",
                    description: "Bebida com canela feita de doses de café, leite e espuma",
                    price: "9,90"
                },
                {
                    id: "7",
                    image: mocaccino,
                    tag: "DOCES",
                    title: "Mocaccino",
                    description: "Café expresso com calda de chocolate, pouco leite e espuma",
                    price: "9,90"
                },
                {
                    id: "8",
                    image: quente,
                    tag: "DOCES",
                    title: "Chocolate Quente",
                    description: "Bebida feita com chocolate dissolvido no leite quente e café",
                    price: "9,90"
                }
            ]
        },
        {
            name: "Especiais",
            list: [
                {
                    id: "9",
                    image: cubano,
                    tag: "ESPECIAIS",
                    title: "Cubano",
                    description: "Drink gelado de café expresso, com rum, creme de leite e hortelã",
                    price: "9,90"
                },
                {
                    id: "10",
                    image: havaiano,
                    tag: "ESPECIAIS",
                    title: "Havaiano",
                    description: "Bebida adocicada preparada com café e leite de coco",
                    price: "9,90"
                },
                {
                    id: "11",
                    image: arabe,
                    tag: "ESPECIAIS",
                    title: "Árabe",
                    description: "Bebida preparada com grãos de café árabe e especiarias",
                    price: "9,90"
                },
                {
                    id: "12",
                    image: irlandes,
                    tag: "ESPECIAIS",
                    title: "Irlandês",
                    description: "Bebida a base de café, uísque irlanês, açúcar e chantily",
                    price: "9,90"
                }
            ]
        }
    ]

    return (
        <>
            {coffeeCategories.map((categorie: CATEGORIE) => (
                <View key={categorie.name}>
                    <Text className="font-baloo2Bold text-base text-gray-400 ml-8 my-4">{categorie.name}</Text>
                    {categorie.list.map((coffee: COFFEE) => (
                        <View
                            key={coffee.id}
                            className="flex-row mx-8 my-4 border-purple_light border-2 bg-gray-800 rounded-tl-sm rounded-tr-3xl rounded-bl-3xl rounded-br-sm shadow"
                        >
                            <Image source={coffee.image} className="w-24 h-24 -mt-4" resizeMode="contain" />

                            <View className="flex-col mx-3 mb-3 flex-1">
                                <Text className="font-baloo2Bold text-xl text-gray-200 my-2 mt-2">
                                    {coffee.title}
                                </Text>
                                <Text className="font-robotoRegular text-base text-gray-400">
                                    {coffee.description}
                                </Text>
                                <Text className="font-baloo2Bold text-2xl text-yellow_dark mt-4">
                                    R${coffee.price}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            ))}
        </>
    );
}

{/* <View className="flex-row mx-8 border-purple_light border-2 bg-gray-800 rounded-tl-sm rounded-tr-3xl rounded-bl-3xl rounded-br-sm shadow">
                        <Image
                            source={item.image}
                            className="w-24 h-24 -mt-4"
                            resizeMode="contain"
                        />

                        <View className="flex-1 flex-col ml-2 mb-3">
                            <Text className="font-baloo2Bold text-xl text-gray-200 my-2 mt-4">
                                {item.title}
                            </Text>
                            <Text className="font-robotoRegular text-xs text-gray-400 w-full">
                                {item.description}
                            </Text>
                            <Text className="font-baloo2Bold text-2xl text-yellow_dark mt-4">
                                R${item.price}
                            </Text>
                        </View>

                    </View> */}