import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA7YSbgEywpc9RdpZGpCtvrUDAUob_jcak",
    authDomain: "dogvscat-768f3.firebaseapp.com",
    projectId: "dogvscat-768f3",
    storageBucket: "dogvscat-768f3.appspot.com",
    messagingSenderId: "480858195461",
    appId: "1:480858195461:web:1ba1f874e8ae24a1ec7e6c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const database = firebaseApp.firestore();
