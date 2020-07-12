var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
//var MongoClient = require('mongoose').MongoClient;
const mongoose = require('mongoose');

const User = require('../model/User');

var posts = [{ "message": "hi" }, { "message": "hello" }];

app.use(cors());
app.use(bodyParser.text());


app.get('/posts', (req, res) => {
    res.send(posts);
})

app.get('/userlist', (req, res) => {
    User.find({}).then((users) => {
        res.send(users);
    });
});
app.post('/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, result) => {
        if (err) {
            console.log('unable to create user');
        }
        else {
            res.sendStatus(200);
            console.log('created user with email ' + req.body.email);
        }
    });
})



//const MongoClient = require('mongodb').MongoClient;

// const uri = "mongodb://test:test@baagunnaara-test-yq6lc.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     if (!err) {
//         console.log('connected')
//     }
//     // perform actions on the collection object
//     client.close();
// });

mongoose.connect('mongodb+srv://test:test@baagunnaara-test-yq6lc.mongodb.net/test?retryWrites=true&w=majority', (err) => {
    if (!err) {
        console.log('connected');
    }
    else {
        console.log('ERROR');
    }
})



app.listen(3000);