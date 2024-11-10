import UserLeft from '@/components/User/UserLeft';
import UserTop from '@/components/User/UserTop';
import { Outlet } from 'react-router-dom'

const Userlayout = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto'>
      <UserLeft/>
      <div className='h-screen w-5/6 flex justify-center items-center flex-col'>
        <UserTop/>
        <div className='h-[90vh] w-full'>
        <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Userlayout;