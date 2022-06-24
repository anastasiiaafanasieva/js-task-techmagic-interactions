import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBa7bZW7MncsDQg_GnKTnldFH0fgCFGjpQ",
  authDomain: "js-task-techmagic-interactions.firebaseapp.com",
  projectId: "js-task-techmagic-interactions",
  storageBucket: "js-task-techmagic-interactions.appspot.com",
  messagingSenderId: "456676314947",
  appId: "1:456676314947:web:022466d7d74ebbd1f829f6",
  measurementId: "G-KT44S36N3N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);