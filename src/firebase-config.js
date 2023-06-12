import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBSA5eWsD-SzviLjAZ2MeIltKX8SJsXc_4",
    authDomain: "blog-website-a18c5.firebaseapp.com",
    projectId: "blog-website-a18c5",
    storageBucket: "blog-website-a18c5.appspot.com",
    messagingSenderId: "954800923833",
    appId: "1:954800923833:web:4041a2e201bc0fa8372768",
    measurementId: "G-1Y9RHB3Q8K"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
