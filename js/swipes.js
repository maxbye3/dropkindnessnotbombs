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
    // kindnessSelected();
    kindnessInProgress();
  }
});

$(".emailSaved").click(function() {
  $("#otherwise").html("great");
  $(".emailEnter").hide();
});

$(".disclaimerLink").click(function() {
  $(".cookiedisclaimer").hide();
});

$(".navbar-toggler").click(function() {
  $(".somethingToSayMobile").toggle();
});

function kindnessSelected(){
  $(".swipes, .rightSwipeHitBox, .leftSwipeHitBox, .websiteDisclaimer").hide();
  $(".kindnessSelected, .websiteUrl").show();
  $(".leftSwipeTxt").html("if you want to select a new suggestion");
  $(".absolute").css("top","25vh");
  $(".selectAgain").show();
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