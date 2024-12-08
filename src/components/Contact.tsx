import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { firstName, lastName, organization, email, phone } = formData;
    if (!firstName || !lastName || !organization || !email || !phone) {
      setError("All fields are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address.");
      return false;
    }
    if (phone.length !== 11) {
      setError("Phone number must be 11 digits.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    // Display toast notification
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);

    // Reset form data
    setFormData({
      firstName: "",
      lastName: "",
      organization: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="min-h-screen flex md:flex-row flex-col items-center justify-center p-4">
      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg p-6 bg-white rounded-xl shadow"
      >
        <div className="bg-[#C6EDA6] p-6 rounded-lg mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Chat with me.</h1>
          <p className="text-sm font-light text-gray-600 mt-2">
            Need help with something? Want a demo? Get in touch with me, please
            enter your personal information and contacts.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* First Name and Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="p-3 bg-[#f5fff4] rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8e0a0]"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="p-3 bg-[#f5fff4] rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8e0a0]"
            />
          </div>

          {/* Organization */}
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleInputChange}
            placeholder="Organization"
            className="p-3 bg-[#f5fff4] rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8e0a0]"
          />

          {/* Phone Number */}
          <div className="flex items-center p-3 bg-[#f5fff4] rounded-lg border border-gray-300">
            <span className="text-2xl pr-2">🇵🇭</span>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              onBlur={() => {
                if (formData.phone.length !== 11) {
                  setError("Phone number must be 11 digits.");
                } else {
                  setError("");
                }
              }}
              placeholder="+63 912 345 6789"
              className="flex-1 bg-transparent focus:outline-none"
            />
          </div>

          {/* Email Address */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            className="p-3 bg-[#f5fff4] rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8e0a0]"
          />
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#6bbf59] text-white font-bold py-3 rounded-lg shadow hover:bg-[#5aa14b] transition duration-200"
          >
            Send
          </button>
        </form>
      </motion.div>

      {/* Image Section */}
      <div className="md:w-1/2 md:p-10 md:flex hidden">
        <Image src="/img/contact.png" width={500} height={500} alt="box" />
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Email has been sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
