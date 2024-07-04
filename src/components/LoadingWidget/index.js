import { ActivityIndicator, View, Text } from "react-native";
import { primaryColor } from "../../includes/variable";
import styles from "./styles";

export default function LoadingWidget({ description }) {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size={"large"} color={primaryColor} />
            <Text style={styles.loadingText}>{description}</Text>
            <Text style={styles.loadingText}>Please, wait ...</Text>
        </View>
    );

}