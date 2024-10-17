import { useState } from 'react';
import { RiProfileLine } from "react-icons/ri";

const PatientsPage = () => {
  const [alertSent, setAlertSent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    age: '',
    address: '',
    gender: '',
    bloodGroup: '',
    language: '',
    familyNumbers: '',
  });

  const handleEmergencyAlert = () => {
    setAlertSent(true);
    console.log('Emergency alert sent!');
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Patient Information:', formData);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">SeniorCare</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/" className="text-gray-600 hover:text-blue-600">Home</a></li>
              <li><a href="#status" className="text-gray-600 hover:text-blue-600">Emergency Status</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
              {/* Patient Profile Link */}
              <li>
                <button onClick={handleModalToggle} className="flex items-center text-gray-600 hover:text-blue-600">
                  <RiProfileLine size={20} className="mr-1" />
                  Profile
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 relative">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Patient Dashboard</h2>
          <p className="text-lg text-gray-600 mb-8">Manage your emergency alerts and track nurse assistance in real-time.</p>
        </div>

        {/* Emergency Alert Button */}
        <div className="text-center mb-16">
          <button
            onClick={handleEmergencyAlert}
            className={`${
              alertSent ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
            } text-white font-semibold py-2 px-4 rounded-full transition`}
            disabled={alertSent}
          >
            {alertSent ? 'Alert Sent' : 'Send Emergency Alert'}
          </button>
          {alertSent && (
            <p className="mt-4 text-green-600 font-semibold">Your alert has been sent. The nearest nurse is on the way!</p>
          )}
        </div>

        {/* Emergency Status Section */}
        <section id="status" className="bg-white shadow-md rounded-lg p-4 mb-16">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Emergency Assistance Status</h3>
          <p className="text-gray-600">Track the live status of the nurses location and ETA. You will receive a notification once the nurse accepts the alert.</p>
          <div className="mt-6">
            <p className="text-blue-600 font-semibold">Nurse is currently 5 minutes away.</p>
          </div>
        </section>
      </section>

      {/* Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs">
            <h3 className="text-lg font-bold text-blue-600 mb-2">Profile</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="block text-xs text-gray-700">Age:</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-1 text-xs rounded"
                />
              </div>
              <div className="mb-2">
                <label className="block text-xs text-gray-700">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-1 text-xs rounded"
                />
              </div>
              <div className="mb-2">
                <label className="block text-xs text-gray-700">Gender:</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-1 text-xs rounded"
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="block text-xs text-gray-700">Blood Group:</label>
                <input
                  type="text"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-1 text-xs rounded"
                />
              </div>
              <div className="mb-2">
                <label className="block text-xs text-gray-700">Language:</label>
                <input
                  type="text"
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-1 text-xs rounded"
                />
              </div>
              <div className="mb-2">
                <label className="block text-xs text-gray-700">Family Contact Numbers:</label>
                <textarea
                  name="familyNumbers"
                  value={formData.familyNumbers}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-1 text-xs rounded"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={handleModalToggle}
                  className="text-xs text-gray-600 hover:text-gray-800"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 rounded"
                >
                  Save Information
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 SeniorCare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PatientsPage;
