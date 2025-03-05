import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Product() {
    const router = useRouter();
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff"}}>
            <Text>Product</Text>
            <Button title="Voltar" onPress={() => router.back()} />
        </View>
    )
}