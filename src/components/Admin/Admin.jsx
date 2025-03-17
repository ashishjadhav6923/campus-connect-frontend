import React from "react";
import { Button } from "../ui/button.jsx";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  const handleCreateStudent = () => {
    navigate("/create-student");
  };

  const handleDeleteStudent = () => {
    navigate("/delete-student");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FBFBFB]">
      <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl pb-6 font-semibold text-center">
          Campus<span className="text-purple-950">Connect🎓</span>
        </h1>
        <div className="w-full max-w-md bg-white border shadow-sm p-6 rounded-lg">
          <h1 className="font-bold text-left text-xl mb-5">
            Admin <span className="text-purple-700">Dashboard</span> 💻
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Choose an action below to manage student accounts:
          </p>
          <div className="flex flex-row gap-4">
            <Button
              variant="outline"
              onClick={handleCreateStudent}
              className="w-auto hover:text-purple-700 hover:border-purple-700 "
            >
              Create Student Account
            </Button>
            <Button
              variant="outline"
              onClick={handleDeleteStudent}
              className="w-auto hover:text-red-600 hover:border-red-600"
            >
              Delete Student Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
