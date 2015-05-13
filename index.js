request = require('request');
cheerio = require('cheerio');

request('http://substack.net/images/', function(error, response, body){
  if(error) {
    console.log("...")
    return;
  }
  var $ = cheerio.load(body);
    $('tr').each(function(i, element){
      var url = 'http://substack.net/images' + $(this).find('a').attr('href')
      // var permissions = $(this).nth-child(2)

     console.log($(this).children(':nth-child(1)').text());
    });
  // console.log(body);
});