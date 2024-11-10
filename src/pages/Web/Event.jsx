import { useState } from 'react';
import SearchEvent from './SearchEvent';
import { Link } from 'react-router-dom';

const eventsList = [
  { id: 1, name: 'Music Concert', type: 'Concert', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkssojWi8Bz5N07mF_7bDgacKV8kSfGPybFA&s' },
  { id: 2, name: 'Art Exhibition', type: 'Exhibition', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_nSFVvQbtipxaO4YrJjfFouwCLutItd7WmQ&s' },
  { id: 3, name: 'Tech Conference', type: 'Conference', image: 'https://ik.imagekit.io/lede6qmhu/Event/conference.jpg?updatedAt=1721972740579' },
  { id: 4, name: 'Food Festival', type: 'Festival', image: 'https://ik.imagekit.io/lede6qmhu/Event/festival.jpg?updatedAt=1721974479112' },
  { id: 5, name: 'Marriage Events', type: 'Marriage Events', image: 'https://ik.imagekit.io/lede6qmhu/Event/marriage1.jpg?updatedAt=1721987964817' },
  { id: 6, name: 'Parties', type: 'Parties', image: 'https://ik.imagekit.io/lede6qmhu/Event/party.jpg?updatedAt=1721990729909' },
  { id: 7, name: 'Game Events', type: 'Game Events', image: 'https://ik.imagekit.io/lede6qmhu/Event/game.png?updatedAt=1721991468371' },
  { id: 8, name: 'Disco', type: 'Disco', image: 'https://ik.imagekit.io/lede6qmhu/Event/disco.jfif?updatedAt=1721991673179' },
  { id: 9, name: 'Workshop', type: 'Workshop',
     image: 'https://ik.imagekit.io/lede6qmhu/Event/workshop.jfif?updatedAt=1723107829553' },
     { id: 10, name: 'Product launch', type: 'Product launch',
      image: 'https://ik.imagekit.io/lede6qmhu/Event/prolaunch.jfif?updatedAt=1723114448144' },
     { id: 11, name: 'Carnivals', type: 'Carnivals',
      image: 'https://ik.imagekit.io/lede6qmhu/Event/carnivals.jfif?updatedAt=1723121600117' },
     { id: 12, name: 'Reunion', type: 'Reunion',
      image: 'https://ik.imagekit.io/lede6qmhu/Event/reunion.jpg?updatedAt=1723122002651' }

    ];

const Event = () => {
  const [search, setSearch] = useState('');

  const filteredEvents = eventsList.filter(event =>
    event.type.toLowerCase().includes(search.toLowerCase()) ||
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="event-app container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">CHOOSE EVENT TO BOOK</h1>
      <SearchEvent search={search} setSearch={setSearch} />
      
      <div className="event-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredEvents.map(event => (
          <div key={event.id} className="event-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:-translate-y-2">
            <div className="overflow-hidden">
              <img 
                src={event.image} 
                alt={event.name} 
                className="event-image w-full h-48 object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg text-black">{event.type}</h2> 
              <button className="book-now-button mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
                <Link to='/Book'>Book</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;
