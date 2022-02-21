import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import React from "react";

const Layout = ({ children }) => {
   return (
      <>
         <Navbar />
         {children}
         <Footer />
      </>
   );
};

export { Layout };
