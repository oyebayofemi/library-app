import { addDoc, collection, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./config";
import { useSelector } from "react-redux";

export async function save(userID, data) {
    // const userID = "uK9XP7uHlKhxjCdDRMVW"

    try {
        const ref = "users/" + userID + "/loanList"

        const dbCollection = collection(db, ref);
        const docRef = await addDoc(dbCollection, data);
        // console.log("docRef", docRef.id);
        return docRef.id;
    } catch (e) {
        console.log("Error Adding", e);
        return null;
    }
}

export async function update(userID, id, data) {
    try {
        const ref = "users/" + userID + "/loanList"

        const dbRef = doc(db, ref, id);
        await updateDoc(dbRef, data);

        return true;
    } catch (e) {
        console.log("Error Updating", e)

        return false;
    }
}

export async function remove(userID, id) {
    const ref = "users/" + userID + "/loanList";

    try {
        const docRef = doc(db, ref, id);
        await deleteDoc(docRef);

        return true;
    } catch (e) {
        console.log("Error when deleting", e)
        return false;
    }
}
export async function updateBookmark(userID, id, data) {

    try {
        const ref = "users/" + userID + "/bookmarkList"

        const dbRef = doc(db, ref, id);
        await updateDoc(dbRef, data);

        return true;
    } catch (e) {
        console.log("Error Updating", e)

        return false;
    }
}

export async function removeBookmark(userID, id) {
    const ref = "users/" + userID + "/bookmarkList";

    try {
        const docRef = doc(db, ref, id);
        await deleteDoc(docRef);

        return true;
    } catch (e) {
        console.log("Error when deleting", e)
        return false;
    }
}



// uK9XP7uHlKhxjCdDRMVW