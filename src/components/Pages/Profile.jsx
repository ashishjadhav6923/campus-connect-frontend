import React, { useState } from "react";
import Navbar from "../Shared/Navbar";

import { Label } from "../ui/label";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "../ui/badge";
import UpdateProfileDialog from "../UpdateProfileDialog";
import { Button } from "../ui/button";

const skills = ["HTML", "CSS", "React", "Javascript", "NodeJs"];

function Profile() {
  const [open, setOpen] = useState(false);
  const isResume = true;
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl shadow-sm mx-auto bg-white   my-10 p-8">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="profile.png" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl text-purple-950">
                Student Name
                {/* {user.fullname} */}
              </h1>
              {/* <p>{user?.profile.bio}</p> */}
            </div>
          </div>
          <Button
            onClick={() => {
              setOpen(true);
            }}
            className="text-right h-8 w-8"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>

        {/* Contact Section */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-3">
            <Mail />
            {/* <span>{user.email}</span> */}
            <span className="text-sm">Student Email</span>
          </div>
          <div className="flex items-center gap-3">
            <Contact />
            <span className="text-sm">Student Contact</span>
            {/* <span>{user.phoneNumber}</span> */}
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
          <h2 className="text-purple-950 font-semibold">Passing Year: 2025</h2>
          <h2 className="text-purple-950 font-semibold">
            Department: Computer
          </h2>
          <h2 className="text-purple-950 font-semibold">Interested Domain:</h2>
          <h2 className="text-purple-950 font-semibold">
            Preferred Companies: TCS, Amazon, Tech Mahindra
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
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
}

export default Profile;
