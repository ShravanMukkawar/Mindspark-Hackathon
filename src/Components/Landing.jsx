import healthcareImage from '../assets/healthcare.jpg'; // Adjust the path as necessary

const LandingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      {/* Header Section */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">SeniorCare</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#home" className="text-gray-600 hover:text-blue-600">Home</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-blue-600">Services</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-blue-600">About</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center py-20 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${healthcareImage})` }}
      >
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Adjust opacity here */}
        <h2 className="text-4xl font-extrabold mb-4 relative">Help is Just a Click Away</h2>
        <p className="text-lg mb-8 relative">We connect senior citizens with the nearest nurses for emergency assistance.</p>
        <a href="#login" className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-blue-100 transition relative">
          Login
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-3xl font-bold mb-8 text-gray-700">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-blue-600 mb-4">Emergency Alerts</h4>
            <p className="text-gray-600">Quickly connect with the nearest nurse for emergencies, ensuring fast response times.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-blue-600 mb-4">Live Tracking</h4>
            <p className="text-gray-600">Track the live location of the nurse and get real-time updates until they arrive.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-blue-600 mb-4">24/7 Availability</h4>
            <p className="text-gray-600">Our network of nurses ensures you are covered round the clock, 7 days a week.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h5 className="text-lg font-semibold mb-4">Stay Connected</h5>
          <p>&copy; 2024 SeniorCare. All rights reserved.</p>
          <ul className="flex justify-center space-x-6 mt-4">
            <li><a href="#facebook" className="hover:text-blue-400">Facebook</a></li>
            <li><a href="#twitter" className="hover:text-blue-400">Twitter</a></li>
            <li><a href="#linkedin" className="hover:text-blue-400">LinkedIn</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
