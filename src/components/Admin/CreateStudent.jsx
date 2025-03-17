import React, { useState } from "react";
import { Label } from "../ui/label.jsx";
import { Input } from "../ui/input.jsx";
import { Button } from "../ui/button.jsx";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group.jsx";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function CreateStudent() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    prn: "",
    email: "",
    password: "",
    role: "student", // Default role
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (
      !input.name ||
      !input.prn ||
      !input.email ||
      !input.password ||
      !input.role
    ) {
      toast.error("All fields are required!");
      return;
    }

    // Proceed with form submission (e.g., API call)
    console.log(input);
    toast.success("Student account created successfully!");
    navigate("/admin/home");

    // Reset form after submission
    setInput({
      name: "",
      prn: "",
      email: "",
      password: "",
      role: "student",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded p-6">
        <h1 className="text-2xl font-bold mb-4 ">
          Create <span className="text-purple-700">Student</span> Account 🎓
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Fill in the details below to create a new student account.
        </p>
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
          <div className="mb-4">
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full"
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
  );
}

export default CreateStudent;
