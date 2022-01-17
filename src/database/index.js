const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/entusiacast");
mongoose.Promise = global.Promise;

module.exports = mongoose;
