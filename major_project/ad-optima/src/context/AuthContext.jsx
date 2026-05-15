// import { createContext, useState, useEffect } from "react"  //to build a global data channel
// //createContext -> create a shared channel
// //useState -> stores dynamic data inside component
// //useEffect -> run side effects after render


// //export makes this function available to other files
// export const AuthContext = createContext()  //Creates and exports a context object

// export function AuthProvider({ children }) {  //whatever component are wrapped inside this provider
//   const [user, setUser] = useState(null)
//   const [loading, setLoading] = useState(true)

//   //runs after everything,  side effects of rendering 
//     useEffect(() => { 
//       const storedUser = localStorage.getItem("user")  //browser storage system
  
//       if (storedUser) { //if user exist 
//         setUser(JSON.parse(storedUser))  //trigeers re-render with restored user
//       }
    
//       setLoading(false)   //loading is done so false value if not then true value 
//     },[])

// //login function
//   function login(username) {   
//   const userData = { name: username }
//   setUser(userData)  //update user state value
//   localStorage.setItem("user", JSON.stringify(userData))  //converts object to string 
// }

// //logout function 
//   function logout() {
//   setUser(null)  //clears react state 
//   localStorage.removeItem("user")
// }

//   return ( // provider consumer inside context object
//     //provider = makes data avail to all comp. inside it
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}   {/*renders wrapped components*/}
//     </AuthContext.Provider>
//   )
// }

import { createContext, useEffect, useState } from "react"
import { account } from "../config/Appwrite"

export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkUser() {
      try {
        const currentUser = await account.get()

        console.log("Current User:", currentUser)

        setUser(currentUser)
      } 
      catch (error) {
        console.log(error)
        setUser(null)
      }

      setLoading(false)
    }

    checkUser()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider