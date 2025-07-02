import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import { serviceType } from "../../constant/services";

export default function Services() {
  return (
    <>
      <section>
        <div className="mt-[7%] h-[10%] w-[80%] bg-gradient-to-br from-pink-300 via-purple-300 to-blue-400">
          <h1 className="ml-8 text-[60px] font-bold animated-ser">OUR SERVICES</h1>
        </div>

        <div className="mainserviceimg animated-imgs">
          <div className="grid grid-cols-3 box-border relative ">
            {serviceType.map((service,index) => (
              <div className="mt-10 mx-4  maincontainer" key={index}>
                <img src={service.img} alt="" />
                <div className="overlay"></div>
                <div className="undercontainer">
                  <p>{service.title}</p>
                  <Link to={service.url}>
                    <button>READ MORE</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
