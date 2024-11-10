import { useState } from 'react';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the feedback form data (e.g., send it to the backend or an API)
    console.log({ name, email, message, rating });
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
      <div className="bg-gray-800 shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Feedback Form</h2>
        {submitted ? (
          <div className="text-green-600 text-center">
            Thank you for your feedback!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Rating</label>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white"
              >
                {[1, 2, 3, 4, 5].map((rate) => (
                  <option key={rate} value={rate}>{rate}</option>
                ))}
              </select>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-600"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Feedback;
