const firebaseConfig = {
    apiKey: "AIzaSyA_KNJWY-1y52RL-ZXLPIvxGY_HQtExNTE",
    authDomain: "elearning-31a15.firebaseapp.com",
    databaseURL: "https://elearning-31a15-default-rtdb.firebaseio.com",
    projectId: "elearning-31a15",
    storageBucket: "elearning-31a15.appspot.com",
    messagingSenderId: "596508134498",
    appId: "1:596508134498:web:903ebb5c63177d8561d53b"
  };
firebase.initializeApp(firebaseConfig);
const FormDB = firebase.database().ref('elearning');

document.getElementById('contactForm').addEventListener('submit', submitForm);