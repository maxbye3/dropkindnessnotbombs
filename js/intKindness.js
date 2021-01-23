var usedKindnessInd = [];

function goKindness(){

  if(usedKindnessInd.length == line1.length){
    usedKindnessInd = [];
  }

  // from selected back to selection
  $(".kindnessSelected, .selectAgain, .kindnessComplete").hide();
  $(".swipes, .rightSwipeHitBox, .leftSwipeHitBox, .levelBg").show();
  $(".absolute").css({"top":"35vh"});
  $(".bg").css({"opacity": ".5"});

  var uniqueInt = uniqueRandomNum();
  // console.log("uniqueInt:", uniqueInt);
  // console.log('line1: ', line1[uniqueInt]);
  // console.log('image: ', image[uniqueInt]);
    // IMAGE KUDOS
    $(".imageKudos").show().html(thanks[uniqueInt]);
    $(".tapLeft, .leftSwipeHitBox").show();
    levelDetails(type[uniqueInt]);
    randomColor('#swipeColor1');
    randomColor('#swipeColor2');
    $(".line1").html(line1[uniqueInt]);
    $(".line2").html(line2[uniqueInt]);
    if(website[uniqueInt]){
      $(".websiteDisclaimer").show().html("[accept kindness to reveal website]");
    } else {
      $(".websiteDisclaimer").hide();
    }
    $(".websiteUrl").hide().html("<a href=" + website[uniqueInt] +" target='_blank'>" + website[uniqueInt] + "</a>");
    $(".bg").css('background-image', 'url("./img/'+ image[uniqueInt] + '")');
    $(".leftSwipeTxt").html("for another suggestion");
    $(".rightSwipeTxt").html("to take on the challenge");
  }

// function prevKindness(){
//   const prevKindnessNum = usedKindnessInd[usedKindnessInd.length - 2] || 0;
//   console.log(line1[prevKindnessNum]);
//   usedKindnessInd.splice();
// }

function levelDetails(level){
  $(".levelTxt").html(level);
  if(level== "simple"){
    $(".levelBg").css("background", "#67bbc4");
    $(".levelCircle").css("background", "#9dcdd3").html("100");
  } else { // ambitious
    $(".levelBg").css("background", "#ee752f");
    $(".levelCircle").css("background", "#ee9c6d").html("200");

  }
}


function uniqueRandomNum() {
  var randomNum = Math.floor(Math.random() * line1.length); 
  while(usedKindnessInd.indexOf(randomNum) !== -1){
    // pick again
    randomNum = Math.floor(Math.random() * line1.length);
  } 
  usedKindnessInd.push(randomNum);
  return randomNum;
}



