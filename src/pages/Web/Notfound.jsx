
const Notfound = () => {
  return (
    <div>
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="text-blue-500 underline">Go back to Home</a>
    </div>
    </div>
  )
}

export default Notfound