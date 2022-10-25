import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAYI50M-DxBwktgftoGtocdnFtSkRN3Ylc',
    authDomain: 'online-course2.firebaseapp.com',
    projectId: 'online-course2',
    storageBucket: 'online-course2.appspot.com',
    messagingSenderId: '95460773268',
    appId: '1:95460773268:web:c532a602925d6080e19381',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export default app;
