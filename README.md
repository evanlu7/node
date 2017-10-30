# node

## Synopsis

This project was made with Node.js to switch between various modules.  A user can access tweets, search for a song on Spotify, and search the OMDB database for a movie.

## Code Example

<!---->functio call to switch between 3 modules
function twitterFunction() {
<!---->api call
var Twitter = require('twitter');
<!---->link to separate page with Twitter keys
var twitterKey = require("./keys.js");
<!---->storing in a client variable
var client = new Twitter(twitterKey.twitterKeys);
<!---->twitter npm package
var params = { screen_name: 'trey_bongz7', count: 20 };
client.get('statuses/user_timeline', params, function(error, tweets, response) {
if (!error) {
for (var i = 0; i < tweets.length; i++) {
console.log("Most recent tweets:")
console.log(tweets[i].text);
}}
});
}

## Motivation

This was the week 11 hw assignment for the Coding Bootcamp at UCLA Extension.

## Installation

This project is publicly available on github.com/evanlu7

## API Reference

twitter: https://www.npmjs.com/package/twitter
node-spotify-api: https://www.npmjs.com/package/node-spotify-api
OMDB database

## Tests

I ain't learn that yet

## Contributors

Evan

## License

