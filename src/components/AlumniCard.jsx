import React from "react";
import { Button } from "./ui/button.jsx";
import { Badge } from "./ui/badge.jsx";
import { useNavigate } from "react-router-dom";

function AlumniCard() {
  const alumniId = "VFBFNHNG";
  const navigate = useNavigate();

  return (
    <div className="relative p-5 shadow-md pl-3 rounded-md bg-white border border-gray-100 hover:scale-105 transition-all hover:shadow-md">
      {/* Profile Picture Section */}
      <div className="absolute top-8 right-3 w-20 h-20 overflow-hidden border-2 border-gray-300 shadow-sm">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Student Info */}
      <div className="flex items-center gap-2 my-2 flex-col sm:flex-row">
        <div>
          <h1 className="text-lg font-medium">Student Name</h1>
          <p className="text-sm text-gray-500">City</p>
        </div>
      </div>

      {/* Job Title and Description */}
      <div>
        <h1 className="font-bold text-lg my-2 text-purple-700 ">Job Title</h1>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </p>
      </div>

      {/* Badges */}
      <div className="flex  items-center gap-2 mt-4 flex-wrap">
        <Badge variant="ghost">Company Name</Badge>
        <Badge variant="ghost">Industry</Badge>
        <Badge variant="ghost">Experience</Badge>
      </div>

      {/* Connect Button */}
      <div className="flex justify-center w-full mt-4">
        <Button
          className="w-full "
          onClick={() => navigate(`/viewProfile/${alumniId}`)}
        >
          View Profile
        </Button>
      </div>
    </div>
  );
}

export default AlumniCard;
