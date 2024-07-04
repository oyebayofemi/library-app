import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import BookList from "../BookList";
import { useSelector } from "react-redux";
import mainStyles from "../../styles/structure";

export default function BookmarkList() {
    const isAnonymous = useSelector((state) => state.login.isAnonymous);

    return (
        <View>

            {
                isAnonymous == false
                    ? <BookList isBookmarked={true} />
                    : <View style={mainStyles.noData}>
                        <Text style={mainStyles.noDataText}>Sorry you cant save a book to bookmark</Text>
                    </View>
            }

        </View>
    )
}