function noEmail(permission){
    var propertiesToSave = loadData();
    propertiesToSave.dontRemind = permission;
    updateItem(propertiesToSave);
    $(".enterEmailContainer").hide();
  }

  function showReminder(type){
    $(".enterEmailContainer").show();

    var isEmail = checkEmail();
    if(isEmail){ // email found
      $(".emailFound").show();
      $(".noEmail").hide();      
      if(type == "completed"){
        $(".emailFoundTxt").html("<span class='darkPink'>Hey you, </span>we got your email and your points have been saved.");
      } else if ('in progress'){      
        var propertiesToCheck = loadData();
        var button = "<div style='margin-top:8px'><button class='mt-10 btn btn-danger' onclick='noEmail(true)'>No, don't do that.</button></div>";
        if(propertiesToCheck.dontRemind == true){
          button = "<div style='margin-top:8px'><button class='btn btn-success' onclick='noEmail(false)'>Actually, that would be useful.</button></div>";
        }
        $(".emailFoundTxt").html("Cool if we send a reminder for the kindness in progress?" +  button);
      }
    } else{ // no email
      $(".emailFound").hide();
      $(".noEmail").show();
      if(type == "completed"){
        $(".emailHeader").html("<span class='darkGreen'>Sign up to save!</span>");
        $(".emailContainerTxt").html("We don't have you in our files...<br> Enter an email to save those points!");
        $(".privateDisclaimer").html("We ain't sharing your deets with no one. <span class='red'>Even if they ask nice.</span>");
      } else if ('in progress'){
        $(".emailHeader").html("<span class='darkPink'>Want a reminder?</span>");
        $(".emailContainerTxt").html("Enter your email below to receive a gentle nagging later");
        $(".privateDisclaimer").html("As Frodon once yelled from Mount Sire. Your details <span class='pink'>\"shall not be shared!\"</span>");
      }
    }
  }


  $(".emailSaved").click(function() {
    var email = $("#userEmail").val();
    var propertiesToSave = loadData();
    propertiesToSave.email = email;
    updateItem(propertiesToSave);
    $(".emailHeader").html("<span class='darkBlue'>Nice one!</span>");
    $(".emailContainerTxt").html("Saved!");
  });