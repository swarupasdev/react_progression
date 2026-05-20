import { Link, useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate()

  const user = JSON.parse(
    localStorage.getItem("user")
  )

  function handleLogout(){

    localStorage.removeItem("user")
    localStorage.removeItem("token")

    navigate("/login")
  }

  return (

    <nav className="bg-zinc-900 text-white px-8 py-4 shadow-lg">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <h1 className="text-2xl font-bold text-cyan-400">
          Ad-Optima
        </h1>

        <div className="flex items-center gap-6 text-lg">

          <Link
            to="/"
            className="hover:text-cyan-400 transition"
          >
            Home
          </Link>

          {!user ? (

            <>
              <Link
                to="/login"
                className="hover:text-cyan-400 transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="hover:text-cyan-400 transition"
              >
                Signup
              </Link>
            </>

          ) : (

            <>
              <Link
                to="/dashboard"
                className="hover:text-cyan-400 transition"
              >
                Dashboard
              </Link>

              <Link
                to="/create"
                className="hover:text-cyan-400 transition"
              >
                Create
              </Link>

              <span className="text-cyan-400 font-semibold">
                {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="
                  bg-red-500
                  hover:bg-red-600
                  px-4
                  py-2
                  rounded-lg
                  transition
                "
              >
                Logout
              </button>
            </>
          )}

        </div>

      </div>

    </nav>
  )
}

export default Navbar