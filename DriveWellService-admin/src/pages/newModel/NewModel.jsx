import "./newModel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewModel = () => {
  const [info, setInfo] = useState({});
  const { data, loading } = useFetch("/company");
  const [companyId, setCompanyId] = useState(undefined);
  useEffect(() => {
    setCompanyId(data[0]?.id);
  }, [data]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/model/${companyId}`, info);
      toast.success("Model is Added Successfully");
      setTimeout(() => {
        navigate("/model");
      }, 3000);
    } catch (err) {
      console.log(err);
      toast.warn("Write Details Carefully");
    }
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Model</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter the Model Name"
                  onChange={handleChange}
                  contentEditable="true"
                  required
                />
                <span>Model Name is Required</span>
              </div>
              <div className="formInput">
                <label>Choose a Company</label>
                <select
                  style={{ padding: "10px", width: "200px", marginTop: "5px" }}
                  id="companyId"
                  onChange={(e) => setCompanyId(e.target.value)}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((company) => (
                        <option key={company.id} style={{}} value={company.id}>
                          {company.name}
                        </option>
                      ))}
                </select>
              </div>
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
      />
    </div>
  );
};

export default NewModel;
