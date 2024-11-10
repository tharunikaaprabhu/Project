
const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-center max-w-2xl mb-8">
        We value your feedback and are always here to assist you. If you have any questions, concerns, or suggestions, please dont hesitate to get in touch with us. Our dedicated team is ready to help and provide you with the information you need.
      </p>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Phone</h3>
          <p className="text-lg">+91 8009396321</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-lg">officialevent78@gmail.com</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Address</h3>
          <p className="text-lg">Chennai,India</p>
        </div>
        <p className="text-lg text-center">
          Feel free to reach out to us through any of the provided contact methods. We strive to respond promptly and ensure your inquiries are addressed effectively.
        </p>
      </div>
    </div>
  );
};

export default Contact;
