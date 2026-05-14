// import { useContext } from "react"
// import { useNavigate } from "react-router-dom"
// import { account } from "../config/Appwrite"

import { useState } from "react"
import { account } from "../config/Appwrite"
import { useNavigate } from "react-router-dom"
function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  async function handleLogic(e){
        e.preventDefault()
        try{
            await account.createEmailPasswordSession(
            email,
            password
          )
          console.log("Logged in:")

          navigate("/dashboard")
        } catch (error){
            console.log(error)
          }
  

  return (
    <>
      <h1>Login Page</h1>
      
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">Login</button>


      </form>
    </>
  )
}
}

export default Login