import { Outlet } from "react-router-dom"
import Header from "./Header"



const Layout = () => {
  return (
    <div className="dark:bg-slate-950 bg-white dark:text-white min-h-screen">
        <div className="max-w-md mx-auto">
            <Header/>
            <Outlet/>
        </div>
    </div>
  )
}
export default Layout