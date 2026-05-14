import { useState } from "react"
import { ID } from "appwrite"
import { account } from "../config/Appwrite"
import { useNavigate } from "react-router-dom"

function Signup() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()

  async function handleSignup(e){
    e.preventDefault()

    try{
      const response = await account.create(
        ID.unique(),
        email,
        password,
        name
      )

      console.log("User created:", response)

      navigate("/login")

    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <h1>Signup Page</h1>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">Signup</button>
      </form>
    </>
  )
}

export default Signup