import { useState } from "react";
import Navbar from "./Shared/Navbar.jsx";
import { Label } from "./ui/label.jsx";
import { Input } from "./ui/input.jsx";
import { Button } from "./ui/button.jsx";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select.jsx";

function ProfileUpdate() {
  const [input, setInput] = useState({
    fullname: "",
    phoneNumber: "",
    passingyear: "",
    companies: "",
    industry: "",
    branch: "",
    domain: "",
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

  const submitHandler = (e) => {
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
              a Better Experience!
            </h1>
            <p className="text-sm mt-2 text-gray-500">
              Please fill out this form to update your profile and ensure your
              information is accurate.
            </p>
          </div>
          <form onSubmit={submitHandler} className="space-y-4 mt-4">
            <div>
              <Label>Passing Year</Label>
              <Input
                type="number"
                placeholder="Enter Year of Passing"
                name="passingyear"
                value={input.passingyear}
                onChange={changeEventHandler}
                className="w-full"
                min="2000"
                max="2100"
                required
              />
            </div>
            <div>
              <Label>Preferred Companies</Label>
              <Input
                type="text"
                name="companies"
                value={input.companies}
                onChange={changeEventHandler}
                placeholder="Enter Companies Name"
                className="w-full"
                required
              />
            </div>
            <div>
              <Label>Industry</Label>
              <Input
                type="text"
                name="industry"
                value={input.industry}
                onChange={changeEventHandler}
                placeholder="Enter Industry"
                className="w-full"
                required
              />
            </div>
            <div>
              <Label>Degree</Label>
              <Input
                type="text"
                value="B.E"
                readOnly
                className="w-full bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div>
              <Label>Department</Label>
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
            {/* <div>
              <Label>Profile Picture</Label>
              <Input
                accept="image/*"
                type="file"
                className="cursor-pointer w-full"
                onChange={changeFileHandeler}
                required
              />
            </div> */}
            {loading ? (
              <Button className="w-full my-2">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Updating
                Profile
              </Button>
            ) : (
              <Button type="submit" className="w-full my-2">
                Update Profile
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdate;
