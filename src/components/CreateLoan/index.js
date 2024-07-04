import { ScrollView, View, Text, TouchableOpacity, TextInput, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { findBook } from "../../redux/bookSlice";
import { useState } from "react";
import BookItem from "../BookList/BookItem";
import styles from "./styles";
import * as database from "../../database";
import { addLoanData } from "../../redux/loanSlice";
import LoadingWidget from "../LoadingWidget";

export default function CreateLaon({ navigation }) {
    const dispatch = useDispatch();

    const [showList, setShowList] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [searchText, setSearchText] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const userID = useSelector((state) => state.login.userID);

    const bookList = useSelector((state) => state.book.searchedBook);
    const loanList = useSelector((state) => state.loan.loanList);

    const onClickFunc = () => {
        setShowList(true);
        setErrorMessage("");
        setSuccessMessage("");
        dispatch(findBook(searchText));
    }

    const addLoan = async (id) => {
        setErrorMessage("");
        setSuccessMessage("");
        setIsLoading(true);

        const searchedBookLoan = loanList.filter(book => book.bookID == id);
        setTimeout(function () {
            setIsLoading(false);
        }, 2000);

        console.log(loanList.length);

        if (loanList.length < 3) {
            if (searchedBookLoan.length > 0) {
                setSuccessMessage("");
                setErrorMessage("Book is added already");
            } else {
                const updated = await database.save(userID, {
                    isLoan: true,
                    bookID: id
                });

                if (updated) {
                    setSuccessMessage("It is Added Successfully");
                    setErrorMessage("");

                    const data = {
                        isLoad: true,
                        id: updated,
                        bookID: id
                    }
                    dispatch(addLoanData(data));

                    navigation.pop();
                } else {

                    setSuccessMessage("");
                    setErrorMessage("Not Added Successfully");
                }
            }
        } else {
            setErrorMessage("Failed to add book. Exceeded the 3 max amount you can loan");
        }
    }

    return (

        <View style={styles.container}>
            <TextInput
                style={styles.inputTextField}
                value={searchText}
                maxLength={150}
                onChangeText={setSearchText}
                placeholder='Search for book title' />
            <TextInput />

            <TouchableOpacity
                style={styles.button}
                onPress={onClickFunc} >
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>

            <Text style={styles.errorText}>{errorMessage}</Text>
            <Text>{successMessage}</Text>

            {isLoading == true ? <LoadingWidget /> : showList == true && (
                bookList.length > 0 ?
                    <ScrollView>
                        {bookList.map((book, index) => {
                            return (
                                <View key={index}>
                                    <Pressable onPress={() => { addLoan(book.id) }}>
                                        <BookItem author={book.author} image={book.imageURL} date={book.date} type={book.type} title={book.title} itemType={"addLoan"} />
                                    </Pressable>
                                </View>
                            );
                        })}
                    </ScrollView>
                    :
                    <Text>No Book Found</Text>
            )}
        </View>
    )
}