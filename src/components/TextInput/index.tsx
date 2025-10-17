import { View, TouchableOpacity, TextInput, Text } from "react-native"
import React from "react"
import style from "./style"
import { InputProps } from "../../interfaces/props"

const TextInputComponent = (
    props: InputProps,
    ref: React.Ref<TextInput>
) => (
    <View>
        <View
            style={[
                style.containerAreaInput,
                props.style,
                props.error && { borderColor: 'red'}
            ]}
        >
            <TextInput
                style={[style.textInput, props.textInputStyle]}
                {...props}
                ref={ref}
            />
        </View>
        {props.error && <Text style={style.errorText}>{props.error}</Text>}
    </View>
)

export default React.forwardRef(TextInputComponent)