// import LandingPage from "./Components/Landing"
import PatientsPage from "./Pages/Patient"
// import NursePage from "./Pages/Nurse"
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SignInPage from './Pages/Signin';
// import SignUpPage from './Pages/Signup';
// import VerifyOtpPage from './Pages/Verigyotp';
// import AdminDashboard from './Pages/AdminDashBoard';

function App() {
  
  // return <LandingPage />
  return <PatientsPage />
  // return <NursePage />
  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/signin" element={<SignInPage />} />
  //       <Route path="/signup" element={<SignUpPage />} />
  //       <Route path="/verify" element={<VerifyOtpPage />} />
  //       <Route path="/admin" element={<AdminDashboard />} />
  //     </Routes>
  //   </Router>
  // );
}

export default App;
