import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  async function handleLogin(e){
        e.preventDefault()
        try{
          const response = await fetch(
            "http://localhost:5000/api/auth/login",
            {
              method: "POST",
              headers: {
                "Content-Type":"application/json"
              },
              body: JSON.stringify({
                email,
                password
              })
            }
          )

          navigate("/dashboard")
        } catch (error){
            console.log(error)
          }
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

export default Login