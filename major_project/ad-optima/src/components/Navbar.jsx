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
    <nav
      style={{
        display:"flex",
        justifyContent:"flex-end",
        gap:"20px",
        padding:"20px"
      }}
    >

      <Link to="/">Home</Link>

      {!user ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      ) : (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/create">Create</Link>

          <span>{user.name}</span>

          <button onClick={handleLogout}>
            Logout
          </button>
        </>
      )}

    </nav>
  )
}

export default Navbar