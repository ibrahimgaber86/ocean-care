"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaTiktok,
  FaInstagram,
  FaSnapchat,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaMap,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Define the type for a social link
type SocialLink = {
  name: string;
  nameAr: string;
  href: string;
  icon: React.ElementType;
};

// Array of social links
const socialLinks: SocialLink[] = [
  {
    name: "TikTok",
    nameAr: "تيك توك",
    href: "https://www.tiktok.com/@ocean_care?_t=ZS-8yA9IJyPoVb&_r=1",
    icon: FaTiktok,
  },
  {
    name: "Instagram",
    nameAr: "انستغرام",
    href: "https://www.instagram.com/ocean_care_1",
    icon: FaInstagram,
  },
  {
    name: "Snapchat",
    nameAr: "سناب شات",
    href: "https://t.snapchat.com/erkhuvIR",
    icon: FaSnapchat,
  },
  {
    name: "Facebook",
    nameAr: "فيسبوك",
    href: "https://www.facebook.com/profile.php?id=100095198559218",
    icon: FaFacebookF,
  },
  {
    name: "Twitter",
    nameAr: "تويتر",
    href: "https://x.com/ocean_care1?s=11",
    icon: FaXTwitter,
  },
  {
    name: "LinkedIn",
    nameAr: "لينكد إن",
    href: "https://www.linkedin.com/company/ocean-care/",
    icon: FaLinkedinIn,
  },
  {
    name: "Whatsapp",
    nameAr: "واتساب",
    href: "https://api.whatsapp.com/send?phone=966543598140",
    icon: FaWhatsapp,
  },
  {
    name: "Branches",
    nameAr: "الفروع",
    href: "/branches",
    icon: FaMap,
  },
];

export function SocialLinks() {
  return (
    <div className="relative flex items-center justify-center h-full ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: "spring" }}
            >
              <Link href={link.href} target="_blank" className="w-full">
                <Button className="w-full group/parent cursor-pointer max-w-xs h-14 rounded-xl flex justify-between items-center px-6 text-lg font-medium bg-white/90 hover:bg-[#d54d8b] hover:text-white text-black backdrop-blur-sm shadow-md shadow-[#1195b3]/20 hover:shadow-[0_0_10px_#1195b3] transition-colors duration-300">
                  {link.nameAr}
                  <Icon
                    size={28}
                    className="group-hover/parent:text-white text-[#d54d8b] transition-colors duration-300"
                  />
                </Button>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
