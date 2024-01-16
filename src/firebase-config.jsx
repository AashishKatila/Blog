import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore} from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvfwXYtIsmGzu74nldhriOxyc9-3KKB0k",
  authDomain: "blogproject-7d2c9.firebaseapp.com",
  projectId: "blogproject-7d2c9",
  storageBucket: "blogproject-7d2c9.appspot.com",
  messagingSenderId: "49376359424",
  appId: "1:49376359424:web:95ec35f246c47887f094e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//To get reference to Firebase Firestore database instance used for storing and retrieving data.
export const db = getFirestore(app)

//To get a reference to Firebase Authentication instance, used for managing user authentication.
export const auth = getAuth(app);

//To create an instance of the GoogleAuthProvider class, used for enabling Google sign-in within your application.
export const provider = new GoogleAuthProvider();