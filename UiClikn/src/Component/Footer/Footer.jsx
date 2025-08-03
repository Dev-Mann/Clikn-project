import React from "react";
import { useNavigate } from "react-router-dom";
import instagramIcon from "../../assets/instagramIcon.svg";
import linkedinIcon from "../../assets/linkedinIcon.svg";
function Footer() {
  const navigate = useNavigate();
  return (
    <footer
      className="footer  text-neutral-content items-center p-4 flex justify-between
    px-2 sm:px-10 md:px-16 lg:px-20 xl:px-36 
    shadow-xl
    dark:shadow-white
    bg-[#f5f3f1] dark:bg-slate-900"
    >
      <div className="w-full flex flex-col gap-3 ">
        <aside className="flex items-center justify-between w-full">
          <img
            src="/cliknLogo.png"
            className="h-10 w-20 sm:h-16 sm:w-32"
            alt="clikn Logo"
            role="button"
            onClick={() => {
              navigate("/home");
            }}
          />
          {}
        </aside>
        <p className="w-full text-center font-bold text-sm sm:text-lg md:text-xl dark:text-white">
          Copyright © {new Date().getFullYear()} - All rights reserved -
          <a
            href="/privacy-policy.html"
            className="text-blue-500 hover:text-blue-700 underline"
            target="_blank"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
