import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCWb139rduEaWMMF7nR_ctsZx89kSsmQmQ",
    authDomain: "library-app-5100e.firebaseapp.com",
    projectId: "library-app-5100e",
    storageBucket: "library-app-5100e.appspot.com",
    messagingSenderId: "771900328910",
    appId: "1:771900328910:web:32c59c75077bc3a96eb99f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);