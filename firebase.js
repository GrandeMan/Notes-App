// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDNK-_9gh3i6VZ1IKPmSVf0VnRYMXO0d2o",
	authDomain: "react-notes-e27d6.firebaseapp.com",
	projectId: "react-notes-e27d6",
	storageBucket: "react-notes-e27d6.appspot.com",
	messagingSenderId: "79432734751",
	appId: "1:79432734751:web:1dd96e6bdafe4131e1dd2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const notesCollection = collection(db, "notes");

export { notesCollection, db };