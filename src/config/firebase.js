import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyDSFHjdztHbiV3P65-YGnqCYzRcDiDaErc",
  authDomain: "gdg-damamhour-web.firebaseapp.com",
  databaseURL: "https://gdg-damamhour-web.firebaseio.com",
  projectId: "gdg-damamhour-web",
  storageBucket: "gdg-damamhour-web.appspot.com",
  messagingSenderId: "211306045398",
  appId: "1:211306045398:web:e1aa76dca0645881c00e77",
  measurementId: "G-K5BZY2987R"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};