import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Catalog() {  

    const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center">
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="Produto" onPress={() => router.navigate("/product/1")} />
    </View>
  );
}
