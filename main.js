// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth ,GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAQwzcHKV_XaO0Y5mvns0Hz-HAEYTKSrj0",
    authDomain: "notenest-b6107.firebaseapp.com",
    projectId: "notenest-b6107",
    storageBucket: "notenest-b6107.appspot.com",
    messagingSenderId: "925328319628",
    appId: "1:925328319628:web:40d22f351bd540522b07a9",
    measurementId: "G-JFXTQSWELD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en'
  const provider = new GoogleAuthProvider();

  const googleLogin = document.getElementById("google-login-btn");
  googleLogin.addEventListener("click", function() {
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "https://vulsefy.github.io/mynotesapp/notes.html";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
});

