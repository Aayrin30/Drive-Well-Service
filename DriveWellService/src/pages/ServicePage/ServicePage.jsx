import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ServicePage.css";
import { heading, paragraph } from "../../constant/aboutUs";

const ServicePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const serviceType = searchParams.get("serviceType");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const getTitle = () => {
      switch (serviceType) {
        case "carwashing":
          return setTitle("CAR WASHING");
        case "cardenting":
          return setTitle("CAR DENTING");
        case "carpainting":
          return setTitle("CAR PAINTING");
        case "enginediagnostics":
          return setTitle("ENGINE DIAGNOSTICS");
        case "oilnfilters":
          return setTitle("LUBE,OIL AND FILTERS");
        case "breakrepair":
          return setTitle("BREAK REPAIR AND WHEEL SERVICES");
        default:
          navigate("/service?serviceType=carwashing");
      }
    };
    getTitle();
  }, [serviceType, navigate]);
  return (
    <div>
      <div className="mt-[7%] h-[10%] w-[80%] bg-gradient-to-br from-pink-300 via-purple-300 to-blue-400">
        <h1 className="ml-8 text-[60px] font-bold animated-car">
          OUR SERVICES
        </h1>
      </div>
      <div className="flex">
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
            <div className="aspect-square w-full h-full  p-1 m-0">
              <img src="Image/image8.jpg" alt="abtimg" />
            </div>
            <div className="aspect-square w-full h-full  p-1 m-0">
              <img src="Image/image2.jpg" alt="abtimg" />
            </div>
            <div className="w-full h-auto pr-2 ">
              <img src="Image/image7.jpg" alt="abtimg" />
            </div>
          </div>
        </div>

        <div className="h-full w-[40%] p-4 ml-8">
          <div>
            <li className="text-[40px] list-none">{title}</li>
          </div>
          <div>
            <p className="text-[20px] font-semibold py-4 animated-p1">
              {heading}
            </p>
            <p className="text-[18px] animated-p2">{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicePage;
