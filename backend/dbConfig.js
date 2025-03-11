const mongoose = require("mongoose") // Declaring DB Schema
require("dotenv").config()

const DBUSER = encodeURIComponent(process.env.DBuser)
const DBPASS = encodeURIComponent(process.env.DBPass)
const DBCONNECT = process.env.DBConnect
const DBSTART = process.env.DBStart

const uri = `${DBSTART}${DBUSER}:${DBPASS}${DBCONNECT}`

const connectToDb = async () => {
  let connectionStatus
  try {
    connectionStatus = await mongoose.connect(uri)
    console.log(connectionStatus && "Connected to DB")
  } catch (err) {
    console.log("Error connecting to DB", err)
  }
}

module.exports = connectToDb
