/*
  This is where we define a schema for the data. For this model Link,
  we want to associate it with a Project model
*/
const mongoose = require("mongoose")
const QASchema = new mongoose.Schema({
  // Associating the QA to a "parent"
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  question: { type: String, required: true },
  answer: { type: String },
  url: { type: String },
  tags: [String], // Tags are used for fuzzy searching
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("QA", QASchema)
