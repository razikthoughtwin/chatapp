import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCnDDBwJVMWLTCVayvecNvaR0g6Rdilk0U",
  authDomain: "messanger-c886a.firebaseapp.com",
  projectId: "messanger-c886a",
  storageBucket: "messanger-c886a.appspot.com",
  messagingSenderId: "70507298988",
  appId: "1:70507298988:web:2308da8ce1f60a87939f09",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
