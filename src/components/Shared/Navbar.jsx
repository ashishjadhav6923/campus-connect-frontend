import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar.jsx";
import { Button } from "../ui/button.jsx";
import { LogOutIcon, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const user = true;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white w-full sticky top-0 z-50 border-b">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-20 px-4 sm:px-6 lg:px-8">
        <div className="cursor-pointer">
          <Link to="/student/home">
            <h1 className="text-xl sm:text-2xl font-bold">
              Campus<span className="text-purple-900">Connect</span>🎓
            </h1>
          </Link>
        </div>
        <button
          className="md:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <div
          className={`md:flex items-center gap-6 ${
            menuOpen
              ? "flex flex-col absolute top-20 right-0 w-full bg-white p-4 border-b md:border-none md:w-auto md:flex-row md:relative md:bg-transparent md:p-0"
              : "hidden"
          } md:flex-row md:items-center`}
        >
          <ul className="flex flex-col md:flex-row font-medium items-end md:items-center gap-5">
            <li className="transition-all duration-200 transform hover:scale-110 hover:text-purple-700 hover:font-semibold">
              <Link to="/student/home">Home</Link>
            </li>
            <li className="transition-all duration-200 transform hover:scale-110 hover:text-purple-700 hover:font-semibold">
              <Link to="/student/connections">Connections</Link>
            </li>
            <li className="transition-all duration-200 transform hover:scale-110 hover:text-purple-700 hover:font-semibold">
              <Link to="/student/UpdateProfileDialog">Profile</Link>
            </li>
          </ul>
          <Popover>
            <PopoverTrigger>
              <Avatar className="cursor-pointer w-10 h-10 hover:scale-110 transition-all duration-200">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>VD</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="flex gap-4">
                <Avatar className="cursor-pointer w-12 h-12">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>VD</AvatarFallback>
                </Avatar>
                <div>
                  <h4>Viraj Dagade</h4>
                  <p className="text-sm text-muted-foreground">
                    Full Stack Developer
                  </p>
                </div>
              </div>
              <div className="flex pl-12 flex-col text-gray-600">
                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <Link to="/login">
                    <Button
                      className="hover:text-purple-900 hover:font-semibold transition-all"
                      variant="link"
                    >
                      Logout
                      <LogOutIcon className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
