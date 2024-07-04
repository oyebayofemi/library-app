import { Pressable, ScrollView, Text, View } from "react-native";
import BookItem from "./BookItem";
import { useDispatch, useSelector } from "react-redux";
import * as database from "../../database";
import { deleteloan } from "../../redux/loanSlice";
import { setSelectedBook } from "../../redux/bookSlice";
import mainStyles from "../../styles/structure";

export default function BookList({ navigation, isLoan, isBookmarked }) {
    const dispatch = useDispatch();

    var bookList = useSelector((state) => state.book.filterBook);
    const loanList = useSelector((state) => state.loan.loanList);
    const userID = useSelector((state) => state.login.userID);

    var itemType = "normal";

    if (isLoan) {
        itemType = "loanList";
        bookList = bookList.filter((book) => loanList.some(loanBook => book.id === loanBook.bookID));
    }

    if (isBookmarked) {
        bookList = bookList.filter((book) => book.isBookmarked === true);
    }


    const handleLoan = async (id) => {

        const bookID = loanList.filter(loanBook => loanBook.bookID === id);

        const updated = await database.remove(userID, bookID[0].id);

        if (updated) {
            console.log("It is deleted Successfuly")
            dispatch(deleteloan(bookID[0].id));

        } else {
            console.log("Not deleted successfully")
        }
    }

    return (
        <ScrollView>
            {
                bookList.length === 0 ?
                    <View style={mainStyles.noData}>
                        <Text style={mainStyles.noDataText}>No Data</Text>
                    </View>
                    : bookList.map((book, index) => {
                        return (
                            <View key={index}>
                                <Pressable onPress={() => {
                                    if (isLoan) {
                                        console.log("Adding the loan variable");
                                        handleLoan(book.id);
                                    } else if (isBookmarked) {
                                        console.log("Bookmarked");
                                    } else {
                                        dispatch(setSelectedBook(book.id));
                                        navigation.navigate('DetailsScreen', book.id);
                                    }
                                }}>
                                    <BookItem author={book.author} date={book.date} type={book.type} title={book.title} itemType={itemType} isBookmarked={book.isBookmarked} image={book.imageURL} />
                                </Pressable>
                            </View>
                        );
                    })
            }
        </ScrollView>
    )
}
