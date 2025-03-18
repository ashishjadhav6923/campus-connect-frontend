import React, { useState } from "react";
import { Label } from "../ui/label.jsx";
import { Input } from "../ui/input.jsx";
import { RadioGroup } from "../ui/radio-group.jsx";
import { Button } from "../ui/button.jsx";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import axios from "axios";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const loading = false;
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!input.email || !input.password) {
      toast.error("All fields are required!");
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_PATH}/api/auth/login`,
        {
          email: input.email,
          password: input.password,
        }
        // {
        //   withCredentials: true,
        // }
      );
      console.log(response.data);

      if (response.status === 200) {
        const { isVerified, role } = response.data.data.user;

        if (role === "admin") {
          navigate("/admin/home");
        } else if (isVerified) {
          navigate(`/${role}/home`);
        } else {
          navigate(`/${role}/profileUpdate`);
        }
      } else {
        toast.error("Something Went wrong !");
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Something went wrong!");
    }

    // Check if user is logging in for the first time
    // const isNewUser = localStorage.getItem("isNewUser");

    // if (!isNewUser) {
    //   // First-time login, navigate to Profile Update
    //   localStorage.setItem("isNewUser", "false"); // Set flag
    //   // navigate("/profileUpdate");
    // } else {
    //   // Existing user, navigate to Home page
    //   navigate("/student/home");
    // }

    // toast.success("Logged in successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FBFBFB] px-4 sm:px-6">
      <div className="flex flex-col items-center justify-center w-full max-w-md">
        <h1 className="text-2xl sm:text-3xl pb-4 font-bold text-center">
          Campus<span className="text-purple-950">Connect🎓</span>
        </h1>

        <form
          onSubmit={submitHandler}
          className="w-full bg-white border shadow-sm p-6 rounded-lg"
        >
          <h1 className="font-bold text-lg sm:text-xl mb-5 text-left">
            Welcome Back <span className="text-purple-700">Mate!</span>
          </h1>
          <div className="my-4">
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Enter Email"
              className="w-full"
              required
            />
          </div>

          <div className="my-4">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              className="w-full"
              required
            />
          </div>

          {/* <div className="my-5">
            <RadioGroup className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                  required
                />
                <Label>Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="alumni"
                  checked={input.role === "alumni"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                  required
                />
                <Label>Alumni</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={input.role === "admin"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                  required
                />
                <Label>Admin</Label>
              </div>
            </RadioGroup>
          </div> */}

          {loading ? (
            <Button className="w-full my-2">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Logging in
            </Button>
          ) : (
            <Button type="submit" className="w-full my-2">
              Login
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
