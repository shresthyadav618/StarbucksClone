// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore"
import {getAuth} from "firebase/auth"
import { AutoGraph } from "@mui/icons-material";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWIyKJrUePKNSvlxlCCmYV-dtvXugdgNY",
  authDomain: "starbucks-clone-with-firebase.firebaseapp.com",
  projectId: "starbucks-clone-with-firebase",
  storageBucket: "starbucks-clone-with-firebase.appspot.com",
  messagingSenderId: "441003580801",
  appId: "1:441003580801:web:463d0a1ad2616f37831c80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const xx=getFirestore();
const auth=getAuth();


export default auth;

