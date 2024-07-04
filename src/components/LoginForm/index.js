import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import LoadingWidget from "../LoadingWidget";
import { useState } from "react";
import { setCurrentUser, setAnonymous, setCurrentUserID } from "../../redux/loginSlice";
import { loadLoanList } from "../../redux/loanSlice";
import * as database from "../../database";
import { loadBookmarkList } from "../../redux/bookmarkSlice";
import styles2 from "../../styles/structure";


export default function LoginForm({ navigation }) {
    const dispatch = useDispatch();

    const [studentIDText, setStudentIDText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [noLoginError, setNoLoginError] = useState(true);


    const users = useSelector((state) => state.login.users);

    const handleLoginPress = () => {
        //Implementing the loading
        setIsLoading(true);

        const currentUser = users.filter(user => user.studentID == studentIDText);

        setTimeout(function () {
            setIsLoading(false);

        }, 2000);

        if (currentUser.length !== 0) {
            dispatch(setCurrentUser(studentIDText));

            const userData = users.filter((user) => user.id === currentUser[0].id);
            getLoanList(userData[0].id);
            getBookmarkList(userData[0].id);

            navigation.replace('TabNavigator');

        } else {
            setNoLoginError(false);
        }
    }
    const handleAnonLoginPress = () => {
        //Implementing the loading
        dispatch(setAnonymous());

        navigation.replace('TabNavigator');
    }

    const getLoanList = async (uid) => {
        dispatch(setCurrentUserID(uid));

        const loanData = await database.loadLoan(uid);
        dispatch(loadLoanList(loanData));
    }

    const getBookmarkList = async (uid) => {
        dispatch(setCurrentUserID(uid));

        const bookmarkData = await database.loadBookmarkList(uid);
        dispatch(loadBookmarkList(bookmarkData));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerStyles}>Login Form</Text>

            <TextInput
                style={styles.inputTextField}
                value={studentIDText}
                maxLength={150}
                onChangeText={setStudentIDText}
                placeholder='Enter Student ID' />
            <TextInput />


            {isLoading == true ? <LoadingWidget /> : noLoginError == false && (
                <View>
                    <Text>No User found</Text>
                </View>
            )}

            <TouchableOpacity
                style={styles2.buttonStyle1}
                onPress={handleLoginPress} >
                <Text style={styles2.buttonTextStyle1}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles2.buttonStyle2}
                onPress={handleAnonLoginPress} >
                <Text style={styles2.buttonTextStyle2}>Anonymous</Text>
            </TouchableOpacity>
        </View>
    );
}