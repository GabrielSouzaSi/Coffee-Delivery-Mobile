import { FlatList, Image, Text, View } from "react-native";

import latte from "@/assets/coffees/latte.png";
import mocacciono from "@/assets/coffees/mocaccino.png";
import irlandes from "@/assets/coffees/irlandes.png";

type CARD = {
  id: string;
  image: any;
  tag: string;
  title: string;
  description: string;
  price: string;
}

export function Carousel() {

    const card: CARD[] = [
        {
          id: "1",
          image: latte,
          tag: "TRADICIONAL",
          title: "Latte",
          description: "Café expresso com o dobro de leite e espuma cremosa",
          price: "9,90"
        },
        {
          id: "2",
          image: mocacciono,
          tag: "DOCE",
          title: "Mocaccino",
          description: "Bebida com canela feita de doses de café, leite e espuma",
          price: "9,90"
        },
        {
          id: "3",
          image: irlandes,
          tag: "ESPECIAL",
          title: "Irlandês",
          description: "Bebida a base de café, uísque irlanês, açúcar e chantily",
          price: "9,90"
        }
      ];

    const itemCard = (item: CARD) => (
        <View className="pt-6">
          <View className="w-[166px] h-[204px] border-purple_light border-2 bg-gray-800 mx-4 rounded-tl-sm rounded-tr-3xl rounded-bl-3xl rounded-br-sm items-center shadow">
            <Image
              source={item.image}
              className="w-16 h-16 -mt-4 mb-5"
              resizeMode="contain"
            />
            <View className="px-[6px] py-[3px] bg-purple_light rounded-full mb-3">
              <Text className="font-robotoBold text-[8px] text-purple_dark">
                {item.tag}
              </Text>
            </View>
            <Text className="font-baloo2Bold text-xl text-gray-200 mb-[3px]">
              {item.title}
            </Text>
            <Text className="font-robotoRegular text-xs text-gray-400 mx-3">
              {item.description}
            </Text>
            <Text className="font-baloo2Bold text-2xl text-yellow_dark mt-4 mb-4">
              R${item.price}
            </Text>
          </View>
        </View>
      );
    return (
        <>
            <FlatList
                data={card}
                renderItem={({ item }) => itemCard(item)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                style={{ marginTop: -90, marginBottom: 16 }}
            />
        </>
    )
}