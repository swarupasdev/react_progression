const express = require("express")
const cors = require("cors")

const authRoutes = require("./routes/authRoutes")
const campaignRoutes = require("./routes/campaignRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/campaigns", campaignRoutes)

app.listen(5000, () => {
  console.log("Server running on port 5000")
})