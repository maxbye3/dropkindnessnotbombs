var state = 'intro';
$(".leftSwipeHitBox").click(function() {
  if(state === 'intro'){
    goAbout();
  } else { // kindness
    goKindness();
  }
});

$(".rightSwipeHitBox").click(function() {
  if(state === 'intro'){
    state = 'kindness';
    goKindness();
  } else { // kindness
    kindnessSelected();
    // kindnessInProgress();
  }
});



$(".kindnessComplete").click(function() {
  kindnessSelected();
  $(".otherWiseTxt, .kindnessComplete, .line2, .websiteUrl").hide();
  $(".statusHeading").html("<span class='blue'>Nice job!</span>");
  $(".line1").html("Performing this kindness has scored you <span class='pink'>" + '100' + "</span> points.");
  $(".emailHeader").html("Sign up to save your points:");
  $(".selectAgain").show().html("<u class='text-white bigger'>Click here to select a new kindness</u>");
  $(".privateDisclaimer").html("We ain't sharing your email with no one. <span class='red'>Even if they ask nice.</span>");
  state = 'complete'
});

$(".emailSaved").click(function() {
  var userEmail = $("#userEmail").val();
  saveToDb({id: 2, status: 'in progress', email: userEmail});
  $(".emailEnterContainer").hide();
  $("#otherwise").html("great!");
  $(".emailEnter").hide();
  if(state == 'complete'){
    $(".line1").html("Points have been <span class='yellow'>saved to your email</span>. You will receive confirmation <span class='pink'>in the next few days.</span>");
  }
  
});

$(".disclaimerLink").click(function() {
  $(".cookiedisclaimer").hide();
});

$(".navbar-toggler").click(function() {
  $(".somethingToSayMobile").toggle();
});

function kindnessSelected(){
  $(".swipes, .rightSwipeHitBox, .leftSwipeHitBox, .websiteDisclaimer").hide();
  $(".kindnessSelected, .websiteUrl, .otherWiseTxt").show();
  $(".leftSwipeTxt").html("if you want to select a new suggestion");
  $(".absolute").css("top","25vh");
  $(".selectAgain").show().html("<u class='selectAgainGrayTxt'>or click here to select a new kindness</u>");
  $(".statusHeading").html("<span class='strongRed'>KINDNESS SELECTED:</span>");
  $(".emailHeader").html("Want a reminder?");
  $(".privateDisclaimer").html("As Frodon once yelled from Mount Sire. Your details <span class='pink'>\"shall not be shared!\"</span>");
}

function kindnessInProgress(){
  kindnessSelected();
  $(".kindnessSelected").hide();
  $(".kindnessComplete").show();
}

function goAbout(){
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