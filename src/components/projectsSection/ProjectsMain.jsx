import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "AI Image Generation Platform",
    year: "Aug 2024",
    align: "right",
    image: "../../public/images/ai-image-gen.jpg",
    link: "#",
  },
  {
    name: "Scalable E-Commerce System",
    year: "Aug 2023",
    align: "left",
    image: "../../public/images/c.jpg",
    link: "#",
  },
  {
    name: "CI/CD Pipeline Automation",
    year: "Sep 2023",
    align: "right",
    image: "../../public/images/cicd-pipeline.png",
    link: "#",
  },
  {
    name: "Employee Management System",
    year: "Dec 2022",
    align: "left",
    image: "../../public/images/employee-management.png",
    link: "#",
  },
];


const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
