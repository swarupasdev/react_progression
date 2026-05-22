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

          const data = await response.json()

          console.log(data)

          if(response.ok){

            localStorage.setItem(
              "user",
              JSON.stringify(data.user)
            )

            localStorage.setItem(
              "token",
              data.token
            )

          navigate("/dashboard")

          }else{
            alert(data.message)
          }
        } catch (error){
            console.log(error)
          }
        }

  return (
  <>
  <div
    className="
      min-h-screen
      bg-zinc-950
      flex
      items-center
      justify-center
      px-4
    "
  >

    <div
      className="
        bg-zinc-900
        p-10
        rounded-2xl
        shadow-2xl
        w-full
        max-w-md
      "
    >

      <h1
        className="
          text-4xl
          font-bold
          text-white
          text-center
          mb-8
        "
      >
        Login
      </h1>

      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-5"
      >

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}

          className="
            bg-zinc-800
            text-white
            px-4
            py-3
            rounded-lg
            outline-none
            focus:ring-2
            focus:ring-cyan-400
          "
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}

          className="
            bg-zinc-800
            text-white
            px-4
            py-3
            rounded-lg
            outline-none
            focus:ring-2
            focus:ring-cyan-400
          "
        />

        <button
          type="submit"

          className="
            bg-cyan-500
            hover:bg-cyan-600
            text-white
            py-3
            rounded-lg
            font-semibold
            transition
          "
        >
          Login
        </button>

      </form>

    </div>

  </div>

  </>
)

}

export default Login