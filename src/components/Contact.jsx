import React, { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required.";
        if (value.length < 2) return "Name must be at least 2 characters.";
        return "";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) return "Email is required.";
        if (!emailRegex.test(value)) return "Enter a valid email address.";
        return "";
      case "message":
        if (!value.trim()) return "Message is required.";
        if (value.length < 10) return "Message must be at least 10 characters.";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const isFormValid = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validate(key, value);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
        setStatus("");
      } else {
        toast.error(data.message || "Failed to send message.");
        setStatus("");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Server error. Try again later.");
      setStatus("");
    }
  };

  return (
    <div className="bg-gray-200 dark:bg-black text-gray-900 dark:text-white py-20 pt-24" id="contact">
      <ToastContainer position="top-right" autoClose={4000} />
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              I'm open to discussing web development projects or partnership opportunities.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a href="mailto:davidmagige1998@gmail.com" className="hover:underline text-gray-700 dark:text-gray-300">
                davidmagige1998@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <a href="tel:+254746771924" className="hover:underline text-gray-700 dark:text-gray-300">
                +254746771924
              </a>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">Waiyaki-Way, Nairobi, Kenya</span>
            </div>
          </div>

          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-2 rounded bg-white dark:bg-gray-800 border ${
                    errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  } focus:outline-none focus:border-[#601eef] dark:focus:border-[#601eef] text-gray-900 dark:text-white`}
                  placeholder="Enter Your Name"
                  required
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 rounded bg-white dark:bg-gray-800 border ${
                    errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  } focus:outline-none focus:border-[#601eef] dark:focus:border-[#601eef] text-gray-900 dark:text-white`}
                  placeholder="Enter Your Email"
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-2 rounded bg-white dark:bg-gray-800 border ${
                    errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  } focus:outline-none focus:border-[#601eef] dark:focus:border-[#601eef] text-gray-900 dark:text-white`}
                  rows="5"
                  placeholder="Enter Your Message"
                  required
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="button text-white px-8 py-2 rounded-full transition duration-300"
                disabled={
                  !formData.name || !formData.email || !formData.message || Object.values(errors).some(Boolean)
                }
              >
                Send
              </button>
              {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;