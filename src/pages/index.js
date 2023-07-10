import React from "react";
import Menu from "../components/Menu";

import HomeSection from "../components/Homesection";
import AboutSection from "../components/aboutus";
import Services from "../components/services";
import Contact from "../components/contactus";

function App() {
 
 return (
   
   <>
   
   <div>
      <a id="menu" />
      <Menu />
      <a id="home" />
      <HomeSection />
      
      <a id="about" />
      <AboutSection />
      
      <a id="services" />
      <Services />
      
      <a id="contact" />
      <Contact />
    </div>

   </>
 );
}
export default App;
