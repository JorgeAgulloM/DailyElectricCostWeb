import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideHttpClient(withFetch())]
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP0s1Qy69y7HfBbn4Z__HuMfFjKNm7dBs",
  authDomain: "dailyelectriccost.firebaseapp.com",
  projectId: "dailyelectriccost",
  storageBucket: "dailyelectriccost.appspot.com",
  messagingSenderId: "771065656398",
  appId: "1:771065656398:web:7a8807064e3f704357bf1f",
  measurementId: "G-1ZZ5SH1KHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);