/**
 * Created by amitraj on 9/7/14.
 */
//Requiring mongoose module
var mongoose = require('mongoose');
var async = require("async");
var urlTest = "mongodb://localhost/express";
console.log("Node js server started");

//Creating connection to database
mongoose.connect(urlTest, function (err, result) {
    if (err) {
        console.log("Error occurred while connecting to database ad error is :" + err);
    }
    else {
        console.log("No error occurred...Database connection is done");
    }
})

//Creating schema
var userSchema = new mongoose.Schema(
    {
        UserId: {type: String},
        Name: {type: String},
        Age: {type: Number, min: 18, max: 40}
    });

var adminSchema = new mongoose.Schema(
    {
        AdminId: {type: String},
        Name: {type: String},
        Age: {type: Number, min: 21, max: 50}

    });

var bookSchema = new mongoose.Schema(
    {
        BookId: {type: String},
        BookAuthor: {type: String}
    });
//Mapping schema and collection
var newUsers = mongoose.model('userCollection', userSchema);
var newAdmin = mongoose.model('adminCollection', adminSchema);
var newBook = mongoose.model('bookCollection', bookSchema);


//Inserting values
for (var i = 0; i < 5; i++) {
    var SampleUser = new newUsers(
        {
            UserId: '0812' + i,
            Name: 'Amit' + i,
            Age: 24 + i
        });

    var SampleAdmin = new newAdmin(
        {
            AdminId: '1234' + i,
            Name: 'admin' + i,
            Age: 22 + i
        });

    var SampleBook = new newBook(
        {
            BookId: '0812',
            BookAuthor: 'Writer' + i
        });

    SampleUser.save(function (err) {
        if (err) {
            console.log("Error occurred while saving the user and error is : " + err);
        }
        else {
            console.log("User Data saved successfully...");
        }
    })
    SampleAdmin.save(function (err) {
        if (err) {
            console.log("Error occurred while saving the admin and error is : " + err);
        }
        else {
            console.log("Admin Data saved successfully...");
        }
    })
    SampleBook.save(function (err) {
        if (err) {
            console.log("Error occurred while saving the book and error is : " + err);
        }
        else {
            console.log("Book Data saved successfully...");
        }
    })
}
//}

