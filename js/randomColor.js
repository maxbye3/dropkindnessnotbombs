var lastColor;
function randomColor(classname){
  // console.log('lastColor', lastColor);
  $(classname).removeClass();
  var colors = ['blue', 'pink', 'green', 'red', 'purple', 'yellow'];
  var random = Math.floor(Math.random() * colors.length);
  var assignedColor = colors[random];
  if(assignedColor == lastColor){
    randomColor(classname);
  } else {
    lastColor = assignedColor;
    $(classname).addClass(assignedColor);
  }
}
