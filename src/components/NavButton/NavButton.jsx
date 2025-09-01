import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import styles from "../NavButton/NavButton.module.css";

gsap.registerPlugin(ScrollToPlugin);

const NavButton = ({ children, href }) => {
  const handleClick = (e) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: href, offsetY: 0 },
        ease: "power2.out",
      });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={styles.navButton}>
      {children}
    </a>
  );
};

export default NavButton;
