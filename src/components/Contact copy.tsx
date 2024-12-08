import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    phone: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { firstName, lastName, organization, email, phone } = formData;
    if (!firstName || !lastName || !organization || !email || !phone) {
      setError('All fields are required.');
      return false;
    }
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email address.');
      return false;
    }
    return true;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!validateForm()) return;

    emailjs
      .send(
        'your_service_id', // Replace with your Email.js Service ID
        'your_template_id', // Replace with your Email.js Template ID
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          organization: formData.organization,
          email: formData.email,
          phone: formData.phone,
        },
        'your_user_id' // Replace with your Email.js User ID
      )
      .then(
        () => {
          setSuccessMessage('Message sent successfully!');
          setFormData({
            firstName: '',
            lastName: '',
            organization: '',
            email: '',
            phone: '',
          });
        },
        (error) => {
          setError('Failed to send message. Please try again later.');
          console.error('Email.js error:', error);
        }
      );
  };

  return (
    <div className="min-h-screen flex md:flex-row flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg p-6 bg-white rounded-xl shadow"
      >
        <div className="bg-[#C6EDA6] p-6 rounded-lg mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Chat with me.</h1>
          <p className="text-sm text-gray-600 mt-2">
            Need help with something? Want a demo? Get in touch with me, please enter your personal information and contacts.
          </p>
        </div>

        <form onSubmit={sendEmail} className="space-y-4">
          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Success Message */}
          {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}

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

          {/* Email Address */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
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
                  setError('Phone number must be 11 digits.');
                } else {
                  setError('');
                }
              }}
              placeholder="+63 912 345 6789"
              className="flex-1 bg-transparent focus:outline-none"
            />
          </div>

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
      <div className="md:w-1/2 md:p-20">
        <Image src="/img/contact.png" width={500} height={500} alt="box" />
      </div>
    </div>
  );
};

export default Contact;
