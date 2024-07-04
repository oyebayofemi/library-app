import { StyleSheet } from "react-native"
import { purpleColor, yellowColor } from "../../../includes/variable";

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10,
        borderWidth: 1,
        marginTop: 10,
        marginHorizontal: 10,
        flexDirection: "row",
        borderRadius: 5,
        borderColor: "red",
        justifyContent: 'space-around',
    },
    Titlecontainer: {
        flex: 3,
        // marginLeft: ,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "baseline"
    },
    tagContainer: {
        flexDirection: "row",
    },
    tag: {
        backgroundColor: yellowColor,
        padding: 5,
        margin: 2,
        // borderWidth: 1,
        // marginTop: 10,
        // marginHorizontal: 10,
        borderRadius: 10,
        // borderColor: "red"
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tag2: {
        backgroundColor: purpleColor,
        padding: 5,
        margin: 2,
        // borderWidth: 1,
        // marginTop: 10,
        // marginHorizontal: 10,
        borderRadius: 10,
        // borderColor: "red"
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    trailingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        flex: 1.5
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: 'center'
    },
    textContainer: {
        marginTop: 5
    }

});