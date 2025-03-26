import React, { useState } from "react";
import { Label } from "../ui/label.jsx";
import { Input } from "../ui/input.jsx";
import { Button } from "../ui/button.jsx";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group.jsx";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import Navbar from "../Shared/Navbar.jsx";

function CreateStudent() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    prn: "",
    email: "",
    password: "",
    role: "student",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    if (!input.name || !input.prn || !input.email || !input.password) {
      toast.error("All fields are required!");
      return false;
    }
    if (input.name.trim().length < 3) {
      toast.error("Name must be at least 3 characters long!");
      return false;
    }
    if (!/^[A-Z0-9]{9,}$/.test(input.prn)) {
      toast.error(
        "PRN must be at least 9 characters long and contain only uppercase letters and numbers!"
      );
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
      toast.error("Enter a valid email address!");
      return false;
    }
    if (input.password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      const response = await axios.post(
        `${import.meta.env.VITE_API_PATH}/api/admin/createUser`,
        input,
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        toast.success("Student account created successfully!");
        navigate("/admin/home");
        setInput({
          name: "",
          prn: "",
          email: "",
          password: "",
          role: "student",
        });
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create account!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white shadow-md rounded p-6">
          <h1 className="text-2xl font-bold mb-4">
            Create <span className="text-purple-900">Student</span> Account 🎓
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <Label>PRN</Label>
              <Input
                type="text"
                name="prn"
                value={input.prn}
                onChange={handleChange}
                placeholder="Enter PRN"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full"
              />
            </div>
            <div className="mb-4 relative">
              <Label>Password</Label>
              <div className="relative w-full">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={10} /> : <Eye size={10} />}
                </button>
              </div>
            </div>
            <div className="mb-6">
              <Label>Role</Label>
              <RadioGroup
                value={input.role}
                onValueChange={(value) => setInput({ ...input, role: value })}
                className="flex gap-4 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    id="student"
                    value="student"
                    className="cursor-pointer"
                  />
                  <Label htmlFor="student">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    id="alumni"
                    value="alumni"
                    className="cursor-pointer"
                  />
                  <Label htmlFor="alumni">Alumni</Label>
                </div>
              </RadioGroup>
            </div>
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateStudent;
