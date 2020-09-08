import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyADNE5ah8Xj5mrMDN-vgDPrgQXOsNhiAL4",
    authDomain: "tik-tok-80fa1.firebaseapp.com",
    databaseURL: "https://tik-tok-80fa1.firebaseio.com",
    projectId: "tik-tok-80fa1",
    storageBucket: "tik-tok-80fa1.appspot.com",
    messagingSenderId: "544553341536",
    appId: "1:544553341536:web:4a831e8ac9b5cf8da76905",
    measurementId: "G-51N8KD2FH2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const DataBase = firebaseApp.firestore()

export default DataBase