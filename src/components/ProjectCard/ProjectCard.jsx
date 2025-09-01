import React from "react";
import styles from "../ProjectCard/ProjectCard.module.css";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ imageUrl, title, discription, github, projectLink }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={imageUrl} alt="" />
      <div className="flex items-center justify-between mt-[12px]">
        <h3>{title}</h3>
        <div className="flex gap-[12px]">
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <FiExternalLink className="text-[18px] 2xl:text-[21px]" />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-[18px] 2xl:text-[21px]" />
          </a>
        </div>
      </div>
      <p className="mt-[7px] 2xl:w-[313px] 2xl:mt-[0px]">{discription}</p>
    </div>
  );
};

export default ProjectCard;
