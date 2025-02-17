// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTXjg7j6qMeWfeHVyDC5oI-Fkr6v0qf6E",
  authDomain: "expensetracker-691fa.firebaseapp.com",
  projectId: "expensetracker-691fa",
  storageBucket: "expensetracker-691fa.firebasestorage.app",
  messagingSenderId: "1052498168347",
  appId: "1:1052498168347:web:5c9955e345990cbbfa86be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const signin = document.getElementById("signin");

signin.addEventListener("click", (e) => {
  const user = document.getElementById("username").value;
  const pw = document.getElementById("password").value;
  e.preventDefault();
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, user, pw)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("User signed up");
      window.location.href = "login.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});
