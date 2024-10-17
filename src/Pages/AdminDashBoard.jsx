
const AdminDashboard = () => {
  // Hardcoded data
  const data = {
    requestsToday: 120,
    patientsServed: 90,
    activeNurses: 15,
    feedback: [
      { id: 1, patientName: 'John Doe', comment: 'Great service!', date: '2024-10-15' },
      { id: 2, patientName: 'Jane Smith', comment: 'Very helpful staff.', date: '2024-10-14' },
      { id: 3, patientName: 'Alice Johnson', comment: 'Quick response time.', date: '2024-10-13' },
    ],
    activityLogs: [
      { id: 1, action: 'Nurse assigned to John Doe', date: '2024-10-15 10:00 AM' },
      { id: 2, action: 'Patient feedback received from Jane Smith', date: '2024-10-14 03:00 PM' },
      { id: 3, action: 'Emergency alert sent for Alice Johnson', date: '2024-10-14 02:00 PM' },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header Section */}
      <header className="bg-blue-600 text-white shadow-lg py-6 rounded-lg mb-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Admin Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Requests Today Card */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-blue-600">Requests Today</h2>
          <p className="text-6xl font-bold text-gray-800 mt-4">{data.requestsToday}</p>
        </div>

        {/* Patients Served Card */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-blue-600">Patients Served</h2>
          <p className="text-6xl font-bold text-gray-800 mt-4">{data.patientsServed}</p>
        </div>

        {/* Active Nurses Card */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-blue-600">Active Nurses</h2>
          <p className="text-6xl font-bold text-gray-800 mt-4">{data.activeNurses}</p>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Patient Feedback</h2>
        <div className="bg-white rounded-lg p-6 shadow-lg">
          {data.feedback.map((item) => (
            <div key={item.id} className="border-b last:border-b-0 py-4">
              <p className="font-bold text-lg">{item.patientName}</p>
              <p className="text-gray-600">{item.comment}</p>
              <p className="text-xs text-gray-400">{item.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Activity Log Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Activity Logs</h2>
        <div className="bg-white rounded-lg p-6 shadow-lg">
          {data.activityLogs.map((log) => (
            <div key={log.id} className="border-b last:border-b-0 py-4">
              <p className="font-bold text-lg">{log.action}</p>
              <p className="text-xs text-gray-400">{log.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 SeniorCare Admin Panel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AdminDashboard;
