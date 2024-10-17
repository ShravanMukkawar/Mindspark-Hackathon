import { useState } from 'react';
import backgroundImage from '../assets/background.jpg'; // Adjust the path to your image file

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Array to hold each digit of OTP

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && (value === '' || value.length <= 1)) {
      const newOtp = [...otp];
      newOtp[index] = value; // Set the input value for the specific box
      setOtp(newOtp);

      // Focus on the next input box automatically
      if (value !== '' && index < 5) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace to move to the previous input box
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('OTP:', otp.join('')); // Join the array to get the complete OTP
    // Add your OTP verification logic here
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

      {/* OTP verification form with slightly more transparency */}
      <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-xs">
        <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Verify OTP</h2>
        <form onSubmit={handleSubmit} className="flex justify-between mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-8 h-8 border border-gray-300 text-center text-lg rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              maxLength="1"
            />
          ))}
        </form>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-2 rounded w-full transition duration-150 ease-in-out"
        >
          Verify OTP
        </button>

        {/* Sign In and Sign Up links */}
        <div className="flex items-center justify-between mt-4">
          <a href="#" className="text-xs text-blue-600 hover:underline">
            Sign In
          </a>
          <a href="#" className="text-xs text-blue-600 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
