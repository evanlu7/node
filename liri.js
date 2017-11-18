var fs = require("fs");
var request = require("request");
var action = process.argv[2];


function appSwitch() {
    switch (action) {

        case "my-tweets":
            twitterFunction();
            break;

        case "spotify-this-song":
            spotifyFunction();
            break;

        case "movie-this":
            omdbFunction();
            break;

        case "do-what-it-says":
            doThis();
            break;


    }
};


function twitterFunction() {
    var Twitter = require('twitter');
    var twitterKey = require("./keys.js");
    var client = new Twitter(twitterKey.twitterKeys);

    var params = { screen_name: 'Google', count: 20 };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {

            for (var i = 0; i < tweets.length; i++) {

                console.log("Most recent tweets:")
                console.log(tweets[i].text);
            }
        }
    });
}

function spotifyFunction() {
    var Spotify = require("node-spotify-api");
    var spotifyKey = require("./sKeys.js");
    var spotify = new Spotify(spotifyKey.spotifyKeys);
    var params = process.argv[3];
    

    spotify.search({ type: 'track', query: params }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + customError);
            return;
        } else {
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Song: " + data.tracks.items[0].name);
            console.log("Album: " + data.tracks.items[0].album.name);
            console.log("Preview link: " + data.tracks.items[0].preview_url);
        



        }
    });
}


function omdbFunction() {
    var request = require("request");
    var movieName = process.argv[3];
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
    request(queryUrl, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(
                "Title:" + JSON.parse(body).Title,
                "\nRelease Year: " + JSON.parse(body).Year,
                "\nIMDB Rating:" + JSON.parse(body).imdbRating,
                "\nRotten Tomatoes Rating:" + JSON.parse(body).rottenTomatoes,
                "\nCountry:" + JSON.parse(body).Country,
                "\nLanguage:" + JSON.parse(body).Language,
                "\nPlot:" + JSON.parse(body).Plot,
                "\nActors:" + JSON.parse(body).Actors,
            );
        }
    });
}


function doThis () {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if(error){
            console.log(error);
        }else{
            console.log (data);
            var dataArr = data.split(',');
            action = dataArr [0];
            params = dataArr [1];
            appSwitch ();

        }
    }
    )}
    




appSwitch();