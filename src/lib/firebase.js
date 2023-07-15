import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCRV0wR6x7z7ifw6WlFqiRjMhTAoL5e-TA",
  authDomain: "notion-1c044.firebaseapp.com",
  projectId: "notion-1c044",
  storageBucket: "notion-1c044.appspot.com",
  messagingSenderId: "370225011728",
  appId: "1:370225011728:web:ba842fe2cf0059fef67e95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
