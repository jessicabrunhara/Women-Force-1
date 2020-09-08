import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCzacOaLCOM6EWbCCYh3YNTUpKiNaharso",
    authDomain: "women-force-f7eaf.firebaseapp.com",
    databaseURL: "https://women-force-f7eaf.firebaseio.com",
    projectId: "women-force-f7eaf",
    storageBucket: "women-force-f7eaf.appspot.com",
    messagingSenderId: "847305328629",
    appId: "1:847305328629:web:d25e9c1649b7bcbf9ec2bc"
};

firebase.initializeApp(firebaseConfig)

export default firebase