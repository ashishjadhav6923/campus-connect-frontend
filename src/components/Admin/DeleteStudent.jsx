import React, { useState } from "react";
import { Label } from "../ui/label.jsx";
import { Input } from "../ui/input.jsx";
import { Button } from "../ui/button.jsx";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group.jsx";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Shared/Navbar.jsx";
function DeleteStudent() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    role: "student", // Default role
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    if (!input.email || !input.role) {
      toast.error("Email and Role are required!");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
      toast.error("Enter a valid email address!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_PATH}/api/admin/deleteUser`,
        input
      );

      if (response.status === 200) {
        toast.success("Student account deleted successfully!");
        navigate("/admin/home");
        setInput({ name: "", email: "", role: "student" });
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete account!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white shadow-md rounded p-6">
          <h1 className="text-2xl font-bold mb-4">
            Delete <span className="text-purple-900">Student</span> Account 🎓
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Provide the details below to delete a student account.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label>Name (Optional)</Label>
              <Input
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
                placeholder="Enter full name (if known)"
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
                placeholder="Enter email"
                className="w-full"
                required
              />
            </div>
            <div className="mb-6">
              <Label>Role</Label>
              <RadioGroup
                value={input.role}
                onValueChange={(value) => setInput({ ...input, role: value })}
                className="flex gap-4 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="student" value="student" />
                  <Label htmlFor="student">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="alumni" value="alumni" />
                  <Label htmlFor="alumni">Alumni</Label>
                </div>
              </RadioGroup>
            </div>
            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700"
            >
              Delete Account
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default DeleteStudent;
