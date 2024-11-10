import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useContext } from 'react';
import Home from "./pages/Web/Home";
import Register from "./pages/Web/Register";
import Notfound from "./pages/Web/Notfound";
import Weblayout from "./layout/Weblayout";
import Adminlayout from "./layout/Adminlayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminUser from "./pages/Admin/AdminUser";
import Event from "./pages/Web/Event";
import Book from "./pages/Web/Book";
import Contact from "./pages/Web/Contact";
import Payment from "./pages/Web/Payment";
import Confirm from "./pages/Web/Confirm";
import UserDetails from "./pages/User/UserDetails";
import UserDashboard from "./pages/User/UserDashboard";
import Userlayout from "./layout/Userlayout";
import Feedback from "./pages/Web/Feedback";
import Login from "./components/Auth/Login";  // Ensure correct path
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Web Layout */}
          <Route element={<Weblayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/event" element={<Event />} />
            <Route path="/book" element={<Book />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="*" element={<Notfound />} />
          </Route>

          {/* Admin Layout */}
          <Route element={<Adminlayout />}>
            <Route 
              path="/admin/dashboard" 
              element={auth && auth.role === 'ADMIN' ? <AdminDashboard /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/admin/users" 
              element={auth && auth.role === 'ADMIN' ? <AdminUser /> : <Navigate to="/login" />} 
            />
          </Route>

          {/* User Layout */}
          <Route element={<Userlayout />}>
            <Route 
              path="/user/dashboard" 
              element={auth && auth.role === 'USER' ? <UserDashboard /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/user/info" 
              element={auth && auth.role === 'USER' ? <UserDetails /> : <Navigate to="/login" />} 
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Home from "./pages/Web/Home"
// import Login from "./pages/Web/Login"
// import Register from "./pages/Web/Register"
// import Notfound from "./pages/Web/Notfound"
// import Weblayout from "./layout/Weblayout"
// import Adminlayout from "./layout/Adminlayout"
// import AdminDashboard from "./pages/Admin/AdminDashboard"
// import AdminUser from "./pages/Admin/AdminUser"
// import Event from "./pages/Web/Event"
// import Book from "./pages/Web/Book"
// import Contact from "./pages/Web/Contact"
// import Payment from "./pages/Web/Payment"
// import Confirm from "./pages/Web/Confirm"
// import UserDetails from "./pages/User/UserDetails"
// import UserDashboard from "./pages/User/UserDashboard"
// import Userlayout from "./layout/Userlayout"
// import Feedback from "./pages/Web/Feedback";
// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route element={<Weblayout/>}>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/login' element={<Login/>}/>
//         <Route path='/register' element={<Register/>}/>
//         <Route path='/event' element={<Event/>}/>
//         <Route path='/book' element={<Book/>}/>
//         <Route path='/Contact' element={<Contact/>}/>
//         <Route path='/Payment'  element={<Payment/>}/>
//          <Route path='/Confirm'  element={<Confirm/>}/>
//          <Route path='/Feedback'  element={<Feedback/>}/>

//         <Route path='*' element={<Notfound/>}/>

//         </Route>

//         <Route element={<Userlayout />}>
//             <Route path="/user/dashboard" element={<UserDashboard />} />
//             <Route path="/user/info" element={<UserDetails />} />
//           </Route>


//         <Route element={<Adminlayout/>}>
//                         <Route path='/admin/dashboard' element={<AdminDashboard/>} />
//                         <Route path='/admin/users' element={<AdminUser/>} />

//                     </Route>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App