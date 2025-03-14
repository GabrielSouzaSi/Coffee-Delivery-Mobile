import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { IconProps, IconWeight } from "phosphor-react-native"
import { colors } from "@/styles/colors";
import clsx from "clsx";


type Props = TouchableOpacityProps & {
    title?: string;
    onClick?: () => void;
    variant?: boolean;
    Icon?: React.ComponentType<IconProps>;
    weight?: IconWeight;
    size?: number;
    color?: string;
}

export function Button({ title, onClick, variant = false, Icon, className, weight, color = colors.purple, size = 20, ...rest }: Props) {

    return (
        <TouchableOpacity
            className={clsx(
                "justify-center items-center rounded-md",
                { "bg-transparent": variant === false },
                { "flex-1 bg-purple_dark": variant },
                className
            )}
            onPress={onClick}
            {...rest}
        >
            {Icon ? (<Icon size={size} color={color} weight={weight} />)
                :
                (<Text className={`font-robotoBold
            ${variant ? "text-white text-base" : "text-purple text-lg px-4"}`} >
                    {title}
                </Text>)}
        </TouchableOpacity>
    )
}