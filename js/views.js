$(".disclaimerLink").click(function() {
    $(".cookiedisclaimer").hide();
});
  
// MOBILE ONLY
$(".navbar-toggler").click(function() {
$(".somethingToSayMobile").toggle();
});

  
/*
* CONTACT ME
*/
function contactMe(){
    kindnessSelected();
    $(".kindnessSelected").hide();
    var line1 = "<span class='red'>I would ❤️️ to hear from you!</span> For contact, you can hit me <a target='_blank' href='https://twitter.com/mr_moonhead' class='blue'><u>on twitter</u></a>.";
    var line2 = "<span onclick='goAbout()' class='blue cursor-pointer'><u>Click here</u></span> if your hankering to know what this site is about.";
    $(".line1").html(line1 + '<br>' + line2);
    $(".line2").html("Or contact me in the form below: <textarea class='w-75' rows='5'></textarea><div><button class='btn btn-success m-10' onclick='contactMeClick()'>Submit message</button></div>")
  }
  
  function contactMeClick(){
    $(".line1").html("<span class='yellow'>message sent!</span>")
    $(".line2").html("<span onclick='location.reload()' class='pink cursor-pointer'><u>Return home?</u></span>")
  }
  // contact
  
  
  /*
  * KINDNESS SELECTED
  */
  function saveKindness(){
      var propertiesToSave = loadData();
      propertiesToSave.kindness = currentKindness;
      updateItem(propertiesToSave);
  }
  function kindnessSelected(){
    var isEmail = checkEmail();
    if(isEmail){
        emailEntered();
    }
    $(".swipes, .rightSwipeHitBox, .leftSwipeHitBox, .websiteDisclaimer").hide();
    $(".kindnessSelected, .websiteUrl, .otherWiseTxt").show();
    $(".leftSwipeTxt").html("if you want to select a new suggestion");
    $(".absolute").css({"top":"25vh"});
    $(".bg").css({"opacity": ".3"});
    $(".selectAgain").show().html("<u class='selectAgainGrayTxt'>or click here to select a new kindness</u>");
    $(".statusHeading").html("<span class='strongRed'>KINDNESS SELECTED:</span>");
    $(".emailHeader").html("Want a reminder?");
    $(".privateDisclaimer").html("As Frodon once yelled from Mount Sire. Your details <span class='pink'>\"shall not be shared!\"</span>");
  }
  // kindness selected

  // KINDNESS COMPLETE & IN SELECTED
  $(".emailSaved").click(function() {
    emailEntered();
    var email = $("#userEmail").val();
    var propertiesToSave = loadData();
    propertiesToSave.email = email;
    updateItem(propertiesToSave);
  });

  function emailEntered(){
    $(".emailEnterContainer").hide();
    $("#otherwise").html("great!");
    $(".emailEnter").hide();
    if(state == 'complete'){
      $(".line2").show().html("Points have been <span class='yellow'>saved to your email</span>. You will receive confirmation <span class='pink'>in the next few days.</span>");
    }
  }

  /*
  * KINDNESS COMPLETE
  */
  $(".kindnessComplete").click(function() {
    state = 'complete';
    // window.history.pushState("complete", "Kindness Completed", "#/completed-kindness");
    kindnessSelected();
    $(".otherWiseTxt, .kindnessComplete, .line2, .websiteUrl").hide();
    $(".statusHeading").html("<span class='blue'>Nice job!</span>");
    $(".line1").html("Performing this kindness has scored you <span class='pink'>" + '100' + "</span> points.");
    $(".emailHeader").html("Sign up to save your points:");
    $(".selectAgain").show().html("<u class='text-white bigger'>Click here to select a new kindness</u>");
    $(".privateDisclaimer").html("We ain't sharing your email with no one. <span class='red'>Even if they ask nice.</span>");
    emailEntered();
  });  
  // kindness complete

    
  /*
  * KINDNESS IN PROGRESS
  */
 function kindnessInProgress(){
    kindnessSelected();
    $(".levelBg, .websiteUrl, .kindnessComplete").show();
    $(".kindnessSelected, .websiteDisclaimer").hide();
  }
  // kindness in progress

  
  /*
  * ABOUT
  */
  function goAbout(){
    history.pushState("about", "About", "#/about");
    state = 'intro';
    $(".tapLeft, .leftSwipeHitBox").hide();
    $(".line1").html("Two years ago I made the Kindness App <span class='smallTxt'>almost 10,000 downloads on iOS and Android but whose counting</span>");
    $(".line2").html("This site, has all that content without <span class='pink'>platitudes</span>, <span class='blue'>fluff</span> or <span class='green'>schmultz</span> to make the world a better place");
    $(".leftSwipeTxt").html("<span class='yellow'>click the <img src='img/megaphone.png' width='40px'> if you can think of a way to improve the site </span><span class='smallTxt red'>love to hear from ya!</span>");
    $(".rightSwipeTxt").html("to get started");
    randomColor('#swipeColor1');
    randomColor('#swipeColor2');
    // $(".absolute").css("top","25vh");
    $(".bg").css('background-image', 'url("./img/UO6pL1X.jpg")');
    $(".opacity").css('opacity','.2');
  }
  // about