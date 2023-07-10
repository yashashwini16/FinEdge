import React from "react";

const ContactUsPage = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-8">We'd love to hear from you! Reach out to us using the form below.</p>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-600 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
