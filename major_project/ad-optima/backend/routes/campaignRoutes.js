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

export default router