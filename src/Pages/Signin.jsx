import { useState } from 'react';
import backgroundImage from '../assets/background.jpg'; // Adjust the path to your image file

const SignInPage = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
    role: '', // Added role field
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In Data:', formData);
    // Add your sign-in logic here
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.4, // Lower opacity of the background
        }}
      ></div>

      {/* Sign-in form with slightly more transparency */}
      <div className="relative z-10 bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-full max-w-xs">
        <h2 className="text-xl font-bold text-blue-600 mb-4 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-xs text-gray-700">Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-1 text-xs rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-xs text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-1 text-xs rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-xs text-gray-700">Role:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-1 text-xs rounded"
            >
              <option value="">Select Role</option>
              <option value="nurse">Nurse</option>
              <option value="patient">Patient</option>
            </select>
          </div>

          {/* Forgot Password */}
          <div className="mb-2 text-right">
            <a href="#" className="text-xs text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white text-xs py-1 px-3 rounded w-full mt-4"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up link */}
        <div className="mt-4 text-center">
          <a href="#" className="text-xs text-blue-600 hover:underline">
            Dont have an account? Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
