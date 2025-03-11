import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="8" text="Websites" />
      </div>
      <p className="text-center">
      In my 3 years as a software engineering student,
       I have learned to build dynamic and user-friendly web applications, developed AI-powered solutions, 
      optimized systems for performance, and worked on scalable e-commerce platforms.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
