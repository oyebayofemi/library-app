import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../../includes/variable";

export default StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: secondaryColor
    },
    headerStyles: {
        fontWeight: 'bold',
        fontSize: 24,
        color: primaryColor,
        marginBottom: 30
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
})