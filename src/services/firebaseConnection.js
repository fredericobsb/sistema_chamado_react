import{initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCUuiA9Cw0dxXbCkPjNGdUE3_JGHHKzfuI",
    authDomain: "chamados-66478.firebaseapp.com",
    projectId: "chamados-66478",
    storageBucket: "chamados-66478.appspot.com",
    messagingSenderId: "1005778485544",
    appId: "1:1005778485544:web:87ed2830094f40e0e3d01d"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export {firebaseApp, auth, db, storage};