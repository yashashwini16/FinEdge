import React from "react";
import ServiceSection from "./servicesection";

const Services = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceSection
            title="Individual Money Transfers"
            description="Easily send money across borders with our secure and efficient individual money transfer service."
            icon="individual.jpg"
          />
          <ServiceSection
            title="Business Payments"
            description="Streamline your international business payments with our seamless and cost-effective solutions."
            icon="community.png"
          />
          <ServiceSection
            title="Real-time Payment Tracking"
            description="Track your payments in real-time and gain transparency and visibility into your cross-border transactions."
            icon="realtime.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
