import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "src/assets/CV.pdf";
    link.target = "_blank";
    link.download = "KennethCV.pdf";
    link.click();
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-normal items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="text-[#915eff]">Karikari-Apau Kenneth</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop stunning web applications{" "}
            <br className="sm:block hidden" /> and mobile applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-40 bottom-60 w-full flex justify-center items-center">
        <button
          onClick={handleDownload}
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl flex"
        >
          <FaDownload />
          &nbsp;&nbsp;&nbsp;
          <span>Download CV</span>
        </button>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;