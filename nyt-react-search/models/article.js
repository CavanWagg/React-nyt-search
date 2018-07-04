const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  webUrl:{type: String, require: true},
  headline: {type: String, require: true},
  date: {type: Date},
  id: {type: String, require: true},
});

// Create our model from the schema above, using mongoose's model method

const Article = mongoose.model("Article", articleSchema); 

module.exports = Article;