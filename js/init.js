function init(){
  history.pushState('home', "Home", "#/home");
  $('.failureContainer, .imageKudos, .somethingToSayMobile, .kindnessSelected, .levelBg, .kindnessComplete, .selectAgain, .enterEmailContainer').hide();
  
  
  // Check if in progress
  console.log("check progress");
  var propertiesToCheck = loadData();
  var kindness = propertiesToCheck.kindness;
  if(kindness){
    kindnessInProgress();
    kindnessView(kindness.line1, kindness.line2, kindness.website, kindness.image, kindness.type);
    $(".websiteUrl").show();
  }
}