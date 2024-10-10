"use client";
import Portfolios from "@components/components/Homepage/Portfolios";
import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const [load, setLoad] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoad(true);
    emailjs
      .sendForm("service_wfyahg7", "template_dkd5dsa", form.current, {
        publicKey: "x7XATEPCLfNuaV98a"
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setLoad(false);
          toast.success("Email sent successfully");
          form.current.reset();
        },
        (error) => {
          toast.error("Email not sent, try again later");
          setLoad(false);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col w-[95%] lg:w-[90%] mx-auto pt-[40px] lg:pt-[250px]">
        <div className="font-[700] mt-[80px]  lg:mt-0 header-title">
          Connect <br />
          With Us
        </div>

        <form
          ref={form}
          onSubmit={sendEmail} // Use onSubmit instead of submit
          className="w-full mt-12 lg:mt-[7rem] lg:w-[60%] mx-auto "
        >
          <p className=" mt-5 lg:mt-8 w-full">
            <input name="name" placeholder="Name" type="text" />
          </p>

          <p className="mt-5 lg:mt-8 w-full">
            <input name="phone" placeholder="Phone Number" type="number" />
          </p>
          <p className="mt-5 lg:mt-8 w-full">
            <input name="email" placeholder="Work Email" type="email" />
          </p>

          <p className="mt-5 lg:mt-8 w-full custom-select">
            <select name="task" id="select" placeholder="select">
              <option className="font-medium" value="">
                Select
              </option>
              <option className="font-medium py-4" value="Start a Project">
                Start a Project
              </option>
              <option className="font-medium py-4" value="Schedule a Call">
                Schedule a Call
              </option>
            </select>
          </p>
          <p className="mt-5 lg:mt-8 w-full">
            <textarea name="message" placeholder="Message"></textarea>
          </p>
          <button
            type="submit"
            value="Send"
            className="mt-5 lg:mt-8 btn-outline"
          >
            {load ? "Loading..." : "Send Message"}
          </button>
        </form>
      </div>
      <div data-aos="fade-up" className="w-[95%] mt-[5rem] mx-auto lg:w-[90%]">
        <div className="lg:text-[60px] font-[vertigo] text-[32px] mb-[1rem]">
          Portfolio
        </div>
        <Portfolios wrap arrow />
      </div>
    </>
  );
}

export default ContactUs;
