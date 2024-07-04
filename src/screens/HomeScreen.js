import BookList from "../components/BookList";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from "./DetailsScreen";

const Stack = createNativeStackNavigator();

export default function HomeScreen() {

    return (
        <Stack.Navigator >
            <Stack.Screen name="BookList" component={BookList} options={{ headerShown: false }} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        </Stack.Navigator>
    );
}