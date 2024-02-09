import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoxpJf4et3CAef3_bhGxmdTLpXIKFouJw",
  authDomain: "seuinvestimento.firebaseapp.com",
  projectId: "seuinvestimento",
  storageBucket: "seuinvestimento.appspot.com",
  messagingSenderId: "394071556047",
  appId: "1:394071556047:web:1b68541fa65248b2859cba",
  measurementId: "G-QV7081357Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);