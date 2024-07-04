import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoanList from "../components/LoanList";
import CreateLaon from '../components/CreateLoan';
import PrintLoanScreen from '../components/PrintLoanScreen';

const Stack = createNativeStackNavigator();

export default function LoanScreen() {

    return (
        <Stack.Navigator >
            <Stack.Screen name="LoanList" component={LoanList} />
            <Stack.Screen name="CreateLoan" component={CreateLaon} />
            <Stack.Screen name="PrintLoanScreen" component={PrintLoanScreen} />
        </Stack.Navigator>
    );
}