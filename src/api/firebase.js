
import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
    apiKey: "AIzaSyARm3eQd7JoJG_WXjWana6vK8vB-Kk3hHE",
    authDomain: "vanilla-js-about-me.firebaseapp.com",
    databaseURL: "https://vanilla-js-about-me.firebaseio.com",
    projectId: "vanilla-js-about-me",
    storageBucket: "vanilla-js-about-me.appspot.com",
    messagingSenderId: "41552739446",
    appId: "1:41552739446:web:9e9a6699bc5885cf9d7357",
    measurementId: "G-25LQZRM069"
};

app.initializeApp(firebaseConfig);

export default app;