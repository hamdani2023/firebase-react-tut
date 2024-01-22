import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCKmizM0Zj44J3sPS-JtN7Wq2qkeXmigr0",
  authDomain: "fir-react-tut-37169.firebaseapp.com",
  projectId: "fir-react-tut-37169",
  storageBucket: "fir-react-tut-37169.appspot.com",
  messagingSenderId: "808718862941",
  appId: "1:808718862941:web:0dfdb957a20e49de229bb4",
  measurementId: "G-ZHFLX3BLPM",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
