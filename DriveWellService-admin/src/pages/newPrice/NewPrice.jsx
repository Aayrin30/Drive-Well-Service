import "./newPrice.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFetch from "../../hooks/useFetch";

const NewPrice = () => {
  const [info, setInfo] = useState({});
  const { data: modelData, loading: modelLoading } = useFetch("/model");
  const { data: serviceData, loading: serviceLoading } = useFetch("/service");
  useEffect(() => {
    setInfo((prev) => ({
      ...prev,
      modelId: modelData[0]?.id,
      serviceId: serviceData[0]?.id,
    }));
  }, [modelData, serviceData]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/price`, info);
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/price");
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
          <h1>Add New Price</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Amount</label>
                <input
                  id="price"
                  type="text"
                  placeholder="Enter the Price Amount"
                  onChange={handleChange}
                  contentEditable="true"
                  required
                />
                <span>Price Amount is Required</span>
              </div>
              <div className="formInput">
                <label>Choose a Company</label>
                <select
                  style={{ padding: "10px", width: "200px", marginTop: "5px" }}
                  id="modelId"
                  onChange={handleChange}
                >
                  {modelLoading
                    ? "loading"
                    : modelData &&
                      modelData.map((model) => (
                        <option key={model.id} value={model.id}>
                          {model.name}
                        </option>
                      ))}
                </select>
              </div>
              <div className="formInput">
                <label>Choose a Company</label>
                <select
                  style={{ padding: "10px", width: "280px", marginTop: "5px" }}
                  id="serviceId"
                  onChange={handleChange}
                >
                  {serviceLoading
                    ? "loading"
                    : serviceData &&
                      serviceData.map((service) => (
                        <option key={service.id} style={{}} value={service.id}>
                          {service.name}
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

export default NewPrice;
