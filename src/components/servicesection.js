import React from "react";

const ServiceSection = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={require(`../images/${icon}`).default} alt={title} className="w-16 h-16 mb-4 mx-auto" />
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ServiceSection;