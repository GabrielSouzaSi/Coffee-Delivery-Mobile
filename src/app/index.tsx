import { useRouter } from "expo-router";
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MapPin, ShoppingCart } from "phosphor-react-native";

import { Carousel } from "@/components/carousel";
import { Tag } from "@/components/tag";
import { CoffeeList } from "@/components/coffeeList";

import { colors } from "@/styles/colors";


export default function Catalog() {

  const router = useRouter();

  return (
    <ScrollView
      className="flex-1"
      showsHorizontalScrollIndicator={false}
    >

      <StatusBar backgroundColor="#272221" barStyle="light-content" />

      <View className="bg-gray-100 w-full h-96">

        <View className="justify-between flex-row mx-8 my-5">

          <View className="flex-row items-center">
            <MapPin size={20} weight="fill" color={colors.purple} />
            <Text className="text-gray-900 text-sm font-roboto font-normal">Porto Alegre, RS</Text>
          </View>
          
          <TouchableOpacity onPress={() => router.navigate("/product/1")}>
            <ShoppingCart size={20} weight="fill" color={colors.yellow_dark} />
          </TouchableOpacity>

        </View>

        <Text className="text-white text-xl font-baloo2Bold mx-8 my-5">
          Encontre o café perfeito para {"\n"}qualquer hora do dia
        </Text>
        <TextInput className="mx-8 bg-gray-200" />

        <View className="items-end mb-20">
          <Image source={require("@/assets/image.png")} />
        </View>

      </View>
      
      <Carousel />

      <Text className="font-baloo2Bold text-base text-gray-200 ml-8 my-4">
        Nossos cafés
      </Text>

      <View className="flex-row ml-8 gap-3">
        <Tag title="TRADICIONAIS" />
        <Tag title="DOCES" />
        <Tag title="ESPECIAIS" />
      </View>


        <CoffeeList />
      
    </ScrollView>
  );
}
