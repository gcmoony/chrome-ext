/*
  This is where we define a schema for the data. For this model Link,
  we want to associate it with a Project model
*/
const mongoose = require("mongoose")
const LinkSchema = new mongoose.Schema({
  // Associating the link to a "parent"
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  title: { type: String, required: true },
  url: { type: String, required: true },
  notes: { type: String },
  tags: [String], // Tags are used for fuzzy searching
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Link", LinkSchema)
