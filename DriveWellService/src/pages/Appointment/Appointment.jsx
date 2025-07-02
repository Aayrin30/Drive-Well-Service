import React, { useContext, useEffect, useState } from "react";
import { ScheduleMeeting } from "react-schedule-meeting";
import { formatISO } from "date-fns";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { toastAction } from "../../utils/toastAction";
import { useNavigate } from "react-router-dom";
export default function Appointment() {
  const { user } = useContext(AuthContext);
  const [companies, setCompanies] = useState([]);
  const [models, setModels] = useState([]);
  const [services, setServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [formData, setFormData] = useState({
    companySelect: "",
    vehicleNumber: "",
    modelSelect: "",
    services: [],
    instruction: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    city: "",
    pinCode: "",
    appointmentDate: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await axios.get("/company");
        if (res.data) setCompanies(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchService = async () => {
      try {
        const res = await axios.get("/service");
        if (res.data) setServices(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCompany();
    fetchService();
  }, []);

  useEffect(() => {
    const fetchModel = async () => {
      try {
        const res = await axios.get(`/model/${formData.companySelect}`);
        if (res.data) setModels(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (formData.companySelect !== "") fetchModel();
  }, [formData.companySelect]);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        if (formData.modelSelect !== "" && formData.services.length !== 0) {
          const res = await axios.get(`/price/${formData.modelSelect}`, {
            params: {
              selectedServices: formData.services,
            },
          });
          if (res.status === 200) setTotalPrice(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchPrice();
  }, [formData.modelSelect, formData.services]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/appointment`, {
        ...formData,
        userId: user.id,
        totalPrice:totalPrice
      });
      if (res.status === 201) {
        toastAction.success(res.data.message);
        if (res.data) setFormData(res.data);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      toastAction.error(error.response.data.errors);
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedServices = [...formData.services];
      if (checked) {
        updatedServices.push(value);
      } else {
        const index = updatedServices.indexOf(value);
        if (index > -1) {
          updatedServices.splice(index, 1);
        }
      }
      setFormData((prevFormData) => ({
        ...prevFormData,
        services: updatedServices,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  const availableTimeslots = [0, 1, 2, 3, 4, 5]
    .map((id) => {
      const currentDate = new Date();
      const newDate = new Date(currentDate.setDate(currentDate.getDate() + id));

      if (newDate.getDay() !== 0) {
        return {
          id,
          startTime: new Date(newDate.setHours(9, 0, 0, 0)),
          endTime: new Date(newDate.setHours(17, 0, 0, 0)),
        };
      }
      return null;
    })
    .filter((timeslot) => timeslot !== null);
  const handleTimeslotClicked = (startTimeEventEmit) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      appointmentDate: formatISO(startTimeEventEmit.startTime),
    }));
  };

  return (
    <div className="w-[95%] bg-[#F5F5F5] p-20 m-20 mt-52 z-[-10] text-[18px] ">
      <h1 className="text-[30px] font-bold text-center">
        Car Service Booking Form
      </h1>
      <hr className="h-px my-8 bg-black border-2 " />

      <div className="flex gap-4">
        <div className="w-full">
          <form
            className="p-4 flex flex-col justify-center gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-[18px] font-bold ml-6">
                Select an Appointment Date
              </h2>
              <ScheduleMeeting
                borderRadius={10}
                primaryColor="#3f5b85"
                eventDurationInMinutes={50}
                onStartTimeSelect={handleTimeslotClicked}
                availableTimeslots={availableTimeslots}
              />
            </div>
            <div className="w-full flex gap-10 ">
              <div className="w-[50%] flex flex-col gap-3">
                <div className="flex flex-col gap-2 ml-6">
                  <label
                    htmlFor="vehicleNumber"
                    className="block text-[18px] font-bold "
                  >
                    Vehicle Number:
                  </label>
                  <input
                    type="text"
                    name="vehicleNumber"
                    value={formData.vehicleNumber}
                    onChange={handleChange}
                    className="text-[18px] w-[100%] bg-white rounded-md text-[gray] h-[30px] focus:border-[2px] focus:border-black pl-2 "
                  />
                </div>
                <div className="flex flex-col gap-2 ml-6">
                  <label
                    htmlFor="companySelect"
                    className="block text-[18px] font-bold "
                  >
                    Company:
                  </label>
                  <select
                    value={formData.companySelect}
                    onChange={handleChange}
                    name="companySelect"
                    className="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 bg-white"
                  >
                    <option value="">Select Company</option>
                    {companies.map((company, index) => (
                      <option key={index} value={company.id}>
                        {company.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2 ml-6">
                  <label
                    htmlFor="modelSelect"
                    className="block text-[18px] font-bold"
                  >
                    Select Model:
                  </label>
                  <select
                    name="modelSelect"
                    value={formData.model}
                    onChange={handleChange}
                    disabled={!formData.companySelect}
                    className="disabled:opacity-60 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white  disabled:cursor-not-allowed"
                  >
                    <option value="">Select Model</option>
                    {models.map((model, index) => (
                      <option key={index} value={model.id}>
                        {model.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="">
                <h2 className="text-[20px] font-bold mb-2">Type of Services</h2>
                {services.map((service, index) => (
                  <div key={index} className="flex gap-2 items-center mb-2">
                    <input
                      type="checkbox"
                      name="services"
                      className="h-[18px] w-[18px]"
                      value={service.id}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="services"
                      className="text-[18px] font-bold "
                    >
                      {service.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 w-full flex flex-col gap-3">
              <h2 className="text-[20px] font-bold mb-2">
                Any Special Instructions
              </h2>
              <textarea
                name="instruction"
                onChange={handleChange}
                value={formData.instruction}
                className="w-full rounded-[10px] p-4 resize-none normal-case"
                rows="6"
              />
            </div>
            <div className="">
              <h1 className="text-[30px] font-bold mb-4">
                Customer Information
              </h1>
              <hr className="h-px my-8 bg-black border-2 " />
              <div className="flex gap-3 mb-4">
                <div className="w-[50%] flex flex-col gap-2 ml-6">
                  <label
                    htmlFor="firstName"
                    className="block text-[18px] font-bold "
                  >
                    First Name:
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                    className="text-[18px] w-[100%] bg-white rounded-md text-[gray] h-[30px] focus:border-[2px] focus:border-black pl-2 "
                  />
                </div>
                <div className="w-[50%] flex flex-col gap-2 ml-6">
                  <label
                    htmlFor="lastName"
                    className="block text-[18px] font-bold "
                  >
                    Last Name:
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                    className="text-[18px] w-[100%] bg-white rounded-md text-[gray] h-[30px] focus:border-[2px] focus:border-black pl-2 "
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-[50%] flex flex-col gap-2 ml-6">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-[18px] font-bold "
                  >
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                    name="phoneNumber"
                  />
                </div>
                <div className="flex flex-col gap-2 ml-6 mb-4">
                  <label
                    htmlFor="address"
                    className="block text-[18px] font-bold "
                  >
                    Address:
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="text-[18px] w-[100%] bg-white rounded-md text-[gray] h-[30px] focus:border-[2px] focus:border-black pl-2 "
                  />
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <div className="w-[50%] flex flex-col gap-2 ml-6">
                  <label
                    htmlFor="city"
                    className="block text-[18px] font-bold "
                  >
                    City:
                  </label>
                  <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    value={formData.city}
                    className="text-[18px] w-[100%] bg-white rounded-md text-[gray] h-[30px] focus:border-[2px] focus:border-black pl-2 "
                  />
                </div>
                <div className="w-[50%] flex flex-col gap-2 ml-6">
                  <label
                    htmlFor="pincode"
                    className="block text-[18px] font-bold "
                  >
                    Pincode:
                  </label>
                  <input
                    type="text"
                    name="pinCode"
                    onChange={handleChange}
                    value={formData.pinCode}
                    className="text-[18px] w-[100%] bg-white rounded-md text-[gray] h-[30px] focus:border-[2px] focus:border-black pl-2 "
                  />
                </div>
              </div>
            </div>
            <hr className="h-px my-8 bg-black border-2 " />
            <div className="flex items-center gap-8">
              <button className="block mx-auto btn h-[50px] w-[180px]">
                Book Now
              </button>
              <span className="text-5xl">₹ {totalPrice}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
