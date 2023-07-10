import React from "react";
import backgroundImage from "../images/homeimage.jpg";



const HomeSection = () => {
    return (
      <section className="py-20" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center",height: "80vh",
      width: "100vw"  }}>
        <div className="container mx-auto">
          <div className="text-center">
            
            <h1 className="text-4xl font-bold mb-4 text-black">Welcome to FinEdge</h1>
            <p className="text-lg text-black">Revolutionizing cross-border payments for individuals and businesses.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default HomeSection;