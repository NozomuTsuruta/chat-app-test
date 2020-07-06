import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBCKMGxO83atqd0s5uHYGp2bdM2EgPv7rE",
  authDomain: "chat-app-test-80df7.firebaseapp.com",
  databaseURL: "https://chat-app-test-80df7.firebaseio.com",
  projectId: "chat-app-test-80df7",
  storageBucket: "chat-app-test-80df7.appspot.com",
  messagingSenderId: "88391864600",
  appId: "1:88391864600:web:abac7705cbecdf00700e6d",
  measurementId: "G-WF31JWE1BX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
