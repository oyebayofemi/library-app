import { Text, View } from "react-native";
import styles from "./styles";

export default function PrintLoanScreen() {

    function generateRandomCode(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let code = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            code += characters.charAt(randomIndex);
        }

        return code;
    }

    const randomCode = generateRandomCode(12);
    console.log(randomCode);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Print Loan Screen</Text>
            <Text>You will show this to the librarian before you are able to collect your books</Text>
            <Text style={styles.code}>{randomCode}</Text>
        </View>
    )
}