import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I’m Firas, a software engineering student with a strong passion for web development, cloud computing, and DevOps.  
I specialize in building scalable web applications using Django, Angular, and modern cloud technologies like Docker, Jenkins, and Kubernetes.  
Currently, I’m seeking a final-year internship to apply my skills and gain hands-on experience in the industry.  
Beyond coding, I’m always eager to learn new technologies and explore AI integration in software development.  
My goal is to contribute to innovative projects and help shape the future of tech.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
