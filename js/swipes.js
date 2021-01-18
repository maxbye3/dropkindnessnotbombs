$(".leftSwipe").click(function() {
  goAbout();
});

$(".rightSwipe").click(function() {
  goKindness();
});

$(".disclaimerLink").click(function() {
  $(".cookiedisclaimer").hide();
});

function goAbout(){
  $(".tapLeft").hide();
  $(".line1").html("Two years ago I made the Kindness App <span class='smallTxt'>almost 10,000 downloads on iOS and Android but whose counting</span>");
  $(".line2").html("This site, has all that content without <span class='pink'>platitudes</span>, <span class='blue'>fluff</span> or <span class='green'>schmultz</span> to make the world a better place");
  $(".leftSwipeTxt").html("<span class='yellow'>click the <img src='img/megaphone.png' width='40px'> if you can think of a way to improve the site </span><span class='smallTxt red'>love to hear from ya!</span>");
  $(".rightSwipeTxt").html("to get started");
  randomColor('#swipeColor1');
  randomColor('#swipeColor2');
  $(".absolute").css("top","25vh");
  $(".bg").css('background-image', 'url("./img/UO6pL1X.jpg")');
  $(".flowerGrenade").show();
  $(".opacity").css('opacity','.2');
}