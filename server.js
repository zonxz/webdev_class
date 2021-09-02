//server module
const express = require('express');
var fs = require('fs');
var url = "https://api.sunrise-sunset.org/json?lat=40.23810&lng=24.20133&date=today";

const app = express();

//port set
const port = 3000;
app.get('/',function(req,res){

    fs.readFile('/view', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);

    return res.end();

  });

});



//routes from main
app.get('/foobar',function(req,res){
res.send('This is foobar page...');
});

//listening at port
app.listen(port, () => console.log('It works'));
