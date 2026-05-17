import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")

    if(storedUser){
      setUser(JSON.parse(storedUser))
    }

    setLoading(false)
  },[])

  function logout(){
    localStorage.removeitem("user")
    localStorage.removeitem("token")
    setUser(null)
  }
 
  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider