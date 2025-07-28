import React from "react";

type FooterProps = {
  lang: "en" | "ar";
};

const Footer = ({ lang }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <p className="text-black text-sm leading-[2]">
      &copy;&nbsp;
      {lang === "ar"
        ? "اوشن كير . جميع الحقوق محفوظة"
        : "Ocean Care . All Rights Reserved"}
      &nbsp;{currentYear}
    </p>
  );
};

export default Footer;
