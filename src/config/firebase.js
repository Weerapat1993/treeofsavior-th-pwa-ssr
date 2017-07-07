import firebase from 'firebase'
// const env = (name) => process.env[name]

const config = {
  // apiKey: env('FIREBASE_API_KEY'),
  // authDomain: env('FIREBASE_DOMAIN'),
  // databaseURL: env('FIREBASE_DATABASE'),
  // projectId: env('FIREBASE_PROJECT_ID'),
  // storageBucket: env('FIREBASE_STORAGE'),
  // messagingSenderId: env('FIREBASE_SENDER_ID'),
  apiKey: "AIzaSyCAc3HIOtHjmPLBqhjbgq82VhewAVExAzE",
  authDomain: "test-pwa-725f2.firebaseapp.com",
  databaseURL: "https://test-pwa-725f2.firebaseio.com",
  projectId: "test-pwa-725f2",
  storageBucket: "test-pwa-725f2.appspot.com",
  messagingSenderId: "997261072931"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth