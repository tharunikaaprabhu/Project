import { Search } from 'lucide-react';

// eslint-disable-next-line react/prop-types
const SearchEvent = ({ search, setSearch }) => {
  return (
    <div className="flex items-center mb-6">
            <Search className="w-6 h-6 text-white-600 mr-2" />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search events..."
        className="w-1/3 flex justify-center items-center bg-black p-2 border border-black-300 rounded"
      />
    </div>
  );
};

export default SearchEvent;
