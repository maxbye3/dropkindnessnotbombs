function getData(){
  $.ajax({
      type: "GET",
      url: "https://spreadsheets.google.com/feeds/list/1AoanqLBlXENAKeEvGOTdZhGwswT1Gen0R5n3yxcpZ0k/od6/public/values?alt=json",
      success: function(data){
        console.log('My twitter: ', data.feed.entry[2]);
        for (var i = 0; i < data.feed.entry.length; i++) {
          console.log('1st col: ', data.feed.entry[i].gsx$line1.$t);
          if(data.feed.entry[i].gsx$line2){
            console.log('2nd col: ', data.feed.entry[i].gsx$line2.$t);
          }
          if(data.feed.entry[i].gsx$website){
            console.log('3rd col: ', data.feed.entry[i].gsx$website.$t);
          }
          if(data.feed.entry[i].gsx$imagename){
            console.log('Image name: ', data.feed.entry[i].gsx$imagename.$t);
          }
          if(data.feed.entry[i].gsx$imagethanks){
            console.log('Image thanks: ', data.feed.entry[i].gsx$imagethanks.$t);
          }
          
        }
      },
      error: function(){
        console.log("oh oh! Something went wrong");
        $('.swipeContainer').hide();
        $('.failureContainer').show();
      },
      dataType:"json",
  });
}

function tryAgain(){
  $('.swipeContainer').show();
  $('.failureContainer').hide();
  // getData();
}