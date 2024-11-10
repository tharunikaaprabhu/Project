import Leftbar from '@/components/Admin/Leftbar'
import Topbar from '@/components/Admin/Topbar'
import { Outlet } from 'react-router-dom'

const Adminlayout = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto'>
      <Leftbar />
      <div className='h-screen w-5/6 flex justify-center items-center flex-col'>
        <Topbar />
        <div className='h-[90vh] w-full'>
        <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Adminlayout