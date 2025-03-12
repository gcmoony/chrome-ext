const express = require("express")
const cors = require("cors") // For sharing a resource that are on different URLs
const mongoose = require("mongoose") // Declaring MongoDB Schema
require("dotenv").config()

const projRoutes = require("./routes/projectRoutes")
const linkRoutes = require("./routes/linkRoutes")
const connectToDb = require("./dbConfig")

const app = express()
const PORT = process.env.PORT || 5000

// Connecting to the Database
connectToDb()

// To allow for cross origin sharing
app.use(cors())

// To respond in only JSON
app.use(express.json())

// ==== Routes ====
app.use("/api/projects", projRoutes)
app.use("/api/links", linkRoutes)

// ==== General Route ====
app.get("/", (req, res) => {
  res.send({ message: "Hello world" })
})

// ==== Listen for connections ====
app.listen(PORT, () => {
  console.log("Running on port ", PORT)
})
