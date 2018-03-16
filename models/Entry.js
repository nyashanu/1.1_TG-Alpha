var mongoose = require('mongoose');

var EntrySchema = new mongoose.Schema({
  e1: String,
  e2: String,
  e3: String,
  e4: String,
  e5: String,
  e6: String,
  e7: String,
  lang_one: String,
  lang_two: String,
  lang_three: String,
  lang_four: String,
  updated_at: { type: Date, default: Date.now },
});

// var EmployeeSchema = new mongoose.Schema({
//   name: String,
//   address: String,
//   position: String,
//   salary: Number,
//   updated_at: { type: Date, default: Date.now },
// });

module.exports = mongoose.model('entries', EntrySchema);
// module.exports = mongoose.model('entry', EntrySchema);