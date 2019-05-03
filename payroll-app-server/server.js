var path = require('path');
var fs = require('fs');
var express = require('express');
var https = require('https')
var morgan = require('morgan');
const cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const dotenv = require('dotenv');
var certOptions = {
    key: fs.readFileSync(path.resolve('/Users/ruiyang/server.key')),
    cert: fs.readFileSync(path.resolve('/Users/ruiyang/server.crt'))
}

var app = express();
app.use(cors());
//load the .env file
dotenv.config();
var url = process.env.MONGO_DB_ENDPOINT;
var db = mongoose.connect(url, { useNewUrlParser: true });



//Middlerwares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




//Routes
app.use('/users', require('./routes/users'));



// API
app.get('/', function (request, response) {
    response.send("Hello MovedIn");
})

// var server = https.createServer(certOptions, app).listen(process.env.SERVER_PORT)


app.listen(process.env.SERVER_PORT, function () {
    console.log("Server listening at port 5000,MovedIn api created");
});