import { StyleSheet } from "react-native"
import { primaryColor } from "../includes/variable"

export default StyleSheet.create({
    container: {
        // backgroundColor: "lime",
        paddingTop: 50,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },

    buttonStyle1: {
        backgroundColor: primaryColor,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        justifyContent: 'center', // Align text vertically
        alignItems: 'center', // Align text horizontally
    },
    buttonTextStyle1: {
        color: 'white',
        fontSize: 16,
    },
    buttonStyle2: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 10
    },
    buttonTextStyle2: {
        color: primaryColor,
        fontSize: 16,
    },

    noData: {
        paddingVertical: 230,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noDataText: {
        color: primaryColor,
        fontSize: 20,
    }

})
