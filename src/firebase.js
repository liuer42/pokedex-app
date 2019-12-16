import * as firebase from 'firebase';

const config = ({
    
    apiKey: "AIzaSyB8X0VGjQs0C8VOa7MXmusmazcFCiTHqzc",
    authDomain: "pokedex-b6c10.firebaseapp.com",
    databaseURL: "https://pokedex-b6c10.firebaseio.com",
    projectId: "pokedex-b6c10",
    storageBucket: "pokedex-b6c10.appspot.com",
    messagingSenderId: "874300013713",
    appId: "1:874300013713:web:f493d241613ddcdf3c1330"
      
});

firebase.initializeApp(config);
/* 
const database = firebase.database();
const auth = firebase.auth();
const currentUser = auth.currentUser

const settings = {
    timestampsInSnapshots: true
}
database.settings(settings) */






export default firebase;