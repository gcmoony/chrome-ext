const express = require("express")
const cors = require("cors") // For sharing a resource that are on different URLs
const mongoose = require("mongoose") // Declaring MongoDB Schema
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5000

// To allow for cross origin sharing
app.use(cors())

// To respond in only JSON
app.use(express.json())

// ==== Routes ====
app.get("/", (req, res) => {
  res.send("Hello world")
})

// ==== Listen for connections ====
app.listen(PORT, () => {
  console.log("Running on port ", PORT)
})
