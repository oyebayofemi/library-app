import { StyleSheet } from "react-native"
import { primaryColor, purpleColor, yellowColor } from "../../includes/variable";

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: primaryColor
    },
    textContainer: {
        marginTop: 5
    },
    modalBox: {
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        backgroundColor: 'white',
        borderRadius: 15,
        elevation: 5,
        shadowOpacity: 0.7,
        shadowRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        }
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dropdown: {
        height: 50,
        width: 190,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8, margin: 10
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },

    modalTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        color: primaryColor,
        fontSize: 25,
        fontWeight: "bold",
    },
    modalHighlightText: {
        margin: 4,
        fontSize: 15,
        fontWeight: "bold",
    },
    modalTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        color: primaryColor,
        fontSize: 25,
        fontWeight: "bold",
    },
    buttonTextStyle: {
        color: purpleColor,
        fontSize: 16,
    },
    buttonStyle: {
        backgroundColor: yellowColor,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 10
    },

});