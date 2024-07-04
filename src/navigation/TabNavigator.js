import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import LoanScreen from '../screens/LoanScreen';
import BookmarkedScreen from '../screens/BookmarkedScreen';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { useSelector } from "react-redux";
import Header from '../components/Header';
import { primaryColor } from '../includes/variable';
import SearchScreen from '../screens/searchScreen';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {

    const isShowHeader = useSelector((state) => state.preference.isShowHeader);

    return (
        <View style={{ flex: 1, }}>

            {isShowHeader == true && (
                <Header />
            )}

            <Tab.Navigator screenOptions={{ headerShown: false, activeTintColor: primaryColor }}>
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    labelStyle: {
                        color: primaryColor
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        const name = focused ? 'ios-home' : 'ios-home-outline'
                        return (
                            <Ionicons name={name} size={size} color={primaryColor} />
                        );
                    }

                }} />
                <Tab.Screen name="Loan" component={LoanScreen} options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        const name = focused ? 'swap-horizontal' : 'swap-horizontal-outline'
                        return (
                            <Ionicons name={name} size={size} color={primaryColor} />
                        );
                    }
                }} />
                <Tab.Screen name="Search" component={SearchScreen} options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        const name = focused ? 'search' : 'search-outline'
                        return (
                            <Ionicons name={name} size={size} color={primaryColor} />
                        );
                    }
                }} />
                <Tab.Screen name="Bookmarked" component={BookmarkedScreen} options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        const name = focused ? 'bookmarks' : 'bookmarks-outline'
                        return (
                            <Ionicons name={name} size={size} color={primaryColor} />
                        );
                    }
                }} />
            </Tab.Navigator>
        </View>

    );
}
