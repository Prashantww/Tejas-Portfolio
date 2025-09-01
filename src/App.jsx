import React from "react";
import NavButton from "./components/NavButton";
import Button from "./components/Button";
import SectionTitle from "./components/SectionTitle";
import DropDownList from "./components/DropDownList";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";
import { AiOutlineYoutube } from "react-icons/ai";
import ProjectCard from "./components/ProjectCard";
import Awards from "./components/Awards";
import { useState } from "react";

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const experiences = [
    {
      imageUrl: "/images/Logos/HackUnited.png",
      title: "Hack United",
      subTitle: "Seasonal",
      date: "May 2023",
      discription:
        "501c3 developing soft skills for students interested in tech through hackathons.",
    },
    {
      imageUrl: "/images/Logos/RoboticBridge.png",
      title: "Robotic Bridge",
      subTitle: "Building",
      date: "May 2025",
      discription:
        "Helping small businesses install AI powered widgets, in minutes.",
    },
    {
      imageUrl: "/images/Logos/Book.png",
      title: "Published Book",
      subTitle: "Passive",
      date: "December 2023",
      discription: "The Paths of the 50 Most Influential Leaders of All Time.",
    },
    {
      imageUrl: "/images/Logos/CloneWriter.png",
      title: "Clone Writer",
      subTitle: "Archived",
      date: "March 2025",
      discription: "AI powered tool that writes like you.",
    },
    {
      imageUrl: "/images/Logos/FearedMedia.png",
      title: "Feared Media",
      subTitle: "Archived",
      date: "January 2021",
      discription:
        "Post Production Content Agency, helping creators and brands grow.",
    },
  ];

  const skillSets = [
    {
      title: "Main Stack",
      content:
        "Next.js & Tailwind (Frontend) | FastAPI (Backend) | Supabase (Database)",
    },
    {
      title: "Languages",
      content: "Python, C/C++, JavaScript, SQL, Typescript, HTML/CSS",
    },
    {
      title: "Libraries/Frameworks",
      content:
        "Pytorch, Scikit-Learn, Flask, FastAPI, OpenCV, NextJS, ReactJS, Supabase, Firebase, MongoDB",
    },
    {
      title: "Tools",
      content:
        "Git, VSCode, Figma, Docker, Azure, Adobe Photoshop, After Effects, Vercel, Premiere Pro",
    },
  ];

  const featuredProjects = [
    {
      imageUrl: "/images/Projects/HackUnited.png",
      title: "Hack United",
      discription:
        "501c3 developing soft skills for students interested in tech through hackathons.",
      github: "#",
      projectLink: "https://www.hackunited.org/",
    },
    {
      imageUrl: "/images/Projects/CloneWriter.png",
      title: "Clone Writer",
      discription:
        "501c3 developing soft skills for students interested in tech through hackathons.",
      github: "#",
      projectLink: "https://www.clonewriter.study",
    },
    {
      imageUrl: "/images/Projects/Knowtions.png",
      title: "Knowtions",
      discription: "PennApps 2024 Hackathon Project.",
      github: "#",
      projectLink: "https://www.youtube.com/watch?v=Fg4sgKxOpNo&ab",
    },
    {
      imageUrl: "/images/Projects/ListenLearn.png",
      title: "Listen Learn",
      discription: "OmiApps 2024 Hackathon Project.",
      github: "#",
      projectLink: "https://youtu.be/18Z7d7nFJB0?si=J_Zrvmz8by9HcHaY",
    },
    {
      imageUrl: "/images/Projects/PeaceCraft.png",
      title: "Peace Craft",
      discription: "scrapped ReactJS app",
      github: "#",
      projectLink: "#",
    },
    {
      imageUrl: "/images/Projects/SightSense.png",
      title: "Sight Sense",
      discription: "TreasureHacks 2023 Hackathon Project.",
      github: "#",
      projectLink: "https://www.youtube.com/watch?v=8oHfDr4EhWY&ab",
    },
  ];

  const awards = [
    {
      imageUrl: "/images/Logos/YCombinator.png",
      title: "Y Combinator AI Startup School",
      position: "Invitee",
      date: "June 2025",
    },
    {
      imageUrl: "/images/Logos/MLH.png",
      title: "MLH Top 50 Hacker of 2025",
      position: "Honoree",
      date: "September 2025",
    },
    {
      imageUrl: "/images/Logos/EmergentVentures.png",
      title: "Emergent Ventures Grant Awardee",
      position: "Awardee",
      date: "July 2024",
    },
  ];

  return (
    <>
      <nav className="flex justify-center mt-[35px] gap-[10px]">
        <NavButton href={"#AboutMe"}>About Me</NavButton>
        <NavButton href={"#SkillSet"}>Skills</NavButton>
        <NavButton href={"#featuredProjects"}>Projects</NavButton>
      </nav>
      {/* HERO SECTION*/}
      <header className="flex flex-col items-center">
        <div className="heading1 mt-[35px] w-[346px] sm:w-[430px] md:w-[549px] 2xl:w-[615px]">
          <h1>
            I'm <span>Tejas Chakrapani</span>
            <span className="hidden sm:inline">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <br />a fullstack <span>Developer</span>
            <br />
            exploring AI & startups.
          </h1>
          <img
            className="2xl:hidden"
            src="/images/ProfileWithArrow.png"
            alt=""
          />
          <img
            className="hidden 2xl:block"
            src="/images/ProfileWithArrow2XL_doubled.png"
            alt=""
          />
        </div>
        <p className="mt-[34px] w-[337px] sm:w-[381px] 2xl:w-[396px]">
          I'm Tejas (tcyt7), a developer from New Jersey into full stack, AI/ML,
          and SaaS. I love solving problems with tech, creating content, and
          lifting when I'm not coding
        </p>
        <Button targetId="featuredProjects">View My Work</Button>
      </header>
      <main className="flex flex-col items-center ">
        {/* EXPERIENCE SECTION*/}

        <section className="flex flex-col items-center">
          <SectionTitle>Experience</SectionTitle>
          <div className="mt-[36px] flex flex-col md:gap-[10px]">
            {experiences.map(
              ({ imageUrl, title, subTitle, date, discription }, index) => (
                <DropDownList
                  key={index}
                  src={imageUrl}
                  title={title}
                  subTitle={subTitle}
                  date={date}
                  discription={discription}
                  isOpen={openIndex === index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              )
            )}
          </div>
        </section>
        <div id="AboutMe" className="flex items-center">
          {/* ABOUT ME SECTION FOR SMARTPHONES*/}
          <section className="aboutMe flex flex-col items-center sm:hidden">
            <SectionTitle>About Me</SectionTitle>
            <p className="w-[308px] mt-[15px]">
              I'm Tejas, a developer who loves building products at the
              crossroads of AI, startups, and full-stack development. I enjoy
              turning ideas into real projects — from small experiments to full
              ventures. Beyond code, I'm curious about design, communities, and
              how technology shapes business.
            </p>
            <div className="flex mt-[20px] h-[104px]">
              <img className="h-[125px]" src="/images/ProfileBig.png" alt="" />
              <div className="mt-[30px] ml-[10px]">
                <h3>Socials</h3>
                <div className="flex gap-[28px] mt-[6px]">
                  <a
                    href="https://x.com/tejas7c"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter className="text-[17px] md:text-[20px] hover:text-blue-500 transition-colors" />
                  </a>
                  <a
                    href="https://www.instagram.com/tejas7c"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-[17px] md:text-[20px] hover:text-pink-500 transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tejas-chakrapani"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TbBrandLinkedin className="text-[17px] md:text-[20px] hover:text-blue-700 transition-colors" />
                  </a>
                  <a
                    href="https://www.youtube.com/@tejas-tech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineYoutube className="text-[19px] md:text-[22px] hover:text-red-600 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* ABOUT ME SECTION */}
          <section
            id="AboutMeBig"
            className="aboutMe flex-col items-center hidden sm:flex"
          >
            <SectionTitle>About Me</SectionTitle>
            <div className="flex mt-[27px]">
              {/* image for screens having < 768px width */}
              <img
                className="h-[125px] sm:h-[215px] md:hidden"
                src="/images/ProfileBig.png"
                alt=""
              />
              {/* image for screens having >= 768px width */}
              <img
                className=" hidden md:block 2xl:h-[283px]"
                src="/images/ProfileBigMD.png"
                alt=""
              />
              <div className="ml-[33px]">
                <p className="w-[308px] mt-[7px] w-[348px] md:w-[385px] 2xl:w-[411px]">
                  I'm Tejas, a developer who loves building products at the
                  crossroads of AI, startups, and full-stack development. I
                  enjoy turning ideas into real projects — from small
                  experiments to full ventures. Beyond code, I'm curious about
                  design, communities, and how technology shapes business.
                </p>
                <div className="mt-[27px]">
                  <h3>Socials</h3>
                  <div className="flex gap-[28px] mt-[6px]">
                    <a
                      href="https://x.com/tejas7c"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaXTwitter className="text-[17px] md:text-[20px] hover:text-blue-500 transition-colors" />
                    </a>
                    <a
                      href="https://www.instagram.com/tejas7c"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-[17px] md:text-[20px] hover:text-pink-500 transition-colors" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tejas-chakrapani"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TbBrandLinkedin className="text-[17px] md:text-[20px] hover:text-blue-700 transition-colors" />
                    </a>
                    <a
                      href="https://www.youtube.com/@tejas-tech"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineYoutube className="text-[19px] md:text-[22px] hover:text-red-600 transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* SKILLSET SECTION*/}
        <section id="SkillSet" className="skillSet flex flex-col items-center">
          <SectionTitle>Skillset</SectionTitle>
          <div
            className="grid grid-rows-[68px_68px_68px] grid-cols-[266px] 
                sm:grid-rows-[68px_68px] sm:grid-cols-[266px_266px] 
                md:grid-rows-[85px_85px] sm:grid-cols-[313px_313px]
                md:grid-rows-[85px_109px] 2xl:grid-cols-[336px_336px] 
                gap-y-[16px] gap-x-[34px] mt-[27px]"
          >
            {skillSets.map(({ title, content }, index) => (
              <div key={index}>
                <h3>{title}</h3>
                <p>{content}</p>
              </div>
            ))}
          </div>
        </section>
        {/* FEATURED PROJECTS SECTION*/}
        <section id="featuredProjects" className="flex flex-col items-center ">
          <SectionTitle>Featured Projects</SectionTitle>
          <div
            className={`grid grid-rows-${
              featuredProjects.length
            } sm:grid-rows-[${
              featuredProjects.length / 2
            }] sm:grid-cols-2  gap-[25px] mt-[27px]`}
          >
            {featuredProjects.map(
              ({ imageUrl, title, discription, github, projectLink }) => (
                <ProjectCard
                  key={title}
                  imageUrl={imageUrl}
                  title={title}
                  discription={discription}
                  github={github}
                  projectLink={projectLink}
                />
              )
            )}
          </div>
        </section>
        {/* AWARDS SECTION*/}
        <section className="flex flex-col items-center">
          <SectionTitle>Awards</SectionTitle>
          <div className="mt-[24px]">
            {awards.map(({ imageUrl, title, position, date }) => (
              <Awards
                imageUrl={imageUrl}
                title={title}
                position={position}
                date={date}
              />
            ))}
          </div>
        </section>
        {/*FOOTER*/}
        <footer className="w-[100vw] h-[182px] md:h-[250px] mt-[48px] pl-[36px] md:pl-[55px]">
          <h3 className="mt-[24px] md:mt-[44px]">Thanks for stopping by!</h3>
          <p className="w-[287px] mt-[10px] sm:w-[406px] md:w-[523px]">
            I'm always open to new opportunities, collaborations, or just a good
            chat. Feel free to connect with me on LinkedIn, Twitter, or GitHub.
          </p>
          <div className="flex gap-[28px] mt-[15px] md:mt-[30px]">
            <a
              href="https://x.com/tejas7c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="text-[17px] md:text-[20px] hover:text-blue-500 transition-colors" />
            </a>

            <a
              href="https://www.instagram.com/tejas7c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-[17px] md:text-[20px] hover:text-pink-500 transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/tejas-chakrapani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandLinkedin className="text-[17px] md:text-[20px] hover:text-blue-700 transition-colors" />
            </a>

            <a
              href="https://www.youtube.com/@tejas-tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineYoutube className="text-[19px] md:text-[22px] hover:text-red-600 transition-colors" />
            </a>
          </div>
        </footer>
      </main>
    </>
  );
};

export default App;
