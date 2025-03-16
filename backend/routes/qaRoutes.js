const express = require("express")
const router = express.Router()

// Import the schema
const objSchema = require("../models/QA")

// Create a new QA
// Should return 200
router.post("/", async (req, res) => {
  try {
    // Parse body with the schema
    const newQA = await objSchema.create(req.body)
    res.status(200).json(newQA)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

// Get All QAs (using projectID)
// Should return 200
router.get("/", async (req, res) => {
  try {
    const { projectID } = req.query
    const query = projectID ? { project: projectID } : {}
    const qas = await objSchema.find(query).sort({ createdAt: -1 })
    res.json(qas)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Get a QA
// Should return 200
router.get("/:id", async (req, res) => {
  try {
    const qa = await objSchema.findById(req.params.id)
    res.json(qa)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Update a QA
// Should return 200 or 201
router.put("/:id", async (req, res) => {
  try {
    const updated = await objSchema.findByIdAndUpdate(req.params.id, req.body, {
      // https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()
      // true: returns modified document instead of original
      new: true,
    })
    res.status(201).json(updated)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Delete a QA
// Should return 200
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await objSchema.findByIdAndDelete(req.params.id)
    // res.json(deleted)
    res.json({ message: "QA deleted successfully" })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
