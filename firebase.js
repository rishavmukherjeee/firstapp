// Import the functions you need from the SDKs you need
/*
const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, user => {*/
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// v9 compat packages are API compatible with v8 code
/*import{ initializeApp}from "firebase/app"
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBVhas_TR9uPROLdRlOdisZY3yQNVw6XnQ",
  authDomain: "fir-updates-20fdf.firebaseapp.com",
  databaseURL: "https://fir-updates-20fdf-default-rtdb.firebaseio.com",
  projectId: "fir-updates-20fdf",
  storageBucket: "fir-updates-20fdf.appspot.com",
  messagingSenderId: "1075745217941",
  appId: "1:1075745217941:web:d440cb1c3214ab61586a9c",
  measurementId: "G-WZF829C0D1"
};
//const app =initializeApp(firebaseConfig);
//export const authentication = getAuth(app);
// Initialize Firebase

let app;
if(firebase.apps.length===0){
    app=firebase.initializeApp(firebaseConfig);

}
else{
    app=firebase.app()
}
const auth= firebase.auth()
export {auth};/*
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = getAuth(firebaseApp);

export { auth };
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
*/
// Import the functions you need from the SDKs you need
import * as firebase from "firebase"
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmbD2L2MRJ-qkXgKW0MyXMRJxsB0WKMIQ",
  authDomain: "drds-a2256.firebaseapp.com",
  projectId: "drds-a2256",
  storageBucket: "drds-a2256.appspot.com",
  messagingSenderId: "328386991541",
  appId: "1:328386991541:web:bdae37f800a8841c9ff5fc",
  measurementId: "G-DSBK5Z90HN"
};
let app;
// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(auth);

/*if(firebase.apps.length===0){
    app=firebase.initializeApp(firebaseConfig);

}
else{
    app=firebase.app()
}*/
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}
const auth= firebase.auth()
export {auth}