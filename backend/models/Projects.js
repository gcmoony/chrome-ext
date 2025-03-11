/*
  This is where we define a schema for the data
*/
const mongoose = require("mongoose")
const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Project", ProjectSchema)
