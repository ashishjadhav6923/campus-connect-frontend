import { Github, Instagram, Linkedin } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="py-4 bg-white shadow-inner">
      <div className="container mx-auto flex flex-col items-center gap-3">
        <h2 className="text-purple-950 mt-">
          ©️ 2025 –CampusConnect 🎓 All Rights Reserved.
        </h2>
        <div className="flex gap-3">
          <Github className="h-5 w-5 hover:text-gray-600 cursor-pointer" />
          <Linkedin className="h-5 w-5 hover:text-blue-500 cursor-pointer" />
          <Instagram className="h-5 w-5 hover:text-pink-500 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
