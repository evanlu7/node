var fs = require ("fs");
var request = require ("request");

var Twitter = require('twitter');
var twitterKey = require ("./keys.js");
var client = new Twitter (twitterKey.twitterKeys);




// var params = {screen_name: 'trey_bongz7', count: 20};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {

//   	for (var i =0; i< tweets.length; i++) {
    
// console.log("Most recent tweets:") 
// console.log(tweets[i].text);

// }
// }
// });


var Spotify = require ("node-spotify-api");
var spotifyKey = require ("./sKeys.js");
var spotify = new Spotify (spotifyKey.spotifyKeys);
var params = process.argv[2]

spotify.search({ type: 'track', query: params }, function(err, data) {
  if (err) {
    console.log('Error occurred: ' + err);
    return; 
  } else {
  	console.log("Artist: " + data.tracks.items[0].artists[0].name);
  }
});

