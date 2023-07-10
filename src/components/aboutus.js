import React from "react";
import aboutImage1 from "../images/money.png";
import aboutImage2 from "../images/payment-gateway.png";

const AboutSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-gray-600">
              FinEdge is a cutting-edge fintech startup dedicated to revolutionizing cross-border payments.
              Our mission is to enable seamless transactions for individuals and businesses, transcending geographical boundaries.
              With our innovative financial solutions, we aim to simplify the process of sending money across borders,
              streamline international business payments, and provide real-time payment tracking for greater transparency.
              At FinEdge, we are committed to delivering secure, reliable, and efficient financial services to our clients.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
          <div className="w-1/2 mx-4 rounded-full overflow-hidden">
              <img src={aboutImage1} alt="About FinEdge 1" className="w-full rounded-full mb-8" />
            </div>
            <div className="w-1/2 mx-4 rounded-full overflow-hidden">
              <img src={aboutImage2} alt="About FinEdge 2" className="w-full rounded-full mb-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;