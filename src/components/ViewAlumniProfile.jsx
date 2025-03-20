import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Contact, Mail } from "lucide-react";
import { Badge } from "./ui/badge";

const skills = ["HTML", "CSS", "React", "Javascript", "NodeJs"];

function ViewAlumniProfile({ userId }) {
  const navigate = useNavigate();
  const isResume = true;

  const alumni = {
    _id: "alumni123", // Example ID
    name: "Alumni Student Name",
    email: "student@example.com",
    contact: "123-456-7890",
    company: "TechCorp",
    passingYear: "2025",
    department: "Computer",
    domain: "Software Development",
    jobLocation: "New York",
  };

  const handleMessageClick = () => {
    navigate(`/chat?chatWith=${alumni._id}`);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl shadow-sm mx-auto bg-white my-10 p-8">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-22 w-20">
              <AvatarImage src="/profile.png" alt="Profile" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl text-purple-950">
                {alumni.name}
              </h1>
              <h3 className="font-semibold">Job Role:</h3>
            </div>
          </div>
          <Button className="text-right" onClick={handleMessageClick}>
            Message
          </Button>
        </div>

        {/* Contact Section */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-3">
            <Mail />
            <span className="text-sm">{alumni.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Contact />
            <span className="text-sm">{alumni.contact}</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-5" />

        {/* Skills Section */}
        <div>
          <h1 className="text-lg font-semibold text-purple-950">Skills</h1>
          <div className="mt-3 flex flex-wrap gap-3">
            {skills.length !== 0 ? (
              skills.map((item, index) => (
                <Badge key={index} variant="outline">
                  {item}
                </Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          <h2 className="text-purple-950 font-semibold">
            Company Name: {alumni.company}
          </h2>
          <h2 className="text-purple-950 font-semibold">
            Passing Year: {alumni.passingYear}
          </h2>
          <h2 className="text-purple-950 font-semibold">
            Department: {alumni.department}
          </h2>
          <h2 className="text-purple-950 font-semibold">
            Domain: {alumni.domain}
          </h2>
          <h2 className="text-purple-950 font-semibold">
            Job Location: {alumni.jobLocation}
          </h2>
        </div>

        {/* Resume Section */}
        <div className="mt-5">
          <Label className="text-md font-semibold text-purple-950">
            Resume :
          </Label>
          {isResume ? (
            <a
              target="_blank"
              href="https://www.youtube.com/"
              className="text-blue-600 hover:underline pl-2"
            >
              Resume.pdf
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewAlumniProfile;
