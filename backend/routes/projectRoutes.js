const express = require("express")
const router = express.Router()

// Import the schema
const projSchema = require("../models/Projects")

// Insert a new project
router.post("/", async (req, res) => {
  try {
    // Parse body with the schema
    const newProject = await projSchema.create(req.body)
    res.json(newProject)
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

module.exports = router
