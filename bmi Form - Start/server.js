var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "bmi.html" );
});
app.post('/calculate', function (req, res) {
	var heightInCM=req.body.height/100;
	var bmi=(req.body.weight/(heightInCM*heightInCM));
	bmi=bmi.toFixed(2);
		  res.write("Your BMI result is: "+bmi);
		  res.end();
});
app.listen(3000);
console.log("Server is running on :3000");