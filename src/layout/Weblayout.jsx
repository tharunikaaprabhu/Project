import Navbar from "@/components/Web/Navbar"
import { Outlet } from "react-router-dom"
const Weblayout = () => {
  return (
    
    <div className='h-screen w-screen overflow-hidden overflow-x-hidden m-0 p-0 flex flex-col overflow-y-auto'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Weblayout