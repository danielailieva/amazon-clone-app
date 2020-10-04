import firebase from "firebase"


const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCi28W3vCVgrgF5xr9TQC3SODaKRVl2vw4",
        authDomain: "clone-app-f5c57.firebaseapp.com",
        databaseURL: "https://clone-app-f5c57.firebaseio.com",
        projectId: "clone-app-f5c57",
        storageBucket: "clone-app-f5c57.appspot.com",
        messagingSenderId: "978799305925",
        appId: "1:978799305925:web:3714f1ec6771ee7c83bcac",
        measurementId: "G-90V9XKMBD2"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }