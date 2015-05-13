request = require('request');
cheerio = require('cheerio');

request('http://substack.net/images/', function(error, response, body){
  if(error) {
    console.log("...")
    return;
  }
  var $ = cheerio.load(body);
    $('a').each(function(i, element){
      console.log($(this).text());
    });
  // console.log(body);
});