//Defining Functions for different purpose
var insertUserToDb = function (req, res) {
    new newUsers(req.body).save(function (err, result) {
        if (err) {
            console.log("error in inserting data" + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    })
};
var readSingleUserFromDb = function (req, res) {
    newUsers.findOne({UserId: req.params.id}).exec(function (err, result) {
        if (err) {
            console.log("error in reading data" + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    });
};
var readAllUserFromDb = function (req, res) {
    newUsers.find({}).exec(function (err, result) {
        if (err) {
            console.log("error in reading data" + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    });
};
var deleteSingleUserFromDb = function (req, res) {
    newUsers.findOne({UserId: req.params.id}).remove().exec(function (err, result) {
        if (err) {
            console.log("error in deleting" + req.params.id + "data and error is " + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    });
};

var deleteAllUserFromDb = function (req, res) {
    newUsers.find({}).remove().exec(function (err, result) {
        if (err) {
            console.log("error in deleting data and error is " + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    });
};

var updateSingleUserFromDb = function (req, res) {
    newUsers.update({UserId: req.params.id}, {$set: req.body}).exec(function (err, result) {
        if (err) {
            console.log("error in deleting data and error is " + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    });
};

var updateAllUserFromDb = function (req, res) {
    newUsers.update({}, {$set: req.body}).exec(function (err, result) {
        if (err) {
            console.log("error in deleting data and error is " + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    });
};


var insertAdminToDb = function (req, res) {
    new newAdmin(req.body).save(function (err, result) {
        if (err) {
            console.log("error in inserting data" + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    })
};
var readSingleAdminFromDb = function (req, res) {
    newAdmin.findOne({UserId: req.params.id}).exec(function (err, result) {
        if (err) {
            console.log("error in reading data" + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    });
};
var readAllAdminFromDb = function (req, res) {
    newAdmin.find({}).exec(function (err, result) {
        if (err) {
            console.log("error in reading data" + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    });
};
var deleteSingleAdminFromDb = function (req, res) {
    newAdmin.findOne({UserId: req.params.id}).remove().exec(function (err, result) {
        if (err) {
            console.log("error in deleting" + req.params.id + "data and error is " + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    });
};

var deleteAllAdminFromDb = function (req, res) {
    newAdmin.find({}).remove().exec(function (err, result) {
        if (err) {
            console.log("error in deleting data and error is " + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    });
};

var updateSingleAdminFromDb = function (req, res) {
    newAdmin.update({UserId: req.params.id}, {$set: req.body}).exec(function (err, result) {
        if (err) {
            console.log("error in deleting data and error is " + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    });
};

var updateAllAdminFromDb = function (req, res) {
    newAdmin.update({}, {$set: req.body}).exec(function (err, result) {
        if (err) {
            console.log("error in deleting data and error is " + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    });
};


var insertBookToDb = function (req, res) {
    new newBook(req.body).save(function (err, result) {
        if (err) {
            console.log("error in inserting data" + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    })
};
var readSingleBookFromDb = function (req, res) {
    newBook.findOne({UserId: req.params.id}).exec(function (err, result) {
        if (err) {
            console.log("error in reading data" + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    });
};
var readAllBookFromDb = function (req, res) {
    newBook.find({}).exec(function (err, result) {
        if (err) {
            console.log("error in reading data" + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    });
};
var deleteSingleBookFromDb = function (req, res) {
    newBook.findOne({UserId: req.params.id}).remove().exec(function (err, result) {
        if (err) {
            console.log("error in deleting" + req.params.id + "data and error is " + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    });
};

var deleteAllBookFromDb = function (req, res) {
    newBook.find({}).remove().exec(function (err, result) {
        if (err) {
            console.log("error in deleting data and error is " + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    });
};

var updateSingleBookFromDb = function (req, res) {
    newBook.update({UserId: req.params.id}, {$set: req.body}).exec(function (err, result) {
        if (err) {
            console.log("error in deleting data and error is " + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    });
};

var updateAllBookFromDb = function (req, res) {
    newBook.update({}, {$set: req.body}).exec(function (err, result) {
        if (err) {
            console.log("error in deleting data and error is " + err);
            return;
        }
        else
            res.end(JSON.stringify(result));
    });
};

//Exporting different unctions to expressDemo.js

module.exports.insertUserToDb = insertUserToDb;
module.exports.readAllUserFromDb = readAllUserFromDb;
module.exports.readSingleUserFromDb = readSingleUserFromDb;
module.exports.deleteAllUserFromDb = deleteAllUserFromDb;
module.exports.updateSingleUserFromDb = updateSingleUserFromDb;
module.exports.deleteSingleUserFromDb = deleteSingleUserFromDb;
module.exports.updateAllUserFromDb = updateAllUserFromDb;

module.exports.insertAdminToDb = insertAdminToDb;
module.exports.readAllAdminFromDb = readAllAdminFromDb;
module.exports.readSingleAdminFromDb = readSingleAdminFromDb;
module.exports.deleteAllAdminFromDb = deleteAllAdminFromDb;
module.exports.updateSingleAdminFromDb = updateSingleAdminFromDb;
module.exports.deleteSingleAdminFromDb = deleteSingleAdminFromDb;
module.exports.updateAllAdminFromDb = updateAllAdminFromDb;

module.exports.insertBookToDb = insertBookToDb;
module.exports.readAllBookFromDb = readAllBookFromDb;
module.exports.readSingleBookFromDb = readSingleBookFromDb;
module.exports.deleteAllBookFromDb = deleteAllBookFromDb;
module.exports.updateSingleBookFromDb = updateSingleBookFromDb;
module.exports.deleteSingleBookFromDb = deleteSingleBookFromDb;
module.exports.updateAllBookFromDb = updateAllBookFromDb;
