import { Text, View, Image } from "react-native";
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { blueColor } from "../../../includes/variable";

export default function BookItem({ date, image, title, isBookmarked, author, type, itemType }) {

    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image source={{ uri: image }}
                    style={{ height: 80, width: 80 }}
                />
            </View>

            <View style={styles.Titlecontainer}>
                <View style={styles.tagContainer}>
                    <View style={styles.tag}>
                        <Text>{date}</Text>
                    </View>
                    <View style={styles.tag2}>
                        <Text>{type}</Text>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text>{author}</Text>
                </View>

            </View>

            <View style={styles.trailingContainer}>

                {itemType == "addLoan"
                    ? <Ionicons name="add-circle-outline" size={30} color={blueColor} />
                    : itemType == "loanList" ? <Ionicons name="trash-outline" size={30} color={blueColor} />
                        : isBookmarked ? <Ionicons name="bookmark" size={30} color={blueColor} /> : <Ionicons name="bookmark-outline" size={30} color={blueColor} />}



            </View>
        </View>
    )
}
