/**
 * Created by amitraj on 14/7/14.
 */
//Requiring mongoose module
var mongoose = require('mongoose');
var async = require("async");
var urlTest = "mongodb://localhost/connectMe";
console.log("Node js server started");

//Creating connection to database
mongoose.connect(connectMeDb, function (err, result) {
    if (err) {
        console.log("Error occurred while connecting to database and error is :" + err);
    }
    else {
        console.log("No error occurred...Database connection is done");
    }
})

//Creating schema
var userSchema = new mongoose.Schema(
    {
        uname: {type: String},
        Password: {type: String},
        Age: {type: Number, min: 18, max: 50}
    });

