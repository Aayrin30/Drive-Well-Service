import "./NewCompany.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useContext, useState } from "react";
import axios from "axios";
import { companyInputs } from "../../formSource";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DarkModeContext } from "../../context/darkModeContext";

const NewCompany = () => {
  const [info, setInfo] = useState({});
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext)


  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {

      await axios.post("/company", info);
        toast.success('Company is Added Successfully');
      setTimeout(() => {
        navigate("/company")
      }, 3000);

    } catch (err) { 
      console.log(err)
      toast.warn('Write Details Carefully');
     }
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Company</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {companyInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    contentEditable="true"
                    required={input.required}
                  />
                  <span>{input.errorMessage}</span>
                </div>
              ))}
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{backgroundColor:darkMode && 'black'}}
      />
    </div>
  );
};

export default NewCompany;