import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

type Props = TouchableOpacityProps & {
    title: string;
}

export function Tag({ title }: Props) {
    return (
        <View className="border-2 border-purple rounded-full">
            <Text className="font-robotoBold text-[10px] text-purple_dark mx-4 my-2">
                {title}
            </Text>
        </View>
    )
}