import { StyleSheet } from "react-native"
import { primaryColor, purpleColor, secondaryColor } from "../../includes/variable";


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
    Titlecontainer: {
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: "flex-start",
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'center',
    },
    headContainer: {
        flexDirection: "row",
        margin: 10,
        alignSelf: 'flex-start',
        justifyContent: "space-evenly"
    },
    bodyContainer: {
        flexDirection: "row",
        marginTop: 10

    },
    tagContainer: {
        flexDirection: "row",
        marginTop: 10
    },
    tag: {
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
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    box2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 5,
        alignSelf: 'center',
        color: primaryColor,
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 5,

    },
    textContainer: {
        marginTop: 5
    },
    pagesText: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'center',
    },

});