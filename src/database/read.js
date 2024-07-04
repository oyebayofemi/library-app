import { getDocs, collection } from "firebase/firestore";
import { db } from "./config";
import { useSelector } from "react-redux";

export async function load() {
    const dbCollection = collection(db, 'books');

    const querySnapshot = await getDocs(dbCollection);

    return processQuerySnapshot(querySnapshot);
}

export async function loadUsers() {
    const dbCollection = collection(db, 'users');

    const querySnapshot = await getDocs(dbCollection);

    return processQuerySnapshot(querySnapshot);
}

export async function loadLoan(id) {

    const userID = id;

    const ref = "users/" + userID + "/loanList"

    const dbCollection = collection(db, ref);

    const querySnapshot = await getDocs(dbCollection);

    return processQuerySnapshot(querySnapshot);
}
export async function loadBookmarkList(id) {
    const userID = id;

    const ref = "users/" + userID + "/bookmarkList"

    const dbCollection = collection(db, ref);

    const querySnapshot = await getDocs(dbCollection);

    return processQuerySnapshot(querySnapshot);
}

function processQuerySnapshot(querySnapshot) {
    const data = [];

    querySnapshot.forEach((doc) => {
        const lists = {
            ...doc.data(),
            id: doc.id
        };
        data.push(lists);
    });

    return data;
}

