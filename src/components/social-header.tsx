"use client";

import React from "react";
import { motion } from "motion/react";

const SocialHeader = ({ lang = "en" }) => {
  const text =
    lang === "ar"
      ? "تابعنا على مواقع التواصل الإجتماعي"
      : "Follow us on social media";

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.8, type: "spring" }}
      className="flex justify-center items-center"
    >
      <h1 className="text-center lead-2 text-wrap py-4 text-3xl font-extrabold  bg-gradient-to-r from-[#1195b3] via-[#d54d8b] to-[#1195b3] bg-clip-text text-transparent animate-gradient bg-[length:150%_150%] overflow-hidden">
        {text}
      </h1>
    </motion.div>
  );
};

export default SocialHeader;
