import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Software Engineering Intern",
    company: "APAIA Technology",
    date: "Aug 2024 - Sep 2024",
    responsibilities: [
      "Developed an AI-powered image generation platform using Django and Angular.",
      "Integrated AI models (Stable Diffusion) to enhance image generation capabilities.",
      
    ],
  },
  {
    job: "Software Engineering Intern",
    company: "Araby Ads Africa",
    date: "Aug 2023 - Aug 2024",
    responsibilities: [
      "Developed and deployed scalable e-commerce platforms using .NET and React.js.",
     

      "Worked closely with a developer to complete the project in 1 month.",
    ],
  },
  {
    job: "Software Engineer (Student)",
    company: "TekUp University",
    date: "Sep 2022 - Present",
    responsibilities: [
      "Studying and implementing software solutions with a focus on web development and cloud computing.",
      "Hands-on experience with CI/CD pipelines using Jenkins, Docker, and Kubernetes.",
     
    ],
  },
];



const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
