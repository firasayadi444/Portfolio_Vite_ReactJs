import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { SiKubernetes } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { FaJenkins } from "react-icons/fa";
import { FaAws } from "react-icons/fa";





const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Angular",
    icon: FaAngular,
  },
  {
    skill: "Kubernetes",
    icon: SiKubernetes,
  },
  {
    skill: "Docker",
    icon: FaDocker,
  },
  {
    skill: "AWS",
    icon: FaAws,
  },
  {
    skill: "Jenkins",
    icon: FaJenkins,
  },
  {
    skill: "GitLab",
    icon: FaGitlab,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
