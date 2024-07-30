"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full flex flex-col justify-between"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex-grow flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>

        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left">
            Ganpati Nath, Emerging Tech Innovator and Skilled Problem Solver...
          </h1>
          {/* DESC */}
          <p className="text-base sm:text-lg md:text-xl text-center px-4 sm:px-8 lg:px-0">
            A Passionate and Hard-working Software Developer, like to work with a team as well as solve tricky and complex coding problems with efficiency, thrives in tackling complex coding challenges, applying strong analytical and critical thinking skills to find efficient solutions.
          </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4 justify-center lg:justify-start">
            <a href="https://drive.google.com/uc?export=download&id=1Y3x55stCZcGnnRADe7-WdPWDnusC9XWD">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                My Resume
              </button>
            </a>
            <button onClick={() => window.location.href = '/contact'} className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <footer className="hidden lg:block bg-black text-white py-4 text-center">
        <p>Copyright © 2024 Portfolio | Ganpati Nath | NATH.dev | All Rights Reserved.</p>
      </footer>
    </motion.div>
  );
};

export default Homepage;
