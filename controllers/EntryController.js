var mongoose = require("mongoose");
var Entry = require("../models/Entry");
var entryController = {};


/*

*/

  // Show list of employees
// entryController.list = function(req, res) {
//     Entry.find({}).exec(function (err, employees) {
//       if (err) {
//         console.log("Error:", err);
//       }
//       else {
//         res.render("../views/Entry/index", {employees: employees});
//       }
//     });
//   };

/*

*/


// Show list of employees
entryController.list = function(req, res) {
  Entry.find({}).exec(function (err, entry) {
    if (err) {
      console.log("Error:", err);
    }
    else {


      var teststore = db.collection('entry').find({status:"a"});



      res.render("../views/Entry/blank", {entry: entry});
      // var teststore = Entry.findOne({_id: "5aa046a04e301d35e9191ec2",name:"e5"})
      console.log(teststore)
    }
  });
};

// Show employee by id
entryController.show = function(req, res) {
  Entry.findOne({_id: req.params.id}).exec(function (err, entry) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/Entry/show", {entry: entry});
    }
  });
};

// > beta landing page

// Show employee by id
entryController.blank = function(req, res) {
    Entry.find({}).exec(function (err, entry) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/Entry/blank", {entry: entry});
    }
  });
};


// < beta landing page





// Create new employee
entryController.create = function(req, res) {
  res.render("../views/Entry/create");
};

// Save new employee
entryController.save = function(req, res) {
  var entry = new Entry(req.body);

  entry.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/Entry/create");
    } else {
      console.log("Successfully created an employee.");
      res.redirect("/entry/show/"+entry._id);
    }
  });
};

// Edit an employee
entryController.edit = function(req, res) {
  Entry.findOne({_id: req.params.id}).exec(function (err, entry) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/Entry/edit", {entry: entry});
    }
  });
};

// Update an employee
entryController.update = function(req, res) {
  // Entry.findByIdAndUpdate(req.params.id, { $set: { name: req.body.title, address: req.body.address, position: req.body.position, salary: req.body.salary, addone: req.body.addone }}, { new: true }, function (err, employee) {
    Entry.findByIdAndUpdate(req.params.id, { $set: { e1: req.body.e1, e2: req.body.e2, e3: req.body.e3, e4: req.body.e4, e5: req.body.e5, e6: req.body.e6, e7: req.body.e7, lang_one: req.body.lang_one, lang_two: req.body.lang_two, lang_three: req.body.lang_three, lang_four: req.body.lang_four }}, { new: true }, function (err, entry) {
    if (err) {
      console.log(err);
      res.render("../views/Entry/edit", {entry: req.body});
    }
    res.redirect("/entry/show/"+entry._id);
  });
};

// Delete an employee
entryController.delete = function(req, res) {
  Entry.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Employee deleted!");
      res.redirect("/entry");
    }
  });
};

module.exports = entryController;
