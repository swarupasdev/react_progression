import express from "express"
import db from "../db"

const router = express.Router()

//create campaign
router.post("/",(req,res)=>{
    const { title,budget,variant,user_id } =req.body

    const sql = `
    INSERT INTO campaigns 
    (title,budget,variant,user_id)
    VALUES (?,?,?,?)
  `
  db.query(
    sql,
    [title,budget,variant,user_id],
    (err,result)=>{
        if(err){
            return res.status(500).json(err)
        }

        res.json({
            message:"Campaign created succefully"
        })
    }
  )
})

router.get("/:userId", (req,res)=>{
  const userId = req.params.userId

  const sql =
    "SELECT * FROM campaigns WHERE user_id=?"

  db.query(sql,[userId],(err,result)=>{
    if(err){
      return res.status(500).json(err)
    }

    res.json(result)
  })
})

export default router