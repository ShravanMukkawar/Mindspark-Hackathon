import { useState } from 'react';
// import { RiProfileLine } from 'react-icons/ri';

const NursePage = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, patientName: 'John Doe', distance: '3 km', status: 'Pending' },
    { id: 2, patientName: 'Jane Smith', distance: '2 km', status: 'Pending' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    gender: '',
    vehicleDetails: '',
    shiftTime: '',
    proofIdImage: '',
    qualification: '',
  });

  const handleAccept = (id) => {
    setAlerts(
      alerts.map(alert => 
        alert.id === id ? { ...alert, status: 'Accepted' } : alert
      )
    );
  };

  const handleReject = (id) => {
    setAlerts(
      alerts.map(alert => 
        alert.id === id ? { ...alert, status: 'Rejected' } : alert
      )
    );
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0].name : value, // Handling file upload for proofIdImage
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nurse Information:', formData);
    setIsModalOpen(false); // Close modal on submit
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">SeniorCare - Nurse Dashboard</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/" className="text-gray-600 hover:text-blue-600">Home</a></li>
              <li><a href="#alerts" className="text-gray-600 hover:text-blue-600">Emergency Alerts</a></li>
              <li><a href="#profile" className="text-gray-600 hover:text-blue-600" onClick={handleModalToggle}>Profile</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Nurse Dashboard</h2>
          <p className="text-lg text-gray-600 mb-8">Monitor patient alerts and manage your emergency response.</p>
        </div>

        {/* Alerts Section */}
        <section id="alerts" className="bg-white shadow-md rounded-lg p-6 mb-16">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Emergency Alerts</h3>
          <p className="text-gray-600 mb-6">These are the current emergency alerts. Please respond accordingly.</p>

          <div>
            {alerts.map(alert => (
              <div key={alert.id} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-sm flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Patient: {alert.patientName}</h4>
                  <p className="text-gray-600">Distance: {alert.distance}</p>
                  <p className={`font-semibold ${alert.status === 'Accepted' ? 'text-green-600' : alert.status === 'Rejected' ? 'text-red-600' : 'text-yellow-600'}`}>
                    Status: {alert.status}
                  </p>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleAccept(alert.id)}
                    disabled={alert.status !== 'Pending'}
                    className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 disabled:bg-green-400"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(alert.id)}
                    disabled={alert.status !== 'Pending'}
                    className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 disabled:bg-red-400"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Nurse Profile</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="block text-sm text-gray-700">Gender:</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-1 text-sm rounded"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="block text-sm text-gray-700">Vehicle Details:</label>
                <input
                  type="text"
                  name="vehicleDetails"
                  value={formData.vehicleDetails}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-1 text-sm rounded"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm text-gray-700">Shift Time:</label>
                <input
                  type="text"
                  name="shiftTime"
                  value={formData.shiftTime}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-1 text-sm rounded"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm text-gray-700">Proof ID (Upload Image):</label>
                <input
                  type="file"
                  name="proofIdImage"
                  accept="image/*"
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-1 text-sm rounded"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm text-gray-700">Qualification:</label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-1 text-sm rounded"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <button
                  type="button"
                  onClick={handleModalToggle}
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded"
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

export default NursePage;
