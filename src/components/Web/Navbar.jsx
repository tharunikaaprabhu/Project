
// import { NavLink } from "react-router-dom";
// import { ModeToggle } from "../mode-toggle";
// import { Contact, Home } from 'lucide-react';

// const Navbar = () => {
//   const LinksData = [
//     {
//       title: 'Home',
//       link: '/'
//     },
//     {
//       title: 'Login',
//       link: '/login'
//     },
//     {
//       title: 'Register',
//       link: '/register'
//     },
//     {
//       title: 'Events',
//       link: '/event'
//     },
//   ];

//   return (
//     <nav className='w-full h-16 flex items-center bg-gradient-to-r from-primary via-secondary to-tertiary text-white shadow-lg'>
//       <div className='container mx-auto flex justify-between items-center px-4'>
//         <div className='flex items-center space-x-4'>
//           <NavLink to="/admin/dashboard" className="flex items-center space-x-2 hover:text-secondary transition-colors duration-300">
//             <Home className="h-8 w-8" />
//             <span className='text-2xl font-extrabold'>BLOOM</span>
//           </NavLink>
//         </div>
//         <div className='flex items-center space-x-6'>
//           {LinksData.map((data, index) => (
//             <NavLink key={index} to={data.link} className="hover:text-secondary transition-colors duration-300">
//               {data.title}
//             </NavLink>
//           ))}
//           <NavLink to="/contact" className="flex items-center space-x-2 hover:text-secondary transition-colors duration-300">
//             <Contact className="h-6 w-6" />
//             <span>Contact</span>
//           </NavLink>
//           <ModeToggle />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { NavLink } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import { Contact, Home } from 'lucide-react';

const Navbar = () => {
  const LinksData = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Login',
      link: '/login'
    },
    {
      title: 'Register',
      link: '/register'
    },
    {
      title: 'Events',
      link: '/event'
    },
  ];

  return (
    <nav className='w-full h-16 flex items-center bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400 text-white shadow-lg'>
      <div className='container mx-auto flex justify-between items-center px-4'>
        <div className='flex items-center space-x-4'>
          <NavLink to="/admin/dashboard" className="flex items-center space-x-2 hover:text-indigo-300 transition-colors duration-300">
            <Home className="h-8 w-8" />
            <span className='text-2xl font-extrabold'>BLOOM</span>
          </NavLink>
        </div>
        <div className='flex items-center space-x-6'>
          {LinksData.map((data, index) => (
            <NavLink key={index} to={data.link} className="hover:text-indigo-300 transition-colors duration-300">
              {data.title}
            </NavLink>
          ))}
          <NavLink to="/contact" className="flex items-center space-x-2 hover:text-indigo-300 transition-colors duration-300">
            <Contact className="h-6 w-6" />
            <span>Contact</span>
          </NavLink>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

