import { Link } from "react-router-dom" //client side navigation
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function Navbar({ title }) {
  const { user, logout } = useContext(AuthContext)

  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <h2>{title}</h2>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/">Home</Link>

      {user ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/create">Create</Link>
          <span>{user.name}</span>
          <button onClick={logout}>Logout</button>
       </>
        ) : (
       <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
       </>
      )}
      </div>
    </nav>
  )
}

export default Navbar