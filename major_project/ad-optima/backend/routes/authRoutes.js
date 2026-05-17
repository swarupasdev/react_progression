import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import db from "../db.js"

const router = express.Router()

// signup
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body

  const hashedPassword = await bcrypt.hash(password, 10)

  const sql =
    "INSERT INTO users (name,email,password) VALUES (?,?,?)"

  db.query(
    sql,
    [name, email, hashedPassword],
    (err, result) => {
      if (err) {
        return res.status(500).json(err)
      }

      res.json({
        message: "User registered successfully"
      })
    }
  )
})


// login
router.post("/login", (req, res) => {
  const { email, password } = req.body

  const sql =
    "SELECT * FROM users WHERE email=?"

  db.query(sql, [email], async (err, result) => {
    if (err) {
      return res.status(500).json(err)
    }

    if (result.length === 0) {
      return res.json({
        message: "User not found"
      })
    }

    const user = result[0]

    const match = await bcrypt.compare(
      password,
      user.password
    )

    if (!match) {
      return res.json({
        message: "Invalid password"
      })
    }

    const token = jwt.sign(
      { id: user.id },
      "secretkey"
    )

    res.json({
      message: "Login successful",
      token,
      user
    })
  })
})

export default router