import React from "react";
import githubIcon from "../../assets/navbar/github.svg";
import youtubeIcon from "../../assets/navbar/youtube.svg";
import LukaLogo from "../ui/luka-logo";
import Icon from "../Icon";

const Footer = () => {
  return (
    <footer className="md:w-[60%] xs:w-[80%] xs:pb-2 flex xs:flex-col md:flex-row xs:justify-center md:justify-between  items-center z-50">
      <div className="flex flex-col items-center xs:my-2 md:my-0">
        <LukaLogo />
        <p className="md:text-sm xs:text-xs text-gray md:my-1">
          © 2026 All rights reserved.
        </p>
      </div>
      <div className="flex items-center ">
        <Icon
          link="https://github.com/Luka12-dev"
          img={githubIcon}
          alt="Github Icon"
        />
        <Icon
          link="https://www.youtube.com/@LukaCyber-s4b7o"
          img={youtubeIcon}
          alt="Youtube Icon"
        />
      </div>
    </footer>
  );
};

export default Footer;
