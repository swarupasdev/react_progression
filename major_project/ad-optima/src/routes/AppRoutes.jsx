// decides which page should open for which URL

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../layouts/Layout"
import ProtectedRoute from "./ProtectedRoute"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Dashboard from "../pages/Dashboard"
import CreateCampaign from "../pages/CreateCampaign"

function AppRoutes() {
  return (
    <BrowserRouter>{/*enables routing using URL*/}
      <Routes>{/*cotainer for all routes */}
        <Route path="/" element={<Layout />}> {/*defines one route*/}
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="dashboard"
            element={

              <ProtectedRoute>
                 <Dashboard />     {/*Dashboard under protected route*/}
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="create"
          element={
            <ProtectedRoute>
              <CreateCampaign/>    {/*CreateCampaign under protected route*/}
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes