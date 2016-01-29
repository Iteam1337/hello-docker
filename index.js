var express = require('express')
var app = express();

app.get('/', function(req,res){
	res.send('Hej hej meow meow =^_^=');
})

app.listen(3000);
