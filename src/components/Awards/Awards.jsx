import React from "react";
import styles from "../Awards/Awards.module.css";

const Awards = ({ imageUrl, title, position, date }) => {
  return (
    <div className="flex items-center mb-[10px]  sm:w-[570px] md:w-[675px] 2xl:w-[750px] justify-between">
      <div className="flex items-center">
        <img className={styles.awardLogo} src={imageUrl} alt="" />
        <div className="ml-[10px]">
          <h3>{title}</h3>
          <p className={styles.position}>{position}</p>
        </div>
      </div>
      <p className={`${styles.position} self-start mt-[13px] hidden sm:block`}>
        {date}
      </p>
    </div>
  );
};

export default Awards;
