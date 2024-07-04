import LoginForm from "../components/LoginForm";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '../navigation/TabNavigator';

const Stack = createNativeStackNavigator();

export default function LoginScreen() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginForm" component={LoginForm} />
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
    );
}