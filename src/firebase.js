import * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBfHD5RQZOvsCCz7wxDcoBTA7APDe_I7y8",
    authDomain: "note-app-4d785.firebaseapp.com",
    databaseURL: "https://note-app-4d785.firebaseio.com",
    projectId: "note-app-4d785",
    storageBucket: "note-app-4d785.appspot.com",
    messagingSenderId: "356712214519",
    appId: "1:356712214519:web:d015786a305158e2f948f2",
    measurementId: "G-VWE687GGFP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const fireBaseDb=firebase.database();
  firebase.database().ref('personne1').orderByChild('title').once('value').then((snapshot)=>{
      console.log(snapshot.val())
    
    })
export{
    fireBaseDb
}
  /* 
    firebase.database().ref('personne1').push({
        title:'a',
        prix:'500dh'
    } ) */