var fs = require ("fs");
var request = require ("request");

var Twitter = require('twitter');
var twitterKey = require ("./keys.js");
var client = new Twitter (twitterKey.twitterKeys);

var Spotify = require ("spotify");


var params = {screen_name: 'trey_bongz7', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {

  	for (var i =0; i< tweets.length; i++) {
    
console.log("Most recent tweets:") 
console.log(tweets[i].text);

}
}
});



