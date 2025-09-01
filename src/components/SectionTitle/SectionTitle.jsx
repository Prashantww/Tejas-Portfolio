import React, { Children } from "react";
import styles from "../SectionTitle/SectionTitle.module.css";

const SectionTitle = ({ children }) => {
  return (
    <div className="flex items-center mt-[37px] justify-center">
      <div className={styles.leftLine}></div>
      <h2 className="mr-[15px] ml-[15px] md:mr-[20px] md:ml-[20px]">
        {children}
      </h2>
      <div className={styles.rightLine}></div>
    </div>
  );
};

export default SectionTitle;
