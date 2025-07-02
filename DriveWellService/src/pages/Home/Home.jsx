import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { overviews, services, whyCard } from "../../constant/home";
export default function Home() {
  return (
    <>
      <section className="">
        <div className="mt-[15%] absolute w-full items-center">
          <center>
            {" "}
            <p className="text-big animated-text">
              Expert Technitians,Competitive Prices
            </p>
            <p className="text-small animated-text">
              We are commited to earning your trust by providing the expertise
              and value you expect
            </p>
            <div className="w-[240px]">
              <Link to="/about">
                <button
                  type="button"
                  className="btn hover:!bg-transparent hover:!border hover:border-white"
                  style={{ padding: "10px 60px" }}
                >
                  MORE
                </button>
              </Link>
            </div>
          </center>
        </div>
        <div className="firsthalf">
          <img src="Image/image1.jpg" alt="image1" />
        </div>
      </section>

      <section className="mt-[5%]">
        <div>
          <div className="text-center flex justify-center items-center gap-4">
            <h1 className="text-[30px] font-bold italic text-center tracking-wide">
              Make An Appointment{" "}
            </h1>
            <Link to="/appointment">
              <button
                type="button"
                className="btn"
                style={{ padding: "10px 30px" }}
              >
                Appointment
              </button>
            </Link>
          </div>
          <div className="why">
            <h6 className="heading1">WHY CHOOSE US?</h6>
            <p>
              We are one of the leading auto repair shops serving customers in
              Ahmedabad.
              <br />
              All mechanic services are performed by highly qualified mechanics
            </p>
          </div>
          <div className="w-full flex items-center justify-center mt-[5%] box-border">
            {whyCard.map((card, index) => (
              <div
                className="my-[10px] mx-auto cursor-pointer text-center hover:!border hover:!border-gray hover:shadow-[10px_10px_10px_0]"
                key={index}
              >
                <img
                  src={`Image/${card.img}`}
                  alt="img1"
                  className="block mx-auto w-[20%] h-auto mb-4"
                  style={{ width: index === 0 && "15%" }}
                />
                <h1 className="text-[30px] font-bold italic text-center">
                  {card.heading}
                </h1>
                <p className="text-[20px] text-center p-5">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="thirdsection">
        <div className="our">
          <h6 className="heading2">Our Services</h6>
          <p>
            We offer a full range of garage services to vehicle owners located
            in our area.
            <br />
            Our professinals know how to handle a wide range of car services.
          </p>
        </div>

        <div className="mainser">
          {services.map((service, index) => (
            <div className="container" key={index}>
              <img className="hover" src={`Image/${service.img}`} alt="" />
              <div className="overlay"></div>
              <div className="undercontainer">
                <p>{service.heading}</p>
                <Link to="/services">
                  <button href="/services">READ MORE</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="fourthsection">
        <div className="company">
          <h6 className="heading3">Company Overview</h6>
          <p>
            We can help you with everything from an oil change to an engine
            change.
            <br />
            We can handle any problem on both foreign and domestic vehicles.
          </p>
        </div>

        <div className="overviewmain">
          <div className="overviewconatainer">
            {overviews.map((overview,index) => (
              <div className="overview" key={index}>
                <h1>{overview.heading}</h1>
                <div className="overviewdetail">
                  <img src={`Image/${overview.img}`} alt="overview"></img>
                  <p>{overview.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
