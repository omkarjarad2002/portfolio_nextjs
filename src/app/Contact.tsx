import React, { useState } from "react";
import "./Contact.css";
import Arrow from "./Arrow";

const Contact = () => {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Here you can add your form submission logic, like sending an email or saving to a database
  //     console.log(formData);
  //   };

  return (
    // <form className="contact-form" onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     name="name"
    //     placeholder="Your Name"
    //     value={formData.name}
    //     onChange={handleChange}
    //     required
    //   />
    //   <input
    //     type="email"
    //     name="email"
    //     placeholder="Your Email"
    //     value={formData.email}
    //     onChange={handleChange}
    //     required
    //   />
    //   <textarea
    //     name="message"
    //     placeholder="Your Message"
    //     value={formData.message}
    //     onChange={handleChange}
    //     required
    //   ></textarea>
    //   <button type="submit">Send Message</button>
    // </form>
    <div className="con_box">
      <h1 className=" skills_heading font-sans font-bold text-center text-3xl scroll-m-0.5">
        React Us
      </h1>
      <Arrow />
      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
