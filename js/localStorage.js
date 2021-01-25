// var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));

// -----

// assign a kindness to existing id or new one 
// with status 'in progress'
// five minute counter
function updateItem(userData){  
  var id = userData.id;
  console.log('Existing ID:', id);
  if(!id){
    newUser(userData.kindness);
  } else if(id){
    // save in DB
    updateIdInDb(userData);
  }
}

function newUser(kindness){
  var newUser = {
    status: 'in progress', 
    kindness: kindness || '',
  };
  // save in DB
  newUser.id = newSave(newUser);
  // console.log('saved ID:', newUser.id);
}

// retrieve the object from storage
function loadData(){  
  var retrievedObject = localStorage.getItem('userData');
  return JSON.parse(retrievedObject);
}

// function saveDate(){
//   var propertiesToSave = loadData();
//   propertiesToSave.date = Date.now();
//   localStorage.setItem('userData', JSON.stringify(propertiesToSave));
// }

// check if five minutes are over in local storage
// function areFiveOver(){
//   var propertiesToCheck = loadData();
//   var dateThen = propertiesToCheck.date;
//   var dateNow = Date.now();
//   // var today = new Date();
//   // var Christmas = new Date("2012-12-25");
//   var diffMs = (dateNow - dateThen); // milliseconds between now & Christmas
//   // var diffDays = Math.floor(diffMs / 86400000); // days
//   // var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
//   var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
//   // console.log('diffMins: ', diffMins);
//   if(diffMins >= 5){
//     return true;
//   } else {
//     return false;
//   }
// }

function checkEmail(){
  // check if email is assigned to existing id
  var propertiesToCheck = loadData();
  var email = propertiesToCheck.email;
  if(email && email.length > 0){
    return true;
  } else {
    false;
  }
}

function deleteAll(){
  localStorage.setItem('userData', JSON.stringify({}));
  location.reload();
}

// // assign an email to existing id
// function assignEmail(id, email){

// }
// function assignMessage(id, message){
//   // assign an message + email to a new or existing id
// }
// function completeKindness(id, line1){
//   // change kindness status 'complete' to existing id
// }

// assign new unique ID
// steal the email
// function completedKindness(){
// }
