import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "../DropDownList/DropDownList.module.css";

const DropDownList = ({
  src,
  title,
  subTitle,
  date,
  discription,
  isOpen,
  onClick,
}) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        duration: 0.4,
        ease: "power2.out",
        opacity: 1,
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.4,
        ease: "power2.out",
        opacity: 0,
      });
    }
  }, [isOpen]);

  return (
    <div className="cursor-pointer" onClick={onClick}>
      <div className="flex h-[51px] w-[313px] sm:w-[550px] md:w-[675px] 2xl:w-[750px] justify-between items-center">
        <div className="flex">
          <img className={`${styles.image}`} src={src} alt="" />
          <div className="ml-[10px]">
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subTitle}>{subTitle}</p>
          </div>
        </div>
        <h4 className={`${styles.date} self-start mt-[7px]`}>{date}</h4>
      </div>

      {/* Animated wrapper */}
      <div
        ref={contentRef}
        style={{ height: 0, overflow: "hidden", opacity: 0 }}
      >
        <p
          className={`${styles.discription} ml-[55px] md:ml-[60px] mt-[4px] w-[247px] sm:w-[375px] md:w-[443px]`}
        >
          {discription}
        </p>
      </div>
    </div>
  );
};

export default DropDownList;
