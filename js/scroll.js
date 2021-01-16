
$(".leftSwipe").click(function() {
  $(".line1").html("Two years ago I made the Kindness App <span class='smallTxt'>almost 10,000 downloads on iOS and Android but whose counting</span>");
  $(".line2").html("This site, has all that content without <span class='assignedColor1'>platitudes</span>, <span class='assignedColor2'>fluff</span> or <span class='assignedColor3'>schmultz</span> to make the world a better place");
  $(".leftSwipeTxt").html("if you can think of a way to improve the site");
  $(".rightSwipeTxt").html("to get started");
  randomColor('assignedColor1');
  randomColor('assignedColor2');
  randomColor('assignedColor3');
  randomColor('assignedColor3');
  randomColor('swipeColor1');
  randomColor('swipeColor2');
});

$( document ).ready(function() {
  randomColor('swipeColor1');
  randomColor('swipeColor2');
});

