var request = require("request")
var fs = require("fs")
var url = "https://cat-fact.herokuapp.com/facts"

request({
    url: url,
    json: true
    }, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
        var jsonData = JSON.stringify(body)
        console.log(jsonData);
        fs.writeFile("output.json", jsonData, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        } 
        console.log("JSON file has been saved.");
    });        
    };        
})







//var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//var adr = 'https://cat-fact.herokuapp.com/facts';
//var q = url.parse(adr, true);

//console.log(q.host); //returns 'localhost:8080'
//console.log(q.pathname); //returns '/default.htm'
//console.log(q.search); //returns '?year=2017&month=february'

//var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
//console.log(qdata.month); //returns 'february'


