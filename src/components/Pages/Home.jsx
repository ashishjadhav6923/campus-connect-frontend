import React, { useState } from "react";
import Navbar from "../Shared/Navbar.jsx";
import AlumniCard from "../AlumniCard.jsx";
import FilterCard from "../FilterCard.jsx";
import { Filter } from "lucide-react";

const alumniProfiles = [1, 2, 3, 4, 5, 6, 7, 8];

function Home() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="bg-[#FBFBFB] min-h-screen">
      <Navbar />
      <br />

      <div className="max-w-7xl mx-auto mt-1 px-2">
        {/* Filter Toggle Button for Mobile */}
        <div className="sm:hidden flex justify-between items-center">
          <h2 className="text-lg p-3 text-purple-900 font-semibold">
            Filter Alumni Profiles
          </h2>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="p-2rounded-md"
          >
            <Filter className="w-5 h-5" />
          </button>
        </div>

        <div className="grid mt-4 grid-cols-1 sm:flex gap-5 ">
          {/* Filter Section - Hidden on Mobile by Default */}
          <div
            className={`w-full sm:w-1/5 ${
              showFilter ? "block" : "hidden sm:block"
            }`}
          >
            <FilterCard />
          </div>

          {/* Alumni Cards */}
          {alumniProfiles.length <= 0 ? (
            <span>Alumni Not Found</span>
          ) : (
            <div className="flex-1 overflow-y-auto pb-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {alumniProfiles.map((item, index) => (
                  <div key={index}>
                    <AlumniCard />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
