import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDw63mi4CL1JM4m9eF9qn8qMNm7Oq3gTE0",
    authDomain: "todo-app-firebase-e72d3.firebaseapp.com",
    projectId: "todo-app-firebase-e72d3",
    storageBucket: "todo-app-firebase-e72d3.appspot.com",
    messagingSenderId: "574949214402",
    appId: "1:574949214402:web:c834564946460e6833135b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };