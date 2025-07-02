import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Single = () => {
  const [user, setUser] = useState({})
  const [appointment, setAppointment] = useState([])
  const params = useParams();
  useEffect(()=>{
    const getUser = async ()=>{
      try {
        const res = await axios.get(`/user/${params.userId}`);
        if(res.status===200) setUser(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    const getAppointment = async ()=>{
      try {
        const res = await axios.get(`/appointment/${params.userId}`);
        if(res.status===200) setAppointment(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getUser();
    getAppointment();
  },[params])

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{user.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Appointments</h1>
          <List appointment={appointment}/>
        </div>
      </div>
    </div>
  );
};

export default Single;
