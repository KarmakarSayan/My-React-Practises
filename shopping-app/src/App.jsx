// import "./App.css"
import AdminLogin from "./components/AdminLogin";
import LandingPage from "./components/LandingPase"; // fix the typo: "LandingPase" → "LandingPage"
import UserLogin from './components/UserLogin';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";


function App() {
  return (   
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/user-login" element={<UserLogin />} />
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App; 
