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
    // one time push state
    history.pushState("select", "Kindness Select", "#/kindness-select");
    goKindness();
  } else { // kindness
    kindnessSelected();
    saveKindness();
    // kindnessInProgress();
  }
});

$(window).on("popstate", function () {
  console.log(history.state);
  if(history.state == 'home'){
    location.reload();
  }
  if(history.state == 'select'){
    goKindness();
  }
  if(history.state == 'about'){
    goAbout();
  }
  // if(history.state == 'selected'){
  //   kindnessSelected();
  // }
  // if(history.state == 'completed'){
  //   $(".kindnessComplete").click();
  // }
});
