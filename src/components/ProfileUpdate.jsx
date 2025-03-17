import { useState } from "react";
import Navbar from "./Shared/Navbar.jsx";
import { Label } from "./ui/label.jsx";
import { Input } from "./ui/input.jsx";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group.jsx";
import { Button } from "./ui/button.jsx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

function ProfileUpdate() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    branch: "",
    year: "",
    domain: "",
    role: "",
    file: "",
  });
  const loading = false;
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandeler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    navigate("/student/home");
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[#FBFBFB] px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-white border shadow-sm p-6 rounded-lg">
          <div className="text-left">
            <h1 className="font-bold text-xl mb-1">
              Complete Your <span className="text-purple-950">Profile</span> for
              a Better Experience !
            </h1>
            <p className="text-sm mt-2  text-gray-500">
              Please fill out this form to update your profile and ensure your
              information is accurate.
            </p>
          </div>
          <form onSubmit={submitHandler} className="space-y-4 mt-4">
            <div>
              <Label>Full Name</Label>
              <Input
                type="text"
                name="fullname"
                value={input.fullname}
                onChange={changeEventHandler}
                placeholder="Enter Full Name"
                className="w-full"
                required
              />
            </div>
            <div>
              <Label>Phone Number</Label>
              <Input
                type="text"
                placeholder="Enter Valid Number"
                name="phoneNumber"
                value={input.phoneNumber}
                onChange={changeEventHandler}
                className="w-full"
                pattern="[0-9]{10}"
                title="Phone number must be 10 digits"
                required
              />
            </div>
            <div>
              <Label>Pursuing Year</Label>
              <Select
                onValueChange={(value) => setInput({ ...input, year: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fe">FE</SelectItem>
                  <SelectItem value="se">SE</SelectItem>
                  <SelectItem value="te">TE</SelectItem>
                  <SelectItem value="be">BE</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Branch</Label>
              <Select
                onValueChange={(value) => setInput({ ...input, branch: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="computer">Computer Engineering</SelectItem>
                  <SelectItem value="it">Information Technology</SelectItem>
                  <SelectItem value="electrical">
                    Electrical Engineering
                  </SelectItem>
                  <SelectItem value="mechanical">
                    Mechanical Engineering
                  </SelectItem>
                  <SelectItem value="civil">Civil Engineering</SelectItem>
                  <SelectItem value="electronics">
                    Electronics and Telecommunication Engineering
                  </SelectItem>
                  <SelectItem value="aerospace">
                    Aerospace Engineering
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Domain</Label>
              <Select
                onValueChange={(value) => setInput({ ...input, domain: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Domain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ai">Artificial Intelligence</SelectItem>
                  <SelectItem value="ml">Machine Learning</SelectItem>
                  <SelectItem value="web">Web Development</SelectItem>
                  <SelectItem value="data">Data Science</SelectItem>
                  <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                  <SelectItem value="iot">Internet of Things</SelectItem>
                  <SelectItem value="blockchain">
                    Blockchain Technology
                  </SelectItem>
                  <SelectItem value="cloud">Cloud Computing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Profile Picture</Label>
              <Input
                accept="image/*"
                type="file"
                className="cursor-pointer w-full"
                onChange={changeFileHandeler}
              />
            </div>
            {loading ? (
              <Button className="w-full my-2">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Updating
                Profile
              </Button>
            ) : (
              <Button type="submit" className="w-full my-2">
                {" "}
                Update Profile{" "}
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdate;
