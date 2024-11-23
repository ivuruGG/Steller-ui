import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name ? '' : 'Name is required.',
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? '' : 'Invalid email address.',
      message: formData.message ? '' : 'Message cannot be empty.',
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Simulate API call
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
      } catch (error) {
        console.error('Failed to submit form:', error);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Thank you for contacting us!</h2>
            <p>We will get back to you soon.</p>
          </div>
        ) : (
          <form
            className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.name && 'border-red-500'
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email && 'border-red-500'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.message && 'border-red-500'
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs italic">{errors.message}</p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
