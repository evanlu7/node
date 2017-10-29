// Require twitter
var Twitter = require ("twitter");
var keys =require("./keys.js"); 
var request = require ("request");
var client = new Twitter ({
  consumer_key: '<zoTn8Skv5oWCnADN6ZhAYLWvy>',
  consumer_secret: '<6lNckhdsthjxSdZN29Oi7DXengl1ijBZhSvCn43JTHD19HbuQc>',
  access_token_key: '<923074775676620800-dJkUm5vsL2qpJIxvokciALk36G6Rd3g>',
  access_token_secret: '<	hPCUVtSA0qClKojgOZBB3Dnfis6ScAv13m1hC0EXuaWWI>',
})


// function UserSearch (username) {
// 	this.username = username;

var params = {screen_name: 'trey_bongz7'};

this.getTweets = function () {
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
 

  if (!error) {
    console.log(tweets);

  }
});
}
this.getTweets();


// }



// module.exports = UserSearch;
// var yo = new UserSearch ("trey_bongz7");
// yo.getTweets(); 









// var application = process.argv[2];
// var method = process.argv [3]