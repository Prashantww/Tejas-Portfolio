import React from "react";
import styles from "../Button/Button.module.css";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollToPlugin, useGSAP);

const Button = ({ children, targetId }) => {
  const { contextSafe } = useGSAP();

  const handleClick = contextSafe(() => {
    const element = document.getElementById(targetId);
    if (!element) return;

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: element, offsetY: 16 },
      ease: "power2.out",
    });
  });

  return (
    <div className={styles.glass}>
      <button className={styles.button} onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
