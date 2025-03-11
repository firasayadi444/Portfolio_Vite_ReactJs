import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/firas-ayadi2/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/firasayadi444" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/firas.ayadi2/?next=%2F" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
