
// import {Link} from 'react-router-dom' 
// import { Facebook, Twitter, Instagram } from 'lucide-react';
// const Home = () => {
//   return (
//     <div className="bg-black text-white min-h-screen flex flex-col justify-between">

//       <header className="flex flex-col items-center text-center py-6">
//         <h1 className="text-4xl font-bold">Welcome to Event Organizer Booking</h1>
//         <p className="text-lg mt-2">Plan your events with ease</p>
//       </header>

//       <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://ik.imagekit.io/lede6qmhu/Event/desktop-wallpaper-.jpg?updatedAt=1722094689701')" }}>
//         <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
//           <div className="text-center text-white">
//             <h2 className="text-4xl font-bold">Make Your Events Memorable</h2>
//             <button className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded">
//               <Link to='/Login'>Get Started</Link>
//               </button>
//           </div>
//         </div>
//       </section>

//       <section className="p-8 bg-black-900">
//         <h2 className="text-2xl font-bold text-center mb-6">Our Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-gray-800 p-4 rounded shadow">
//             <h3 className="text-xl font-semibold">Venue Booking</h3>
//             <p>Find the perfect venue for your event.</p>
//           </div>
//           <div className="bg-gray-800 p-4 rounded shadow">
//             <h3 className="text-xl font-semibold">Catering Services</h3>
//             <p>Delicious food and beverages for your guests.</p>
//           </div>
//           <div className="bg-gray-800 p-4 rounded shadow">
//             <h3 className="text-xl font-semibold">Event Planning</h3>
//             <p>Expert planning to ensure your event is a success.</p>
//           </div>
//         </div>
//       </section>

//     <footer className="w-full py-4 bg-black text-gray-200 border-t-2 border-primary/50  bg-gradient-to-r from-primary via-secondary to-tertiary shadow-lg">
//       <div className="container mx-auto flex flex-col items-center space-y-4">
//         <p className="text-center">&copy; 2024 Event Organizer Booking. All rights reserved.</p>
//         <div className="flex space-x-6">
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
//             <Facebook className="h-6 w-6 hover:text-primary transition-colors" />
//           </a>
//           <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
//             <Twitter className="h-6 w-6 hover:text-primary transition-colors" />
//           </a>
//           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
//             <Instagram className="h-6 w-6 hover:text-primary transition-colors" />
//           </a>
//         </div>
//       </div>
//     </footer>
//     </div> 
//   );

// };

// export default Home;


import { Instagram, Facebook, Twitter } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Side with Larger Circle Image */}
        <div className="relative w-1/2 h-screen flex items-center justify-center bg-blue-100 overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Larger Circle Image */}
            <div className="absolute w-96 h-96 bg-blue-500 rounded-full overflow-hidden">
              <img
                src="https://ik.imagekit.io/lede6qmhu/Event/immmm.jpg?updatedAt=1723127224955"
                alt="Circle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* Right Side with Content */}
        <div className="w-1/2 h-screen flex flex-col items-center justify-center bg-white p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Your Event, Perfectly Organized
          </h1>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Whether you are planning a small gathering or a large conference, our event portal helps you find, plan, and book the perfect venue. Let us handle the details, so you can focus on making memories.
          </p>
          <ul className="list-disc list-inside mb-8 text-gray-600">
            <li className="mb-2">Find top-rated venues in your area</li>
            <li className="mb-2">Easily manage guest lists and RSVPs</li>
            <li className="mb-2">Access a variety of event planning tools</li>
          </ul>
          <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300">
            Start Planning Now
          </button>
        </div>
      </div>

      <footer className="w-full bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400 text-white py-4">
      <div className="container mx-auto flex flex-col items-center justify-between px-4">
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-6 w-6 hover:text-indigo-300 transition-colors duration-300" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-6 w-6 hover:text-indigo-300 transition-colors duration-300" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-6 w-6 hover:text-indigo-300 transition-colors duration-300" />
          </a>
        </div>
        <p className="mt-4 text-sm">&copy; 2024 BLOOM. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default Home;