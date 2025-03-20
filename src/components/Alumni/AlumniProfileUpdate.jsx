import { useState } from "react";
import Navbar from "../Shared/Navbar.jsx";
import { Label } from "../ui/label.jsx";
import { Input } from "../ui/input.jsx";
import { Button } from "../ui/button.jsx";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

function AlumniProfileUpdate() {
  const [input, setInput] = useState({
    passingYear: "",
    domain: "",
    industry: "",
    companyName: "",
    jobTitle: "",
    experience: "",
    linkedIn: "",
  });
  const loading = false;
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/student/home");
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[#FBFBFB] px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg bg-white border shadow-lg p-8 rounded-xl">
          <div className="text-left">
            <h1 className="font-bold text-2xl mb-2 text-gray-800">
              Complete Your <span className="text-purple-900">Profile</span> 🎓
            </h1>
            <p className="text-sm text-gray-500">
              Fill out this form to update your profile for better
              opportunities.
            </p>
          </div>

          <form onSubmit={submitHandler} className="space-y-5 mt-5">
            <div>
              <Label className="font-semibold">Year of Passing</Label>
              <Input
                type="number"
                placeholder="Enter Year of Passing"
                name="passingYear"
                value={input.passingYear}
                onChange={changeEventHandler}
                className="w-full p-2 border rounded-md"
                min="2000"
                max="2100"
                required
              />
            </div>

            <div>
              <Label className="font-semibold">Domain</Label>
              <Input
                type="text"
                name="domain"
                value={input.domain}
                onChange={changeEventHandler}
                placeholder="Enter Your Domain"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div>
              <Label className="font-semibold">Industry</Label>
              <Input
                type="text"
                name="industry"
                value={input.industry}
                onChange={changeEventHandler}
                placeholder="Enter Industry"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div>
              <Label className="font-semibold">Company Name</Label>
              <Input
                type="text"
                name="companyName"
                value={input.companyName}
                onChange={changeEventHandler}
                placeholder="Enter Company Name"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div>
              <Label className="font-semibold">Job Title</Label>
              <Input
                type="text"
                name="jobTitle"
                value={input.jobTitle}
                onChange={changeEventHandler}
                placeholder="Enter Job Title"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div>
              <Label className="font-semibold">Years of Experience</Label>
              <Input
                type="number"
                name="experience"
                value={input.experience}
                onChange={changeEventHandler}
                placeholder="Enter Years of Experience"
                className="w-full p-2 border rounded-md"
                min="0"
                required
              />
            </div>

            <div>
              <Label className="font-semibold">LinkedIn Profile Link</Label>
              <Input
                type="url"
                name="linkedIn"
                value={input.linkedIn}
                onChange={changeEventHandler}
                placeholder="Enter LinkedIn Profile URL"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

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

export default AlumniProfileUpdate;
