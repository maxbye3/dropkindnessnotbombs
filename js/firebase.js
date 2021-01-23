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

function newSaveToDb(propertiesToSave){
    firebase.database().ref('kindness/').push(propertiesToSave, function(error) {
    if (error) {     
        console.log('New save error: ', error)
    } else {
        console.log("New save success!");
    }
    });
}

function updateIdInDb(userId, propertiesToSave){
    firebase.database().ref('kindness/' + userId).set(propertiesToSave, function(error) {
    if (error) {     
        console.log('Update error: ', error)
    } else {
        console.log("Update success!");
    }
    });
}

function updateStatus(id){
    firebase.database().ref('/kindness').once('value').then((snapshot) => {
        var data = snapshot.val();
        Object.keys(data).forEach(function (item) {
            // console.log(item); // key
            // console.log(data[item]); // value

            // we're going to update id 2 status
            if(data[item].id == id){
                data[item].status = 'complete';
                updateIdInDb(item, data[item])
            }
        });
    });
}

function updateSelectedKindness(id, line1){
    firebase.database().ref('/kindness').once('value').then((snapshot) => {
        var data = snapshot.val();
        Object.keys(data).forEach(function (item) {
            // console.log(item); // key
            // console.log(data[item]); // value

            // we're going to update id 2 status
            if(data[item].id == id){
                data[item].kindness = line1;
                updateIdInDb(item, data[item])
            }
        });
    });
}