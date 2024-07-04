import { ScrollView, View, Text, TouchableOpacity, TextInput, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import BookItem from "../components/BookList/BookItem";
import { findBook } from "../redux/bookSlice";
import styles from "../components/CreateLoan/styles";
import LoadingWidget from "../components/LoadingWidget";

export default function SearchScreen() {
    const dispatch = useDispatch();

    const [showList, setShowList] = useState(false);

    const [searchText, setSearchText] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const bookList = useSelector((state) => state.book.searchedBook);

    const onClickFunc = () => {
        setShowList(true);
        setErrorMessage("");
        setSuccessMessage("");
        dispatch(findBook(searchText));
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

            {showList == true && (
                bookList.length > 0 ?
                    <ScrollView>
                        {bookList.map((book, index) => {
                            return (
                                <View key={index}>
                                    <BookItem author={book.author} date={book.date} type={book.type} title={book.title} image={book.imageURL} />
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