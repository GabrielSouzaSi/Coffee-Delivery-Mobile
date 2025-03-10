import { Text, TouchableOpacity } from "react-native";

type Props = {
    title: string;
    onClick?: () => void;
    selected: boolean;
}

export function Select({ title, onClick, selected }: Props) {
    
    return (
        <TouchableOpacity
            className={
                `flex-1 justify-center items-center rounded-md border-2
            ${selected ? "bg-transparent border-purple" : "border-gray-700 bg-gray-700"}`}
            onPress={() => onClick()}
        >
            <Text className={`py-3  text-lg
            ${selected ? "text-purple font-robotoBold" : "text-gray-300 font-robotoRegular"}`} >
                {title}
            </Text>
        </TouchableOpacity>
    )
}