import mysql from "mysql2"

const db = mysql.createConnection({
  host: "localhost",
  user: "grimsage",
  password: "grimsage@135sql",
  database: "campaign_db"
})

db.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("MySQL connected")
  }
})

export default db