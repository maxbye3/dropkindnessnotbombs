function init(){
  history.pushState('home', "Home", "#/home");
  $('.failureContainer, .imageKudos, .somethingToSayMobile, .kindnessSelected, .levelBg, .kindnessComplete, .selectAgain').hide();
  
  
  // Check if in progress
  var propertiesToCheck = loadData();
  var kindness = propertiesToCheck.kindness;
  if(kindness && kindness.dateSelected){
    kindnessInProgress();
    kindnessView(kindness.line1, kindness.line2, kindness.website, kindness.image, kindness.type);
    $(".websiteUrl").show();
  }
}