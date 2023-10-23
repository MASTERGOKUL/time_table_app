import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAnTp4sPhc27jAOD-W_WHNyQaWAHawduWo",
  authDomain: "timetable-1308.firebaseapp.com",
  databaseURL:
    "https://timetable-1308-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "timetable-1308",
  storageBucket: "timetable-1308.appspot.com",
  messagingSenderId: "713564804089",
  appId: "1:713564804089:web:ada0381a926e55cbdf2328",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;
