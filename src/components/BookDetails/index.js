import { Text, View, Image, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function BookDetails() {

    const [id, setID] = useState(null);
    const [title, setTitle] = useState(null);
    const [author, setAuthor] = useState(null);
    const [date, setDate] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [pages, setPages] = useState(null);
    const [isBookmarked, setIsBookmarked] = useState(null);
    const [type, setType] = useState(null);
    const [description, setDescription] = useState(null);


    const bookId = useSelector((state) => state.book.selectedBook);
    const bookList = useSelector((state) => state.book.filterBook);

    useEffect(() => {

        const bookData = bookList.filter(book => book.id === bookId);

        setTitle(bookData[0].title);
        setAuthor(bookData[0].author);
        setPages(bookData[0].pages);
        setID(bookData[0].id);
        setType(bookData[0].type);
        setImageUrl(bookData[0].imageURL);
        setDate(bookData[0].date);
        setDescription(bookData[0].description);

        console.log("d", bookData[0].imageURL)
    }, []);


    const editBookmark = () => {
        console.log("Edit book mrk clicked")
        console.log(!isBookmarked)
    }

    return (
        <View style={styles.container}>

            <Image source={{ uri: imageUrl }}
                style={{ height: 250, width: 200, alignItems: "center" }}
            />

            <View style={styles.headContainer}>
                <View>
                    <Text style={styles.title}>{title}  </Text>
                    <Text style={styles.subtitle}>Author: {author} </Text>
                </View>

                <Pressable onPress={() => editBookmark()}>
                    <View style={styles.trailingContainer}>
                        {isBookmarked ? <Ionicons name="bookmark" size={30} /> : <Ionicons name="bookmark-outline" size={30} />}

                    </View>
                </Pressable>

            </View>

            <View style={styles.bodyContainer}>
                <View style={styles.box1}>
                    <View style={styles.Titlecontainer}>
                        <Text style={styles.pagesText}>Pages: {pages}</Text>
                        <Text style={styles.pagesText}>Date: {date}</Text>
                        <Text style={styles.pagesText}>Decription: {description}</Text>
                    </View>

                    <View style={styles.tagContainer}>
                        <View style={styles.tag}>
                            <Text>{type}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}