import "./App.css";
import ItemCard from "./molecules/ItemCard";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLy1bHL5Rn6sVu6ZqnR4QjxVG-h28V9ZU",
  authDomain: "wild-hearts-tips.firebaseapp.com",
  projectId: "wild-hearts-tips",
  storageBucket: "wild-hearts-tips.appspot.com",
  messagingSenderId: "864051757234",
  appId: "1:864051757234:web:fed624ad430aa8c10209ab",
  measurementId: "G-JBF1D8KSZ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return <ItemCard name={"gg"} />;
}

export default App;
