import DetailsScreen from "./DetailsScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookmarkList from "../components/BookmarkList";

const Stack = createNativeStackNavigator();

export default function BookmarkedScreen() {

    return (
        <Stack.Navigator >
            <Stack.Screen name="BookmarkList" component={BookmarkList} options={{ headerShown: false }} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        </Stack.Navigator>
    );
}