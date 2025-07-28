"use client";

import { motion } from "motion/react";

import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <motion.div
      animate={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0.5, opacity: 0 }}
      transition={{ delay: 0.5, type: "spring" }}
      className=" w-30 md:w-40 lg:w-60 p-2 my-4 mx-auto overflow-hidden bg-[#fef5f5] rounded-full"
    >
      <Image
        src="/ocean-care-logo.jpg"
        alt="ocean care logo"
        width={400}
        height={200}
        quality={100}
        className={"w-full h-full  object-[center_-2px] rounded-full"}
      />
    </motion.div>
  );
}

export default Logo;
