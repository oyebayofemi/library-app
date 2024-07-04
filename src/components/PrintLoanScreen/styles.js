import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../../includes/variable";

export default StyleSheet.create({
    container: {
        // padding: 10,
        // flexDirection: "column",
        // alignItems: "center"
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: secondaryColor,
        padding: 20,
    },

    title: {
        fontSize: 20,
        padding: 20,
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 5,
    },

    code: {
        fontSize: 18,
        padding: 20,
        fontWeight: "bold",
        marginTop: 5,
        alignSelf: 'center',
        color: primaryColor,
        marginBottom: 5,
    },
})