import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7iTIQw5WyJrW9ABytLlMDj1NffzLZSYs",
  authDomain: "coder-aincradecommerce.firebaseapp.com",
  projectId: "coder-aincradecommerce",
  storageBucket: "coder-aincradecommerce.appspot.com",
  messagingSenderId: "586836631349",
  appId: "1:586836631349:web:4994984d50a3a590e4f67c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)