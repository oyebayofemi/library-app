import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../../includes/variable";

export default StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: secondaryColor
        // paddingTop: 20
    },
    errorCointainer: {
        backgroundColor: "white",
        borderLeftWidth: 10,
        borderWidth: 2,
        borderColor: "red",
        padding: 5,
        marginBottom: 10,
    },
    textInput: {
        backgroundColor: "white",
        padding: 10
    },
    button: {
        backgroundColor: primaryColor,
        padding: 20,
        borderRadius: 100,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",

    },
    errorText: {
        color: "red",
        padding: 5,
    },
    errrorTitle: {
        fontWeight: "bold"
    },
    inputTextField: {
        width: '100%',
        height: 50,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#f4f4f4',
        borderRadius: 8,
        fontSize: 16,
        color: '#333',
    },
}); 