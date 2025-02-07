import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Header />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" element={<LoginUser />} />
      </Routes>
    </>
  );
}

export default App;
