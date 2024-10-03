"use client"

import Footer from "./Footer";
import Mobile from "../../app/Mobile"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Layout({ children }) {
  useEffect(() => {
    AOS.init({ duration: 500 });
    AOS.refresh();
  }, []);

  return (
    <html lang="en">
      <body>
        <Mobile />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default Layout;
