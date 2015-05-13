var request = require('request');
var cheerio = require('cheerio');
var path = require('path');
var csv = require('fast-csv'); 

var csvStream = csv.createWriteStream({headers: true}),
    writableStream = fs.createWriteStream("images.csv");
 
writableStream.on("finish", function(){
  console.log("DONE!");
});

request('http://substack.net/images/', function(error, response, body){
  if(error) {
    console.log("error")
    return;
  }
  var $ = cheerio.load(body);
   csvStream.pipe(writableStream);
    $('tr').each(function(i, element){
      var url = 'http://substack.net/images' + $(this).find('a').attr('href');
      var permissions = $(this).children(':nth-child(1)').text();
      var type = path.extname(url);
      var all_three = [permissions,url,type];
     
      csvStream.write(all_three);
    
    });
    csvStream.end();


});



