import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs
      .send(
        "service_kqp5bx4", // Replace with your EmailJS Service ID
        "template_ko9zw7i", // Replace with your EmailJS Template ID
        formData,
        "GsEnbTH92-rc4Bs0s" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          toast.success("Thanks for contacting me ,Email sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send email. Try again later.");

        }
      );
  };

  return (
    <div className="contact-container">
      <h1 className="text-animate">Contact</h1>
      <form onSubmit={handleSubmit} className="contact-form">
      <p className="text-animate">You are contacting :  denilj6@gmail.com</p>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send Email</button>
      </form>
      <p className="text-animate">Phone:0400 868 220</p>
      <p className="text-animate"> Location: Melbourne,Victoria </p>
      <a href="https://www.linkedin.com/in/deniljohn-90a2bb13" target="_blank" rel="noopener noreferrer">
          Linkedin:DenilJohn
          </a>
          <ToastContainer />

    </div>
  );
};

export default ContactForm;
