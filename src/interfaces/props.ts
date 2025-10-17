import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native"

export interface InputProps extends TextInputProps {
    style?: StyleProp<ViewStyle>
    textInputStyle?: StyleProp<TextStyle>
    error?: string
}