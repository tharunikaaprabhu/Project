import React from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard,  Users, Power } from 'lucide-react'
import { Button } from '../ui/button'
const Leftbar = () => {

    const AdminLinks = [
        {
            title: 'Dashboard',
            link: '/admin/dashboard',
            icon: LayoutDashboard
        }, {
            title: 'Users',
            link: '/admin/users',
            icon: Users
        }
    ]
    return (
        <div className='h-screen w-1/6 flex justify-center items-center flex-col bg-green-500/5 pt-10'>
            <div className='h-5/6 w-full flex flex-col justify-start items-center gap-4'>
            <h1 className='text-2xl font-bold mb-6 text-primary'>Event Organizer</h1>

                {
                    AdminLinks.map((data, index) => (
                        <NavLink key={index} to={data.link} className='p-5 border-b-4 border-gray-500 hover:border-primary font-bold mt-2 w-full'>
                            <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
                                {React.createElement(data.icon, { size: 20 })}
                                {data.title}
                            </span>
                        </NavLink>
                    ))
                }
                </div>
            <div className='h-[5%] w-full flex flex-col justify-center items-center'>
                <Button className='p-5  bg-red-500/5 hover:bg-red-500/10 font-bold  w-full'>
                    <span className='flex flex-row items-center justify-start h-full w-full gap-2 text-red-500'>
                        <Power size={20} /> 
                        <NavLink to='/'>Logout</NavLink>
                    </span>
                </Button>
            </div>

        </div>
    )
}

export default Leftbar