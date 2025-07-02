import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { heading, paragraph } from "../../constant/aboutUs";

export default function About() {
  return (
    <>
      <section >
        <div className="mt-[7%] h-[10%] w-[80%] bg-gradient-to-br from-pink-300 via-purple-300 to-blue-400">
          <h1 className="ml-8 text-[60px] font-bold animated-ab">ABOUT US</h1>
        </div>
        <div className="flex">
          <div className=" h-full w-[40%] p-4 ">
            <div>
              <p className="text-[20px] font-semibold py-4 animated-p1">
                {heading}
              </p>
              <p className="text-[18px] animated-p2">{paragraph}</p>
            </div>

            <div>
              <ul className="m-2 p-2">
                <li className="li1 list-disc">
                  We make auto repair and maintenance more convenient for you.
                </li>
                <li className="li1 list-disc">
                  We are a friendly, helpful and professional group of people.
                </li>
                <li className="li1 list-disc">
                  Our professionals know how to handle a wide range of car
                  services.
                </li>
                <li className="li1 list-disc">
                  We get the job done right — the first time.
                </li>
                <li className="li1 list-disc">
                  Same day service for most repairs and maintenance.
                </li>
              </ul>
            </div>
            <div className="btn">
              <Link to="/services">
                <button type="button">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[50%] flex flex-col mt-10 items-center">
            <div className="grid grid-cols-3 gap-4 w-full">
              <div className="aspect-square w-full h-full  p-1 m-0">
                <img src="Image/image11.jpg" alt="abtimg" />
              </div>
              <div className="aspect-square w-full h-full  p-1 m-0">
                <img src="Image/image14.jpg" alt="abtimg" />
              </div>
              <div className="aspect-square w-full h-full  p-1 m-0">
                <img src="Image/image12.jpg" alt="abtimg" />
              </div>
              <div className="w-full h-auto pr-2 ">
                <img src="Image/image7.jpg" alt="abtimg" />
              </div>
              <div className="aspect-square w-full h-full  p-1 m-0">
                <img src="Image/image8.jpg" alt="abtimg" />
              </div>
              <div className="aspect-square w-full h-full  p-1 m-0">
                <img src="Image/image2.jpg" alt="abtimg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
