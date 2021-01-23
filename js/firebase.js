// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDcTrvSzLTiS2eG2Qa5oCKcESJHwcX8Rc8",
    authDomain: "lockdowntours-2462b.firebaseapp.com",
    databaseURL: "https://lockdowntours-2462b.firebaseio.com",
    projectId: "lockdowntours-2462b",
    storageBucket: "lockdowntours-2462b.appspot.com",
    messagingSenderId: "840910521569",
    appId: "1:840910521569:web:72328ff4fc1bd2941963a0",
    measurementId: "G-P8S69EY9NK"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function saveToDb(saveObj){
    firebase.database().ref('kindness/').push(saveObj, function(error) {
    if (error) {     
        console.log('Error: ', error)
    } else {
        console.log("Success!");
    }
    });
}
console.log(firebase.auth());

firebase.database().ref('/kindness').once('value').then((snapshot) => {
    var lunch = snapshot.val();
    Object.keys(lunch).forEach(function (item) {
        console.log(item); // key
        console.log(lunch[item]); // value
    });

    // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
  });