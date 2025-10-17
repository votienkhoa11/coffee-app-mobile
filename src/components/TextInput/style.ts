import { StyleSheet } from "react-native"

export default StyleSheet.create({
    textInput: {
        flex: 1,
        paddingLeft: 16,
        fontSize: 16,
        color: 'black'
    },

    containerAreaInput: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#d3d3d3',
    },

    errorText: {
        color: 'red',
        fontSize: 10,
        paddingLeft: 14,
    }
})