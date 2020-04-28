import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAXkLUZdvbrQlK0mxGgW4VM_f3Rxuw08tg',
    authDomain: 'alphago-adffd.firebaseapp.com',
    databaseURL: 'https://alphago-adffd.firebaseio.com',
    projectId: 'alphago-adffd',
    storageBucket: 'alphago-adffd.appspot.com',
    messagingSenderId: '860192363251',
    appId: '1:860192363251:web:42aeba41674fbd38011d86',
    measurementId: 'G-XVS42ZH78H'
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const fieldValue = firebase.firestore.FieldValue;
export default firebase;
