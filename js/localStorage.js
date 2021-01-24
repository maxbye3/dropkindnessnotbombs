// assign a kindness to existing id or new one 
// with status 'in progress'
// five minute counter
function assignKindness(id, kindness){  
  if(!id){
    createNewUser();
  } else if(id){
    // updates kindness on existing id
    updateSelectedKindness(id, kindness);
  }
}

function createNewUser() {
   // get new unique id
   getUniqueId().then((id) => {
    var objToSave = {
      id: id, 
      email: undefined, 
      status: 'in progress', 
      kindness: kindness
    };
    // save new account
    newSaveToDb(objToSave)
  });
}

// assign an email to existing id
function assignEmail(id, email){

}
function assignMessage(id, message){
  // assign an message + email to a new or existing id
}
function checkEmail(email){
  // check if email is assigned to existing id
}

function completeKindness(id, line1){
  // change kindness status 'complete' to existing id
}

function areFiveOver(){
  // check if five minutes are over
}

// assign new unique ID
// steal the email
function completedKindness(){
}
