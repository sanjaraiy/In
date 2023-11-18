import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB1t4jd5JzVz9bokMbu8D4z0VP9qUk89YA",
  authDomain: "instagram-911c1.firebaseapp.com",
  projectId: "instagram-911c1",
  storageBucket: "instagram-911c1.appspot.com",
  messagingSenderId: "741695013659",
  appId: "1:741695013659:web:0bbe13db5541a4bd3f89be"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth();