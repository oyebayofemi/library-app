import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import BookList from "../BookList";
import { useSelector } from "react-redux";
import mainStyles from "../../styles/structure";
import { primaryColor, purpleColor } from "../../includes/variable";

export default function LoanList({ navigation }) {

    const isAnonymous = useSelector((state) => state.login.isAnonymous);

    return (
        <View>

            {
                isAnonymous == false
                    ? <BookList isLoan={true} />
                    : <View style={mainStyles.noData}>
                        <Text style={mainStyles.noDataText}>Sorry you cant Loan a book</Text>
                    </View>
            }

            {isAnonymous == false && (<TouchableOpacity
                onPress={() => { navigation.navigate('CreateLoan') }}
                style={{
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.2)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 70,
                    position: 'absolute',
                    // bottom: -630,
                    top: 540,
                    right: 20,
                    height: 70,
                    backgroundColor: '#fff',
                    borderRadius: 100,
                }}>

                <Ionicons name="add" size={44} color={primaryColor} />
            </TouchableOpacity>)}

            {isAnonymous == false && (<TouchableOpacity
                onPress={() => { navigation.navigate('PrintLoanScreen') }}
                style={{
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.2)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 70,
                    position: 'absolute',
                    // bottom: -630,
                    top: 440,
                    right: 20,
                    height: 70,
                    backgroundColor: '#fff',
                    borderRadius: 100,
                }}>

                <Ionicons name="send" size={30} color={purpleColor} />
            </TouchableOpacity>)}

        </View>
    )
}