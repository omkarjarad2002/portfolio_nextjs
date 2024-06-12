"use client";
import React, { useState } from "react";
import "./Contact.css";
import Arrow from "./Arrow";
import axios from "axios";
import swal from "sweetalert";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendDetails = async (e: any) => {
    e.preventDefault();
    try {
      const req = await axios.post(
        "https://portfolioserver-ts4z.onrender.com/contact",
        // "http://localhost:4000/contact",
        {
          formData,
        }
      );
      if (req.status == 201) {
        swal("Thank You!", "Your message was sent!", "success");
      }
      setFormData({
        name: "",
        email: "",
        phone: "",
        msg: "",
      });
    } catch (error) {
      console.log(error);
      swal("Unexpected Error Occured!", "error");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you can add your form submission logic, like sending an email or saving to a database
    console.log(formData);
  };

  return (
    <div className="con_box" id="contact">
      <h1 className=" skills_heading font-sans font-bold text-center text-3xl scroll-m-0.5">
        Reach Us
      </h1>
      <Arrow />
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="phone"
          name="phone"
          placeholder="your phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="msg"
          placeholder="your message"
          value={formData.msg}
          onChange={handleChange}
          required
        ></textarea>
        <button onClick={sendDetails} type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
