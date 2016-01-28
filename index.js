var express = require('express')
var app = express();

app.get('/', function(req,res){
	res.send('MEOW =^_^=');
})

app.listen(3000);
