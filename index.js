var express = require('express')
var app = express();

app.get('/', function(req,res){
	res.send('<h1>=^_^=</h1><p>Meow</p>');
})

app.listen(3000);
