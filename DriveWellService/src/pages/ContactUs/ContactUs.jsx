import React from "react";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <div className=" p-10 mx-auto mt-[10%] shadow-[10px 10px 20px 0] h-[460px] w-[60%] rounded-[20px]  boxcontact">
      <h2 className="text-[35px] capitalize mb-8 text-center">Contact Us</h2>

      <p className="text-gray-700 -mt-6 text-[20px] font-bold text-center">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col gap-4 text-[16px]">
        <input
          className="h-14 px-4 rounded-lg focus:outline-black focus:outline  transition-all"
          name="senderName"
          type="text"
          required
          maxLength={500}
          placeholder="Your Name"
        />
        <input
          className="h-14 px-4 rounded-lg focus:outline-black focus:outline  transition-all"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 rounded-lg focus:outline-black focus:outline p-4  transition-all resize-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button className="btn block mx-auto rounded-lg m">Submit </button>
      </form>
    </div>
  );
};

export default ContactUs;
