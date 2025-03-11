const express = require("express")
const router = express.Router()

// Import the schema
const projSchema = require("../models/Projects")

// Insert a new project
router.post("/", async (req, res) => {
  try {
    // Parse body with the schema
    const newProject = await projSchema.create(req.body)
    res.status(200).json(newProject)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

// Get All projects
router.get("/", async (req, res) => {
  try {
    const projects = await projSchema.find().sort({ createdAt: -1 }) // Get by most recent
    res.json(projects)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Get a project
router.get("/:id", async (req, res) => {
  try {
    const project = await projSchema.findById(req.params.id) // Get by most recent
    res.json(project)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Update a project
router.put("/:id", async (req, res) => {
  try {
    const updated = await projSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        // https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()
        // true: returns modified document instead of original
        new: true,
      }
    )
    res.status(201).json(updated)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Delete a project
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await projSchema.findByIdAndDelete(req.params.id)
    // res.json(deleted)
    res.json({ message: "Project deleted successfully" })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
