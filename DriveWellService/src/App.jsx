import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Service/Services";
import Appointment from "./pages/Appointment/Appointment";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ContactUs from "./pages/ContactUs/ContactUs";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import ServicePage from "./pages/ServicePage/ServicePage";

function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/appointment"
            element={
              <ProtectedRoute>
                <Appointment />
              </ProtectedRoute>
            }
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route path="/service" element={<ServicePage />}></Route>
          <Route exact path="/contactus" element={<ContactUs />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
          className={"text-[14px] font-bold"}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
