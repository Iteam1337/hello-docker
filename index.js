var express = require('express')
var app = express();

app.get('/', function(req,res){
	res.send('Hello purr purr =^_^=');
})

app.listen(3000);
