var express = require('express')
var app = express();

app.get('/', function(req,res){
	res.send('Hello hello =^_^=');
})

app.listen(3000);
