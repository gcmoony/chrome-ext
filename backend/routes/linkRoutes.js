const express = require("express")
const router = express.Router()

// Import the schema
const objSchema = require("../models/Link")

// Create a new link
// Should return 200
router.post("/", async (req, res) => {
  try {
    // Parse body with the schema
    const newLink = await objSchema.create(req.body)
    res.status(200).json(newLink)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

// Get All links (using project ID)
// Should return 200
router.get("/", async (req, res) => {
  try {
    const { projectID } = req.query // Obtained from the url
    const query = projectID ? { project: projectID } : {}
    const links = await objSchema.find(query).sort({ createdAt: -1 }) // Get by most recent
    res.json(links)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Get a link
// Should return 200
router.get("/:id", async (req, res) => {
  try {
    const link = await objSchema.findById(req.params.id) // Get by most recent
    res.json(link)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Update a link
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

// Delete a link
// Should return 200
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await objSchema.findByIdAndDelete(req.params.id)
    // res.json(deleted)
    res.json({ message: "Link deleted successfully" })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
