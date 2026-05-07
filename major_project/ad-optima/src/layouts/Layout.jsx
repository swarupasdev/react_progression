import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function Layout(){
    return(

        <>
        <Navbar title="Ad-Optima"/>
        {/*<h1>Layout is working</h1>*/}
        <Outlet/>  {/*placeholder to render child routes inside a parent layout*/}
        </>

    )
}
export default Layout